import { useEffect,useState } from "react";
import axios from "axios";
export default ()=>{
    const [posts,setPosts]= useState([])
    useEffect(()=>{
        axios.get('https://abdeli.pythonanywhere.com/api-auth/articls/')
      .then((res)=>{
        return res.data
      })
        .then((data)=>{
            setPosts(data.slice(0,4))
            //console.log(data)
        })
    },[])
    return posts
}