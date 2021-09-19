import React, {createContext, useState} from "react";


export const JobContext = createContext();

const JobContextProvider = (props) =>{
    const [jobs, setJobs] = useState([
        {id:1 ,type: "Full Stack Development", pay_Rate:"20", level:"Intermideiate"},
        {id:2 ,type: "Sales", pay_Rate:"30", level:"Expert"},
        {id:3 ,type: "UX Design", pay_Rate:"10", level:"Beginner"},
        {id:4 ,type: "AI Development", pay_Rate:"20", level:"Intermideiate"},
        {id:5 ,type: "Java Development", pay_Rate:"35", level:"Intermideiate"}
]);
    // useEffect(() =>{
    //     fetchData().then(res => setJobs(res.data))
    // },[])
    // const fetchData = async () => {
    //     try {
    //         const response = await fetch();
    //         const json = await response.json();
    //         console.log(json);
    //         } catch (error) {
    //         console.log("error", error);
    //         }
    // };
    return(
        <JobContext.Provider value={{jobs}}>
            {props.children}
        </JobContext.Provider>
    )
}
export default JobContextProvider;