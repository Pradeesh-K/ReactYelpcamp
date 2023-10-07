import React , {useState,useEffect} from 'react';
import axios from 'axios';


export default function Home () {
   const [message, setMessage] = useState("Empty")
    useEffect(() => {
        axios
        .get('http://localhost:5555/')
        .then((response) => {
            console.log(response);
            setMessage(response.data);
        })
        .catch((error) => {
            // alert("Error");
            console.log(error);

        });
    },[])

    return (
        <div >
            <h1>{message}</h1>
        </div>
    )
}