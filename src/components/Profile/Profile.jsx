import React, { useContext } from 'react';
import { authContext } from '../MainLayout/MainLayout';
import { Navigate } from 'react-router-dom';

const Profile = () => {
    const {user} = useContext(authContext)
    // console.log(user);
    // if(!user){
    //     return <Navigate to="/signin"></Navigate>
    // }
    return (
        <div>
            I ammm profile
        </div>
    );
};

export default Profile;