import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from '../../assets/firebase/firebase.init';
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const Login = () => {
    const [user, setUser] = useState(null);
    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleSignOut = () =>{
        signOut(auth)
        .then(result=>{
            setUser(null);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            {
                user ?
                <div>
                        <button onClick={handleSignOut}>Sign Out</button>
                        <h3>User: {user.displayName}</h3>
                        <p>Email: {user.email}</p>
                        <img src={user.photoURL}></img>
                    </div>:
                    <button onClick={handleSignIn}>Sign In With Google</button> 
            }
        </div>
    );
};

export default Login;