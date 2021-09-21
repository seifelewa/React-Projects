import React, {createContext, useState, useEffect} from "react";


export const EmpContext = createContext();

const EmpContextProvider = (props) =>{
    const [emps, setEmps] = useState([]);
    useEffect(() =>{
        fetch("/test1")
        .then((res) => res.json())
        .then((data) => setEmps(data.message));
    }, []);
    return(
        <EmpContext.Provider value={{emps}}>
            {props.children}
        </EmpContext.Provider>
    )
}
export default EmpContextProvider;