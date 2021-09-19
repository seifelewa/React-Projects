import React, {useState, useEffect} from 'react';


const Test = () => {
    const [message, setMessage] = useState(null);
    useEffect(() =>{
        fetch("/test")
        .then((res) => res.json())
        .then((data) => setMessage(data.message));
    }, []);
    return ( 
        <h1>
            <p>{!message ? "Loading..." : message}</p>
        </h1>
     );
}
 
export default Test;