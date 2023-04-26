import { createContext,useContext,useEffect,useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const logIn = (email,password) =>{
      return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
      return signOut(auth)
    }

    const googleSignIn = () =>{
      const googleAuthProvider = new GoogleAuthProvider()
      return signInWithPopup(auth,googleAuthProvider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
            console.log(currentUser)
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    },[])

    return (
    <UserContext.Provider value={{createUser,user, logIn, logOut, googleSignIn}}>
      {children}
    </UserContext.Provider>
  )
};

export const useUserAuth = () => {
  return useContext(UserContext);
};

