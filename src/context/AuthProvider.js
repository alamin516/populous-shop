import React, { createContext, useContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';


const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading]  = useState(false)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
      }
    
      //   2. Update Name
      const updateUserProfile = (name) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
          displayName: name,
        //   photoURL: photo,
        })
      }
    
      //   3. Email Verify
      const verifyEmail = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
      }
    
      // 4. Google Signin
      const signInWithGoogle = () => {
        setLoading(true)
        // return signInWithPopup(auth, googleProvider)
      }
    
      // 5. Logout
      const logout = () => {
        setLoading(true)
        return signOut(auth)
      }
    
      //6. Login with Password
      const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
      }
    
      //7. Forget Password
      const resetPassword = email => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
      }
    
      useEffect(() => {
        //this part will execute once the component is mounted.
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser)
          setLoading(false)
        })
    
        return () => {
          //this part will execute once the component is unmounted.
          unsubscribe()
        }
      }, [])
    
      const authInfo = {
        user,
        createUser,
        updateUserProfile,
        verifyEmail,
        signInWithGoogle,
        logout,
        signin,
        resetPassword,
        loading,
        setLoading,
      }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuthContext = () =>{
    return useContext(AuthContext)
}

export {AuthProvider, useAuthContext};