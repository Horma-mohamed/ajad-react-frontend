import Header from "../../components/Header";
import {RiSearch2Line} from 'react-icons/ri';
import {BiSearch,BiError} from 'react-icons/bi'
import {BsSearch}from 'react-icons/bs'
import { useEffect, useRef, useState, useTransition } from 'react';
import { NavLink } from 'react-router-dom';
import Posts from "../../components/Post";
import Footer from "../../components/Footer";
import Divder from "../../includes/Divider";
import Loader from "../../includes/Loader";
import HeadingPage from "../../includes/Elements/HeadingPage";
import moment from "moment";
import { readingTime } from 'reading-time-estimator';

//import Posts from "../../components/Posts";
export default function Blog(){
    
    const [postsData,setPostsData] = useState([])
    const [posts,setPosts] = useState([])
    const [query,setQuery] = useState()
    const [loading,setLoading] = useState(false)
    const [headPost,setHeadPost] = useState({})
  
    const searchBtn = document.getElementById('search-btn')
    const searchIcon = document.getElementById('search-icon')
    // searchBtn.addEventListener('mouseenter',(e)=>{
    //     searchIcon.style.transform= `translate3d(${e.clientX}px,${e.clientY}px,0)`
    // })
    useEffect(()=>{
        //fetch("https://abdeli.pythonanywhere.com/api-auth/articls/")
        setLoading(true)
        fetch(`https://abdeli.pythonanywhere.com/api-auth/articls/1`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            
            setHeadPost(data)
            
        })
        fetch('https://abdeli.pythonanywhere.com/api-auth/articls/')
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            
            setPostsData(data.slice(0,20))
            setLoading(false)
            setPosts(data.slice(0,20))
            console.log(data)
        })

    },[])
    useEffect(()=>{
        if(query==''){
            setPosts(postsData)
        }
    },[query])
    function search(query){
        var filtredPosts = postsData.filter((post)=>post.title.includes(query))
        setPosts(filtredPosts)
    }
    function Slice(text,start,end){
            return text?.slice(start,end)
    }
    return(
        <div className=" min-h-screen">
            <Header page={'blog'}/>
        <div className="w-full h-10 lg:h-0"></div>
        
        
            <div className="w-full flex justify-center min-h-screen">

                <div className="w-[90%] lg:w-[90%] min-h-screen bg-gray50 mt-5">
                <div className="w-full hidden h-[80vh] ">
                  
                  <h1 className="text-5xl  text-gray-600 font-semibold mb-14 mt-5">
                       Insights , Charity Donations , Educaton , Social Security
                    </h1>
                    <p className="text-[18px] font-normal leading-[35px] text-justify text-gray-500 w-2/3 font-sans ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quasi natus cum iure iusto, nemo animi! Dolorum sed dolore ad.
                    </p>
                 
                </div>
                      
                 <div className="w-full pl-5 mt-6">
                    <h1 className="text-xl text-gray-600 font-bold pl-4 uppercase my-2">Featured</h1>
                     {
                        headPost?<NavLink to={`/blog/${headPost.id}`}>
                        <div className=" w-full h-[450px] bg-gray-00 p-4 lg:flex lg:space-x-4 lg:mb-0 mb-4 ">
                         <img src={headPost.Thumb} alt="" className="rounded-md w-full lg:w-[600px]" />
                         <div className=" lg:h-full ">
                         <p className="text-gray-400 p-2 space-x-4">
                             <span>{moment(headPost?.date).format("MMM Do YY") }</span> <span>{ readingTime(headPost.description).text}</span>
                         </p>
                         <h1 className=" lg:w-[400px] p-2  text-xl lg:text-5xl text-gray-700 font-semibold ">
                         {headPost.title}
                         </h1>
                         <p className="lg:w-[400px] text-lg text-gray-400 self- p-2">
                                 <div dangerouslySetInnerHTML={{__html:Slice(headPost?.description,0,200)}  }   />                     
                                 </p>
                         </div>
                         </div>
                        </NavLink>:''
                     }
                       <Divder h='20'/>
                       <h1 className="text-xl text-gray-600 font-bold pl-4 uppercase my-2">INTRESTING TOPICS</h1>
                   <div className="flex  w-full flex-wrap gap-4 gap-y-10">   
                      
                      
                       <Loader loading={loading} />
                       {

                       }
                  
                    
                        {
                            
                                posts.map((post,i)=>(post.id!=headPost.id?<Posts post={post} />:''))
                           
                        }
                    
        </div>
                   </div>

                </div>

            </div>
            <Divder h='20'/>
            <Footer/>
        </div>
    )
}




{/* <div className="w-full h-80 flex justify-center items-center ">
                                <div className="relative h flex justify-center items-center">
                                    <div className="space-y- text-center">
                                    <div className="flex justify-center">
                                    <img className="w-80 " src="img/empty.gif" alt="anythng" />   
                                    </div>
                                    <h1 className="text-gray-900 text-xl">
                                        Sorry , we can't find any thing match your query.
                                    </h1>
                                    </div>
                                </div>
                            </div>

<div  className="  w-[80%]  lg:w-[40%] h-14 my-10 z-20 bg-gray- rounded-md text-gray-700 font-karla rounded- relative  flex ">
<input id='searchInput' onChange={(e)=>{setQuery(e.target.value);search(query)}}  placeholder=' Search... ' className="w-[80%] h-full outline-orange-400 pl-4 outline-1 outline-offset-1  bg-gray-100 rounded-full mr-10 " type="search" name="search"  />
     <button id="search-btn" type="submit" onClick={()=>search(query)} className="w-[20%] h-full border-0  flex justify-center items-center bg-gradient-to-r from-orange-400 to-[#EA8C7C] rounded-full " >
         <RiSearch2Line id='search-icon' className="text-3xl text-white"/>
     </button>
 </div> */}