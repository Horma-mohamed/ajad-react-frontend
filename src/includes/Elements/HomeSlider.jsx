import  { Autoplay, Navigation, Pagination } from "swiper";
import { SwiperSlide ,Swiper } from "swiper/react";
import cases from "../../api/cases";
export default function HeadingPage({post,children}) {
  
    return(
       <>
                   <Swiper
                            spaceBetween={0}
                            centeredSlides={true}
                            loop= {true}
                            autoplay={{
                            delay: 2500,
                            
                            disableOnInteraction: false,
                            }}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={true}
                            fadeEffect={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper w-full h-full "
                            >
                                {
                                    cases().map((c)=>(
                                        <SwiperSlide className="w-full  ">
                                        <img className=" " src={c.Thumb} alt="" srcset="" />
                                     </SwiperSlide>
                                     
                                    ))
                                }
                            {/* <SwiperSlide className="w-full  ">
                                
                               <img className=" " src="img/photos/img1.jpg" alt="" srcset="" />
                            </SwiperSlide>
                            <SwiperSlide className="w-full  ">
                               <img className=" " src="img/photos/img2.jpg" alt="" srcset="" />
                            </SwiperSlide> */}
                            
                        </Swiper>
       </>
    )
}

