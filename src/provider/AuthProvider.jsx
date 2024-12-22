/* eslint-disable react/prop-types */
import { createContext } from "react";

const GlobalContext = createContext();


const AuthProvider = ({children}) => {

    const globalInfo = {

    }
    return (
        <GlobalContext.Provider value={globalInfo}>{children}</GlobalContext.Provider>
    );
};

export {AuthProvider, GlobalContext };