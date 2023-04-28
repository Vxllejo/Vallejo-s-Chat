import { signInWithRedirect, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';
import { createContext, useState, useContext, useEffect  } from "react";
import {auth} from '../firebase'


//create context
const AuthContext = createContext();
//provider context
export const AuthProvider = ({children}) => {
  const  [currentUser, setCurrentUser]  = useState(null);
  const  [loading, setLoading]  = useState(true);



  //signin with google

  const signinWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
  }

  //sign out
  const logout = () => signOut(auth)
 
  const value = {
      currentUser,
      setCurrentUser ,
      signinWithGoogle,
      logout,
    }

    //set currentuser

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
            //console.log(user);
        });

        return unsubscribe;
    }, []);
 
 
      return (
      <AuthContext.Provider 
  value={value}>
    {!loading && children}
  </AuthContext.Provider>
      )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}