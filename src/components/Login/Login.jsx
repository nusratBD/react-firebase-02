import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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

    }
    return (
        <div>
            {
                user ?
                <div>
                        <button onClick={handleSignOut}>Sign Out</button>
                        <h3>User: </h3>
                    </div>:
                    <button onClick={handleSignIn}>Sign In With Google</button> 
            }
        </div>
    );
};

export default Login;