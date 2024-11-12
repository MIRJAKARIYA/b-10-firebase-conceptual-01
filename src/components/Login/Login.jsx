import React, { useContext } from 'react';
import { authContext } from '../MainLayout/MainLayout';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const {handleSignIn} = useContext(authContext)
    const handleSubmit = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

   
        // console.log(email,password,conPassword)
        handleSignIn(email,password)

    }
    return (
        <div>
        <form onSubmit={handleSubmit} action="">
            Email<input name='email' type="text" />
            <br/>
            Password<input name='password' type="text" />
            <br/>
            <button type='submit'>signin</button>
        </form>
        <NavLink to="/signup">signup</NavLink>
        
    </div>
    );
};

export default Login;