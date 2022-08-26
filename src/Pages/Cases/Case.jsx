import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../../components/Header";
import moment from "moment";
import Divder from "../../includes/Divider";
import Footer from '../../components/Footer'
import {readingTime} from "reading-time-estimator";
import HeadingPage from "../../includes/Elements/HeadingPage";
import cases from "../../api/cases";
import { NavLink } from "react-router-dom";
import ThumbSlider from "../../includes/Elements/ThumbSlider";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";



// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
export default function Case(){
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const thumbSlides = document.querySelectorAll('#thumbSlide')
    //const [cases,setcases] = useState()
    const [Case,setCase] = useState({})
    const {id} = useParams()
    
    useEffect(()=>{
        fetch(`http://localhost:8000/api-auth/cases/${id}/`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setCase(data)
            console.log(data)
        })
        

    },[])
   
    return(
        <div className="w-screen ">
            <Header/>
            <div className="w-full flex justify-center ">
              <div className="w-[60vw]  mt-20 ">
                  <div className=" w-full flex justify-center">
              <h1 className="text-3xl font-bold text-gray-600 mb-10 " >{Case.title}</h1>
                  </div>
                  <div className="w-full justify-center flex">
                 <div className=" w-[500px]">
                 <img src={Case.Thumb} className='rounded-md w-full   mb-10' alt="" srcset="" />
                  <div className="text-lg text-gray-600" dangerouslySetInnerHTML={{__html:Case.description}} />

                 </div>
                  </div>

                  
              </div>
            </div>
            </div>
    )
  }

          