import { BsArrowLeft } from "react-icons/bs";
import { useSwiper } from "swiper/react";

export default function SwiperPrevSlide(){
    const swiper= useSwiper()
    return(
        <button onClick={()=>swiper.slidePrev()} className="prev z-40 w-10 h-10 rounded-full bg-orange-400 flex justify-center items-center absolute top-1/2 left-2">
        <BsArrowLeft className="text-white text-xl"/>
    </button>
    )
}