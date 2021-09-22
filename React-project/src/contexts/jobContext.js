import React, {createContext, useState,useEffect} from "react";


export const JobContext = createContext();

const JobContextProvider = (props) =>{
    const [jobs, setJobs] = useState([
        {id:1 ,type: "Full Stack Development", pay_Rate:"20", level:"Intermideiate"},
        {id:2 ,type: "Sales", pay_Rate:"30", level:"Expert"},
        {id:3 ,type: "UX Design", pay_Rate:"10", level:"Beginner"},
        {id:4 ,type: "AI Development", pay_Rate:"20", level:"Intermideiate"},
        {id:5 ,type: "Java Development", pay_Rate:"35", level:"Intermideiate"}
]);
    useEffect(() =>{
        fetch("/test2")
        .then((res) => res.json())
        .then((data) => setJobs(data.message));
    }, []);
    return(
        <JobContext.Provider value={{jobs}}>
            {props.children}
        </JobContext.Provider>
    )
}
export default JobContextProvider;