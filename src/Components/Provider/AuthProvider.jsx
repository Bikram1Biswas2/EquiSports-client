import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import Swal from "sweetalert2";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {

const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true)

const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const signInUser = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const googleLogin = ()=>{
    return signInWithPopup(auth,googleProvider)
}

const updateUser = (updateUser)=>{
    return updateProfile(auth.currentUser,updateUser)
}

const logOut = async()=>{
    try{
   await signOut(auth)
   setUser(null)
   Swal.fire({
    position: "top-end",
    icon: "success",
    title: "LogOut Successful",
    showConfirmButton: false,
    timer: 1500
  });
    }catch{
       console.error("Logout failed",
       error.message)
    }
}

useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
     })
},[])

    const authInfo ={
        user,
        loading,
        setUser,
        createUser,
        signInUser,
        googleLogin,
        updateUser,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;