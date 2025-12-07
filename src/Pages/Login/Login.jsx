//import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { use } from 'react';
import { NavLink } from 'react-router';
import { GoogleSignIn } from '../../Context/signInwithGoogle';
//import { auth } from '../../../public/firebase.init';

const Login = () => {
    const{handleLoginwithGoogle}=use(GoogleSignIn)
   
    return (
        <div>
            <h1>Please Login.</h1>
            <NavLink to='/user'>
                <button onClick={handleLoginwithGoogle} >Login with Google</button>
            </NavLink>
        </div>
    );
};

export default Login;