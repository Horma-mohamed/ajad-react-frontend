import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../../components/Header";
import moment from "moment";
import Divder from "../../includes/Divider";
import Footer from '../../components/Footer'
import {readingTime} from "reading-time-estimator";
import { RiFacebookFill, RiRedditLine } from "react-icons/ri";
import { ImLinkedin2 } from "react-icons/im";
import { BsArrowUp, BsReddit, BsTwitter, BsYoutube } from "react-icons/bs";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import {FiExternalLink} from 'react-icons/fi'
import {FaRedditAlien, FaUserAlt} from 'react-icons/fa'
import {motion,useAnimation,useScroll} from 'framer-motion'
import { BiArrowToTop, BiTimeFive } from "react-icons/bi";
import i18next from "i18next";
export default function Post(){
    
    //const [posts,setPosts] = useState()
    const CurrentLanguage = i18next.language
    const [post,setPost] = useState({})
    const {id} = useParams()
    const form  = useRef()
    const email  = useRef()
    const msg  = useRef()
    const {scrollYProgress}= useScroll()
    const control= useAnimation()
    //Facebook share function
    function shareOnFacebook(){
        const navUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + 'https://github.com/knoldus/angular-facebook-twitter.git';
        window.open(navUrl , '_blank');
    }
    //Twitter share function
    function shareOnTwitter() {
        const navUrl =
          'https://twitter.com/intent/tweet?text=' +
          'https://github.com/knoldus/angular-facebook-twitter.git';
        window.open(navUrl, '_blank');
      }
    //Linkedin share function
    function shareOnLinkedin() {
        const url= 'https://github.com/knoldus/angular-facebook-twitter.git'
        const navUrl =
          `https://www.linkedin.com/sharing/share-offsite/?url=${url}` 
          
        window.open(navUrl, '_blank');
      }
      //Linkedin share function
    function shareOnReddit() {
        const url= 'https://github.com/knoldus/angular-facebook-twitter.git'
        const navUrl =
          `https://www.reddit.com/submit?url=${url}` 
          
        window.open(navUrl, '_blank');
      }
   

    useEffect(()=>{
        fetch(`https://moha4567878.pythonanywhere.com/api-auth/articls/${id}/`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setPost(data)
            console.log(data)
        })
        

    },[])
   
   // var author = post.author.username
   let comments = post.comments
    return(
        <div className="w-screen ">
            <Header page={'post'}/>

            <div className="w-full flex justify-center pb-14">
<div className="lg:w-[50%] md:w-[75%] w-[90%]  h-screen bg-slate-0 mt-20 relative ">
    {/* <motion.div animate={shareListControl} className="space-y-5 hidden lg:block lg:fixed top-[40%] right-[12%]">
        <div onClick={()=>shareOnFacebook()} className="relative  group w-12 h-12 hover:bg-sky-700  border border-sky-700 rounded-full flex justify-center items-center">
            <RiFacebookFill className="text-xl text-sky-700 group-hover:text-white "/> 
            <h1 className="text-gray-500 absolute w-40 left-14 text-sm  translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform duration-500" >SHARE ON FACEBOOK</h1>
        </div>
        <div onClick={()=>shareOnLinkedin()} className="group w-12 h-12 hover:bg-sky-500  border border-sky-500 rounded-full flex justify-center items-center">
            <ImLinkedin2 className="text-xl text-sky-500 group-hover:text-white "/>
            <h1 className="text-gray-500 absolute w-40 left-14 text-sm  translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform duration-500" >SHARE ON LINKEDIN</h1>
        </div>
        <div onClick={()=>shareOnTwitter()} className="group w-12 h-12 hover:bg-sky-600  border border-sky-600 rounded-full flex justify-center items-center">
            <BsTwitter className="text-xl text-sky-600 group-hover:text-white "/>
            <h1 className="text-gray-500 absolute w-40 left-14 text-sm  translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform duration-500" >SHARE ON TWITTER</h1>
        </div>  
        <div onClick={()=>shareOnReddit()} className="group w-12 h-12 hover:bg-orange-400  border border-orange-400 rounded-full flex justify-center items-center">
            <RiRedditLine className="text-xl text-orange-400 group-hover:text-white "/>
            <h1 className="text-gray-500 absolute w-40 left-14 text-sm  translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform duration-500" >SHARE ON REDDIT</h1>
        </div>  
         
    </motion.div> */}
    
<h1 className="lg:text-4xl p-2  text-3xl font-bold text-gray-500 my-2">
        {CurrentLanguage=='en'?post.title_en:CurrentLanguage=='fr'?post.title_fr:post.title_ar}
    </h1>
        <div className="w-full  overflow-hidden p-2 lg:p-0">
        <img src={post.Thumb} className='w-full rounded-t-lg shadow-md ' alt="" srcset="" />
        </div>
        
        <div className=" w-full flex lg:mt-10 mt-4 justify-between items-center hidden">

       <div className="flex space-x-4 items-center lg:p-0 p-2">
       <div className="lg:w-10 lg:h-10 w-8 h-8  rounded-full  bg-gray-600 overflow-hidden">
        <img src="https://picsum.photos/100/100" alt="" srcset="" />
       </div>
       <h1 className="lg:text-xl text-lg text-gray-700 font-karla font-[]">{post.author_name}</h1>
       </div>
       <div className="flex space-x-5 items-center">
       <span className="lg:text-md text-sm text-gray-500 font- italic " >{moment(post.date).fromNow()}</span>
        <span className="lg:text-md text-sm w-24 text-gray-500 italic  " >{readingTime(post.description).text}</span>
       </div>
    </div>
    <div className="lg:mt-8 mt-5 w-[] font-karla text-justify text-md  text-gray-700 lg:pl-0 px-4 pr-lg:px-0 leading-8" dangerouslySetInnerHTML={{__html:CurrentLanguage=='en'?post.description_en:CurrentLanguage=='fr'?post.description_fr:post.description_ar}}/>
        
        <div className="w-full h-[1px] bg-gray-500 mb-5 mt-10"></div>
        <div className="w-full flex  items-center justify-between mb-10">
            <div className="flex md:space-x-8 space-x-4  ">
                <div className="md:text-md text-sm  text-gray-500 flex space-x-2 items-center"> <BiTimeFive/> <i className="text-gray-600  underline-offset-1 mr-4">   {moment(post.date).format("MMM Do YY")}</i></div> <div className="text-md items-center text-gray-500 flex space-x-2 capitalize"> <FaUserAlt/> <i className="text-gray-600">{post?.author_name}</i></div>
            </div>
            <div className="flex items-center space-x-4">
                <span className="p-1.5 border bg-slate-50 cursor-pointer rounded-md text-gray-600 flex items-center" >
                    <span className=" mr-2 "><FiExternalLink /></span>
                   <span className="w-full md:text-[10px] text-[8px]"> Copy link </span>
                </span>
                <div className="flex space-x-3">
                    <span className="md:w-6 w-6  md:h-6 h-6  rounded-md border flex justify-center items-center hover:border-sky-800 hover:bg-sky-800 hover:text-white cursor-pointer text-gray-500"><RiFacebookFill/></span>
                    <span className="md:w-6 w-6  md:h-6 h-6  rounded-md border flex justify-center items-center text-gray-500 hover:border-sky-600 hover:bg-sky-600 hover:text-white cursor-pointer"><ImLinkedin2/></span>
                    <span className="md:w-6 w-6  md:h-6 h-6  rounded-md border flex justify-center items-center text-gray-500 hover:border-sky-500 hover:bg-sky-500 hover:text-white cursor-pointer"><BsTwitter/></span>
                    <span className="md:w-6 w-6  md:h-6 h-6  rounded-md border flex justify-center items-center text-gray-500 hover:border-orange-400 hover:bg-orange-400 hover:text-white cursor-pointer"><FaRedditAlien/></span>
                    <span className="md:w-6 w-6  md:h-6 h-6  rounded-md border flex justify-center items-center text-gray-500 hover:border-red-500 hover:bg-red-500 hover:text-white cursor-pointer"><BsYoutube/></span>

                </div>
            </div>
        </div>
        <Divder h='6'/>
        {/* <div className="w-full  justify-center  p-4">
            <h1 className="lg:text-3xl text-2xl font- font-karla text-gray-600 underline">
                Comments
            </h1>
            {
                comments?.map((comment)=>(
                    <div className="w-[100%] h- mt-10 rounded-md bg-[#fcfcfc] p-4">
                       <div className=" w-full flex justify-between items-center">
       <div className="flex space-x-4">
       <div className="w-6 h-6  rounded-full bg-gray-600 overflow-hidden">
        <img src="https://picsum.photos/80/80" alt="" srcset="" />
       </div>
       <h1 className="lg:text-lg text-md text-gray-500 font-karla font-[]">{comment.author_name}</h1>
       </div>
        <span className="text-sm  text-gray-500 font- italic " >{moment(comment.date).fromNow()}</span>
       </div>
       <p className="mt- p-4 text-md text-gray-600">
        <div dangerouslySetInnerHTML={{__html:comment.text}}/>
       </p>
       
      
        
                    </div>
                ))
            }
            <Divder/>
        <form ref={form} className="   ">
            <input ref={email}  name="user_email" type="text" className="w-full p-2 my-5 h-14  border-b outline-none focus:border-orange-400 transform duration-300 focus:placeholder-orange-400" placeholder="Email" />
            <textarea ref={msg}  name="message" className="w-full h-44 border-b p-2 outline-none focus:border-orange-400 transform duration-300 focus:placeholder-orange-400" placeholder="Type Anything"   id="" cols="30" rows="10"></textarea>
            <button type="submit"  className="p-3 font-karla text-lg font-semibold text-gray-700 hover:text-orange-400 underline hover:underline-offset-2 my-5 float-right">Submit</button>
        </form>
        </div> */}
</div>

            </div>
            <div className="w-full h-14 " ></div>
            {/* <Footer /> */}
        </div>
    )
}