import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword,GoogleAuthProvider, signOut } from 'firebase/auth';

;

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();

    const signUpForm = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInForm = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutBtn = ()=>{
        return signOut(auth)
    }

    const loginWithGoogle =()=>{
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        })
        return ()=> {
            unsubscribe
        }
    },[])

    const authInfo = {
        user,
        signUpForm,
        logInForm,
        logOutBtn,
        loginWithGoogle,
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;