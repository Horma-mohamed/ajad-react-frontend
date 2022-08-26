import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import axios from "axios";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import Loader from "../includes/Loader";
import Slider from "../includes/Elements/Slider";

export default function Page2() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(()=>{
    axios.get('http://localhost:8000/api-auth/cases/')
    .then((res)=>{
      return res.data
    })
    .then((data)=>{
      //setCases(data)
      console.log(data)
    })

  },[])
  return (
   <div className="w-[500px] h-[400px]">
    <Slider/>
   </div>
  );
}
