import { useEffect,useState } from "react";
import axios from "axios";
export default ()=>{
    const [cases,setCases]= useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/api-auth/cases/')
      .then((res)=>{
        return res.data
      })
        .then((data)=>{
            setCases(data.slice(0,4))
            //console.log(data)
        })
    },[])
    return cases
}