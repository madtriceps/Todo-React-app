import { Children, createContext, useContext, useState } from "react";

//1.Create Context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({children}) {

//2.Share the created context with other component
const [isAuthenticated, setAuthenticated]= useState(false)

function login(username,password){
        if(username==='Maddy' && password==='1234'){
            setAuthenticated(true);
            return true;
        }
        else{
            setAuthenticated(false);  
            return false;          
        }
}

function logout() {
    setAuthenticated(false);
}

return(
    <AuthContext.Provider value={ {isAuthenticated , login , logout} } >
        {children}
    </AuthContext.Provider>

)

}