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
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import 'swiper/css/pagination';



// import required modules
import { Autoplay, FreeMode, Thumbs } from "swiper";
import { IoMdQuote, IoMdShare } from "react-icons/io";
import { BsArrowLeft, BsArrowRight, BsFacebook } from "react-icons/bs";
import SwiperNextSlide from "../../includes/Elements/SwiperNextSlide";
import SwiperPrevSlide from "../../includes/Elements/SwiperPrevSlide";
import CollapseElement from "../../includes/Elements/CollapseElement";
import { BiShare } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { ImFacebook, ImLinkedin2, ImTwitter } from "react-icons/im";
export default function Case(){
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const thumbSlides = document.querySelectorAll('#thumbSlide')
    //const [cases,setcases] = useState()
    const [Case,setCase] = useState({})
    const {id} = useParams()
    const swiper = useSwiper()
    useEffect(()=>{
        fetch(`https://abdeli.pythonanywhere.com/api-auth/cases/${id}/`)
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
              <div className="w-[60vw]  my-20 ">
                  
                 <div className="w-full relative">
                    
                 <Swiper 
                  className="w-full h-[400px] rounded-md bg-slate-00"
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                    bulletClass: `swiper-pagination-bullet `
                 }}
                 loop={true}
                 modules={[ Pagination, A11y]}
                 
                  >
                    <SwiperNextSlide/>
                    <SwiperPrevSlide/>
                    <SwiperSlide className="w-full h-full" >
                                <img  className="w-full h-full" src={Case.Thumb} alt="" />
                            </SwiperSlide>
                    {
                        Case.album?.images?.map((each)=>(
                            <SwiperSlide className="w-full h-full" >
                                <img  className="w-full h-full" src={'http://res.cloudinary.com/horma/'+each.image} alt="" />
                            </SwiperSlide>
                        ))
                    }
                    
                  </Swiper>
                 </div>
                  <div className="flex  justify-between w-full my-10">
                  <h1 className="text-xl text-gray-600 font-sand font-semibold">
                    {Case.title} 
                  </h1>
                  <div className="p-2 bg-orange-400 rounded-lg text-white "> {Case.program} </div>
                  </div>
                    <p className="text-md text-gray-700 font-meduim text-justify mb-5">
                        {Case.description}
                    </p>
                    <div className="w-full py-8 rounded-lg bg-gray-100 relative my-10 flex justify-center pt-14  ">
                        <div className="w-20 h-20 bg-white rounded-full absolute -top-10 left-[50%] -translate-x-[50%] flex justify-center items-center">
                            <IoMdQuote className="text-4xl text-orange-400"/>
                        </div>
                        <p className="text-gray-700 font-bold font-sand text-md text-center w-2/3">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque praesentium quia consequatur reprehenderit possimus nihil autem cumque sit rerum magni? Nesciunt animi natus eius, reprehenderit saepe eum tempore blanditiis odit?
                        </p>
                    </div>

                    <div className="w-full my-10 space-y-5">
                        <CollapseElement Title={'Target Group'} Desc={Case.target_group} />
                        <CollapseElement Title={'Number Of The Beneficiareis'} Desc={Case.number_of_beneficiaries} />
                        <CollapseElement Title={'Place Of Implemention'} Desc={Case?.place_of_implemention} />
                    </div>
                    <div className=" w-[360px] flex space-x-4 border rounded-full px-4 py-2">
                        <span className="py-2 px-4  text-xl   flex items-center space-x-2 text-gray-500 font-semibold"> <IoMdShare /> <p>Share</p></span>
                        <span className=" w-10 h-10 rounded-full bg-sky-700  flex justify-center items-center ">
                            <ImFacebook  className="text-xl text-white" />
                        </span>
                        <span className=" w-10 h-10 rounded-full bg-sky-500 flex justify-center items-center  ">
                            <ImTwitter className="text-xl text-white"/>
                        </span>

                        <span className=" w-10 h-10 rounded-full bg-sky-600  flex justify-center items-center ">
                        <ImLinkedin2 className="text-white text-xl"/>
                        </span>
                        
                        
                    </div>

                  
              </div>
            </div>
            </div>
    )
  }

          