import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../../assets/firebase/firebase.init';
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const handleSignIn = () =>{
    signInWithPopup(auth, provider)
    .then(result=>{
        const user = result.user;
        console.log(user)
    })
    .catch(error=>{
        console.log(error)
    })
}
const Login = () => {
    return (
        <div>
            <button onClick={handleSignIn}>Sign In With Google</button>
        </div>
    );
};

export default Login;