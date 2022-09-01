import { BsArrowRight } from "react-icons/bs";
import { useSwiper } from "swiper/react";

export default function SwiperNextSlide(){
    const swiper = useSwiper()
    return(
      
                    <button onClick={()=>swiper.slideNext()} className="next z-40 w-10 h-10 rounded-full bg-orange-400 flex justify-center items-center absolute top-1/2 right-2">
                        <BsArrowRight className="text-white text-xl"/>
                    </button>
    )
}