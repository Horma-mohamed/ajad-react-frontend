import { NavLink } from "react-router-dom";
import { Autoplay } from "swiper";
import {Swiper, SwiperSlide } from "swiper/react";
import partners from "../api/partners";
import HeadingPage from "./Elements/HeadingPage";

export default function PartnersSlider() {
    return(
        <>
             <div className='w-full pt-5 px-2 my-10 '>
       
          <HeadingPage>
          WE HAVE WORKED WITH 
          </HeadingPage>
          <div className='w-full flex justify-center '>
          <ul className="w-[80%] lg:w-[95%] flex  flex-wrap gap-4 space-y lg:space-y-0 lg:flex lg:space-x-4 mt-10">
             <Swiper 
        spaceBetween={14}
        
        centeredSlides={true}
        loop= {true}
        autoplay={{
        delay: 2500,
        
        disableOnInteraction: false,
        }}
        pagination={{
        clickable: true,
        }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
           
            slidesPerView: 4,
          },
          900: {
            
            slidesPerView: 5,
          },
        }}
      

        
        modules={[Autoplay]}
        className="mySwiper w-full h-full "
        >
             {
                partners().map((each,i)=>(
                  <SwiperSlide className="w-24">
                  <li className="w-full md:w-auto lg:w-auto flex justify-center ">
               <NavLink to='/'> <div className="group w-24  h-24 bg-gray-00  relative ">
                 <img src={each.icon_url} className='w-full h-full opacity-30 group-hover:opacity-100 transform duration-300 '  alt={each.name} />
                 <div className="w-full h-full bg-gray-500  opacity-0 absolute top-0"></div>
                  </div></NavLink>
              </li>
              </SwiperSlide>
                ))
              }
              </Swiper>
              </ul>
          </div>
          
    </div>
        
            

          
        </>
    )
}