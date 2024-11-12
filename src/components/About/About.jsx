import React, { useContext, useEffect } from 'react';
import { authContext } from '../MainLayout/MainLayout';
import { Navigate } from 'react-router-dom';

const About = () => {
    const {handleGoogleLogin,setUser,user} = useContext(authContext)
   
    // console.log(user);
    // if(!user){
    //     return <Navigate to="/signin"></Navigate>
    // }
    return (
        <div>
            {user?.displayName}
            {user?.email}
            i am about
            <button onClick={handleGoogleLogin}>google login</button>
            <button onClick={()=> setUser("Abu kalam")}>abc</button>
            
        </div>
    );
};

export default About;