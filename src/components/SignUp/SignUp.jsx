import React, { useContext } from 'react';
import { authContext } from '../MainLayout/MainLayout';

const SignUp = () => {
    const {handleSignUp} = useContext(authContext)
    const handleSubmit = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const conPassword = e.target.conPassword.value;
        if(password.length <6){
            alert("Password must be at least 6 characters");
            return;
        }
        if(password !=conPassword){
            alert("Passwords didn't match")
            return
        }

        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=(.*\d){2,})(?=.*[$#%&]).+$/.test(password)){
            alert("password not valid");
            return;
        }
        // console.log(email,password,conPassword)
        handleSignUp(email,password);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                Email<input name='email' type="text" />
                <br/>
                Password<input name='password' type="text" />
                <br/>
                Confirm Password<input name='conPassword' type="text" />
                <br/>
                <button type='submit'>signup</button>
            </form>
        </div>
    );
};

export default SignUp;