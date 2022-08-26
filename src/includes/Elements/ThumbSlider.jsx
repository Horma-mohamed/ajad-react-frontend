import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";



// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";

export default function ThumbSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const thumbSlides = document.querySelectorAll('#thumbSlide')
  
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        autoplay={{
            delay:2500,
            disableOnInteraction:false,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode,Autoplay, Navigation, Thumbs]}
        className="mySwiper2 w-[90%] h-96 shadow-xl "
      >
        <SwiperSlide>
          <img src="img/photos/img1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/photos/img2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/photos/img3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/photos/Campagnebee.webp" className="h-full" />
        </SwiperSlide>
        
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        
        modules={[FreeMode,Thumbs]}
        className="mySwiper h-20 w-[90%] mt-5"
        
      >
<SwiperSlide>
          <img src="img/photos/img1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/photos/img2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/photos/img3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/photos/Campagnebee.webp" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
