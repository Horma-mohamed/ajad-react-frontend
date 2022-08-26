import { useEffect,useState } from "react";
import axios from "axios";
export default ()=>{
    const [programs,setPrograms]= useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/api-auth/programs/')
      .then((res)=>{
        return res.data
      })
        .then((data)=>{
            setPrograms(data.slice(0,5))
            //console.log(data)
        })
    },[])
    return programs
}