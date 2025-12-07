import React, { use } from 'react';
import { GoogleSignIn } from '../../Context/signInwithGoogle';
import { NavLink } from 'react-router';
import './User.css'

const User = () => {
    const{user,handleSignOutWithGoogle}=use(GoogleSignIn)
   
    return (
        <div>
           {
            user ? <>
                <h1>Welcome, {user.displayName}</h1>
                <img src={user.photoURL} alt="" />
                <button onClick={handleSignOutWithGoogle}>Sign out</button>
            </>: <div>
                <NavLink to='/'>
                <button>Back to Home</button>
                </NavLink>
                </div>
           } 
        </div>
    );
};

export default User;