import { createContext, useContext, Context, useEffect, useState  } from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from "../firebase";
// Inside Context.
//import { } from "react";
import { onAuthStateChanged } from "firebase/auth";


/*type authContextType = {
    user: any;
    //login: () => any;
    //logout: () => any;
    login:  any;
    logout:  any;
};*/

/*
const authContextDefaultValues: authContextType = {
    user: null,
    login: () => {},
    logout: () => {},
};
*/

const AuthContext = createContext({
  //authUser: null,
  user: null,
  login:  () => {},
  logout:  () => {},
  //credential: null,
  //token: null,
});

//const AuthContext = createContext<authContextType>(authContextDefaultValues);

//export function useAuth() {
//    return useContext(AuthContext);
//}

export const useAuth = () => useContext(AuthContext);

/*
type Props = {
    children: ReactNode;
};
*/

export function AuthProvider({ children }) {
//export function AuthProvider({ children }: Props) {
    //const [user, setUser] = useState<boolean>(null);
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({});

    const login = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                //const user = setUser(result.user);
                const user = result.user;
                setUser(result.user);
                console.log({ credential, token, user });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                //console.log({ errorCode, errorMessage, email, credential });
            });
    };

    const logout = () => {
        auth.signOut();
        console.log("logout");
    };


    //const value = {user,login,logout,};
    const values = {user,login,logout};
    /*
    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
    */
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

/*
useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            console.log({ uid });
        } else {
            console.log("no user");
        }
    });
}, []);
*/

