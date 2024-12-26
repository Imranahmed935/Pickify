import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const signUpForm = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInForm = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutBtn = () => {
    setLoading(true);
    return signOut(auth);
  };

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser?.email){
        const user = {userEmail: currentUser.email}
        axios.post('http://localhost:5000/jwt', user, {withCredentials:true})
        setLoading(false);
      }else{
        axios.post('http://localhost:5000/logout', {}, {withCredentials:true})
        setLoading(false);
      }
    });
    return () => {
      unsubscribe;
    };
  }, []);

  const authInfo = {
    user,
    loading,
    signUpForm,
    logInForm,
    logOutBtn,
    loginWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
