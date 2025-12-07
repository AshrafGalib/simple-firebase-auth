import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import { GoogleSignIn } from '../../Context/signInwithGoogle';
import { GoogleAuthProvider, signInWithPopup,signOut } from 'firebase/auth';
import{ useState } from 'react';
import { auth } from '../../../public/firebase.init';
 

const Root = () => {
     const [user,setUser]=useState(null)
    const provider = new GoogleAuthProvider();
    const handleLoginwithGoogle=()=>{
        console.log('Logged in.')
        signInWithPopup(auth, provider)
        .then(result=>{
            console.log(result.user)
            setUser(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const handleSignOutWithGoogle=()=>{
signOut(auth).then(() => {
  console.log('Signed out successfully')
  setUser(null)
}).catch((error) => {
  console.log(error)
});
    }
    return (
        <div>
            <Navbar></Navbar>
            <GoogleSignIn.Provider value={{user,handleLoginwithGoogle,handleSignOutWithGoogle}}>
                <Outlet></Outlet>
            </GoogleSignIn.Provider>
            <Footer></Footer>
        </div>
    );
};

export default Root;