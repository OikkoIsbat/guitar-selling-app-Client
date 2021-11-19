import React from 'react';
import { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';
const Login = () => {
    const [user, setUser] = useState({})
    const { signInUsingGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';





    return (
        <div className="login-form">
            <div>
                <h2 className="text-primary text-center">Login</h2>
                {/* <form onSubmit="">
                    <input type="email" placeholder="Your mail" />
                    <br />
                    <br />
                    <input type="password" name="" id="" placeholder="Enter Your Password" Enter Password />
                    <br />
                    <br />
                    <input type="submit" value="submit" />
                    <br />



                </form> */}
                <h4>Please <Link to="/register">Click Here</Link> to Login or Sign Up</h4>


                <hr />
                <h3>Or</h3>

                {/* <div>--------</div>
                <button type="button" onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button> */}

                <button type="button" onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>

            </div>


        </div>
    );
};

export default Login;