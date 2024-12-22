/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, updateProfile, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";

const GlobalContext = createContext();


const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const [user, setUser] = useState(auth.currentUser);
    const [loading, setLoading] = useState(true);

    // server URL
    const server_url = "http://localhost:5000";

    // variables for google signin login
    const googleProvider = new GoogleAuthProvider();

    // create user with email
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update profile
    const updateUserProfile = (updatedProfile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, updatedProfile);
    }

    // google sigin
    const createUserWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // login user with email
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google login
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // logout user
    const userLogOut = () => {
        return signOut(auth);
    }

    const globalInfo = {
        createUser,
        user,
        setUser,
        loading,
        setLoading,
        updateUserProfile,
        createUserWithGoogle,
        loginUser,
        loginWithGoogle,
        userLogOut,
        server_url
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [auth]);

    return (
        <GlobalContext.Provider value={globalInfo}>{children}</GlobalContext.Provider>
    );
};

export { AuthProvider, GlobalContext };