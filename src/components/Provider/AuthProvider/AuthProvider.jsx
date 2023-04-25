import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import app from '../../../firebase/firbaseConfig';


const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const [user , setUser ] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const createUser = (email, password ) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }
    const singInUser = (email , password )=>{
        setIsLoading(true)
       return signInWithEmailAndPassword(auth, email , password)
        
      
    }
    const logout = () => {
        return signOut(auth)
    }
   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
    setUser(currentUser);
    setIsLoading(false)
    });
    return () => {
           return unsubscribe();
    }
   },[])
    const authInfo = {
        user,
        isLoading,
        createUser,
        singInUser,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;