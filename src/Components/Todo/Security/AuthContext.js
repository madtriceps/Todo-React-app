import { Children, createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";

//1.Create Context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({children}) {

//2.Share the created context with other component
const [isAuthenticated, setAuthenticated]= useState(false)

const [username , setUsername] = useState(null)

const [token,setToken] = useState(null)
// function login(username,password){
//     if(username==='Maddy' && password==='1234'){
//         setAuthenticated(true);
//         setUsername(username)
//         return true;
//     }
//     else{
//         setAuthenticated(false); 
//         setUsername(null)
//         return false;          
//     }
// }

async function login(username,password){
    const baToken = 'Basic '+ window.btoa(username+ ":" +password)
    try{
    const response  = await executeBasicAuthenticationService(baToken)

    if(response.status==200){
        setAuthenticated(true);
         setUsername(username)
         setToken(baToken)
         return true;
        
    }
    else{
         logout()        
         }
    }
    catch(error){
        logout()
         return false;

    } 


    //This was the hardcoded auth before we used spring security in backend
    // if(username==='Maddy' && password==='1234'){
    //     setAuthenticated(true);
    //     setUsername(username)
    //     return true;
    // }
    // else{
    //     setAuthenticated(false); 
    //     setUsername(null)
    //     return false;          
    // }
}

function logout() {
    setAuthenticated(false);
}

return(
    <AuthContext.Provider value={ {isAuthenticated , login , logout , username , token} } >
        {children}
    </AuthContext.Provider>

)

}