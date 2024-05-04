import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // register/ sign up
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
    // Login/ sign in
    const signIn = (email, password) => {
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }
    // Log out
    const logOut = () => {
      setLoading(true)
      return signOut(auth)
    }

  useEffect(()=> {
  const unSubscribe = onAuthStateChanged(auth, currentUser => {
    setUser(currentUser)
    console.log('Current user', currentUser)
    setLoading(false)
   });
   return () => {
    return unSubscribe();
   }
  }, [])
    const authrInfo = {
      user,
      loading,
      createUser,
      signIn,
      logOut
    }
    return (
        <AuthContext.Provider value={authrInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;