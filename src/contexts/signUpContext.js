import React, {createContext, useState} from "react";
import {v1 as uuidv1} from "uuid";


export const SignUpContext = createContext();

const SignUpContextProvider = (props) =>{
    const [user, setUser] = useState({fname: null, lname: null, email: null, p1: null, p2:null, freelancer: true, id:uuidv1 });
    const addUser = (fname, lname,email,p1,p2, freelancer) => {
        setUser({...user, fname, lname,email,p1,p2, freelancer})
    }
    return(
        <SignUpContext.Provider value={{user, addUser}}>
            {props.children}
        </SignUpContext.Provider>
    )
}

export default SignUpContextProvider;
