import { useEffect, useState } from "react";

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                sessionStorage.setItem("email", result.user.email);
                saveUser(result.user.email);
            })
    }
    useEffect(() => {
        fetch(`https://blooming-peak-02983.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})

            })
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user);
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribed;

    }, [])


    const saveUser = (email) => {
        const user = { email };
        fetch('https://blooming-peak-02983.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }


    return {
        user,
        signInUsingGoogle,
        admin,
        logOut
    }
}

export default useFirebase;