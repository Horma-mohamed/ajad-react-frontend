import { useEffect,useState } from "react";
import axios from "axios";
export default ()=>{
    const [partners,setPartners]= useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/api-auth/partners/')
      .then((res)=>{
        return res.data
      })
        .then((data)=>{
            setPartners(data)
            //console.log(data)
        })
    },[])
    return partners
}