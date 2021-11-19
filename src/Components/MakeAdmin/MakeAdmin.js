import React, { useRef, useState } from 'react';



const MakeAdmin = () => {

    const emailRef = useRef();
    const [success, setSuccess] = useState(false);

    const handleEmailSubmit = e => {
        e.preventDefault();
        const emailSubmit = emailRef.current.value;
        console.log(emailSubmit);
        const user = { emailSubmit };
        console.log(user);
        fetch('https://blooming-peak-02983.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    emailRef.current.value = '';
                    setSuccess(true);


                }
                console.log(data);
            })
    }
    // const [email, setEmail] = useState('');
    // const handleOnBlur = e => {
    //     setEmail(e.target.value);
    // }
    // const handleAdminSubmit = e => {
    //     e.preventDefault();
    // }
    return (
        <div>
            <h2 className="text-center text-danger">Make Admin</h2>
            <form className="text-center" onSubmit={handleEmailSubmit} >
                <input type="email" ref={emailRef} placeholder="Email" defaultValue="" />
                <br />



                <input className="bg-warning " type="submit" value="Submit" />

                <br />
                <br />


            </form>
            {success && alert('Made Admin')}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default MakeAdmin;