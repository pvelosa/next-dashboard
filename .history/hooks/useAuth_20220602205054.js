import react, {useState, useContext, createContext} from "react";
import Cookie from 'js-cookie';
import axios from 'axios';

const AuthContext = createContext();

export function ProviderAuth({children}){
    const auth = useProviderAuth();
    return <AuthContext.Provider value = {auth}>{children}</AuthContext.Provider>
}