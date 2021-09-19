import React, {createContext, useState} from "react";


export const EmpContext = createContext();

const EmpContextProvider = (props) =>{
    const [emps, setEmps] = useState([
        {name: "Abdel-Rahman", rate: 20, rating: 1, jobCount: 32},
        {name: "Seif Elewa", rate: 30, rating: 3.5, jobCount:24},
        {name: "Maryam Nouh", rate: 40, rating: 5, jobCount:57},
        {name: "Youssef Mansi", rate: 50, rating: 4, jobCount:68},
        {name: "Youssef Mansi", rate: 50, rating: 4, jobCount:68},
        {name: "Youssef Mansi", rate: 50, rating: 4, jobCount:68},
        {name: "Youssef Mansi", rate: 50, rating: 4, jobCount:68},
        {name: "Youssef Mansi", rate: 50, rating: 4, jobCount:68},
        {name: "Youssef Mansi", rate: 50, rating: 4, jobCount:68},
        {name: "Youssef Mansi", rate: 50, rating: 4, jobCount:68},
        {name: "Youssef Mansi", rate: 50, rating: 4, jobCount:68},
        {name: "Youssef Mansi", rate: 50, rating: 4, jobCount:68},
        {name: "Youssef Mansi", rate: 50, rating: 4, jobCount:68},
        {name: "Youssef Mansi", rate: 50, rating: 4, jobCount:68},
        {name: "Youssef Mansi", rate: 50, rating: 4, jobCount:68},
        {name: "Youssef Mansi", rate: 50, rating: 4, jobCount:68},
        {name: "Youssef Mansi", rate: 50, rating: 4, jobCount:68},
        {name: "Youssef Mansi", rate: 50, rating: 4, jobCount:68},
]);
    // useEffect(() =>{
    //     fetchData().then(res => setEmps(res.data))
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
        <EmpContext.Provider value={{emps}}>
            {props.children}
        </EmpContext.Provider>
    )
}
export default EmpContextProvider;