import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth } from '../../../public/firebase.init';

const Login = () => {
    const provider = new GoogleAuthProvider();
    const handleLoginwithGoogle=()=>{
        console.log('Logged in.')
        signInWithPopup(auth, provider)
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <h1>Please Login.</h1>
            <button onClick={handleLoginwithGoogle}>Login with Google</button>
        </div>
    );
};

export default Login;