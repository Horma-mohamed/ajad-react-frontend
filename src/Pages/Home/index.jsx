
import '../../App.css';
import Header from '../../components/Header';
import {HiOutlineArrowNarrowRight,} from'react-icons/hi'
import {MdArrowRightAlt, MdDownload,} from 'react-icons/md'
import {BsArrowDown, BsArrowLeft, BsArrowRight, BsFillArrowRightCircleFill,} from 'react-icons/bs'
import Footer from '../../components/Footer';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { Autoplay, } from "swiper";
import { useEffect, useState, useTransition } from 'react';
import { NavLink } from 'react-router-dom';
import Post from '../../components/Post';
//2import Slider from '../../includes/slider'
//import Programs from '../../api/programs';
import Atropos from 'atropos';
import 'atropos/css'

// Import Swiper styles
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


import Posts from '../../api/posts'
import Cases from '../../api/cases';
import Mr from '../../includes/mr'
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import axios from 'axios';
import Programs from '../../api/programs';
import Partners from '../../api/partners';
//import Cases from '../../api/cases';
import moment from 'moment'
import ShortPresentation from '../../includes/ShortPresentation';
import ProgramsSection from '../../includes/ProgramsSection';
import ThumbSlider from '../../includes/Elements/ThumbSlider'
import HeadingPage from '../../includes/Elements/HeadingPage';
import Divder from '../../includes/Divider';
import PartnersSlider from '../../includes/PartnersSlider';
import { Pagination } from 'react-bootstrap';
import { BsArrowDownCircleFill } from 'react-icons/bs';
import { motion, useAnimation } from 'framer-motion';
import { ImCancelCircle } from 'react-icons/im';
import { FaTimes } from 'react-icons/fa';
import { grayscale } from 'tailwindcss/defaultTheme';

function Home() {
  const control = useAnimation()
  const controlModal = useAnimation()
  const controlModalBackgoround = useAnimation()
  const [modalContent,setModalContact] = useState({})
  window.onload= ()=>{
    control.start({y:'2px',transition:{duration:0.3,yoyo:Infinity}})
  }

  function showModal(){
    //setModal(modal)
    controlModal.start({scale:1,opacity:1})
    controlModalBackgoround.start({background:'transparent',backdropFilter:'blur(8px)',zIndex:999999999})
  }
  function hideModal(){
    //setModal(modal)
    controlModal.start({scale:0,opacity:0})
    controlModalBackgoround.start({background:'transparent', backdropFilter:'blur(0px)',backgroundOpacity:0,zIndex:-999})
  }
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  function rnd(){
        var rnd = Math.round(Math.random()*2)
        return rnd

  }

  function ThereIsMoreToRead(text){
      if(text.length>400){
        return text.slice(0,400)+ <a href="">read more</a>
      }
      else{
        return text
      }
  }
  return (
    <div className='relative '>
      <motion.div initial={{background:'transparent',zIndex:0}} animate={controlModalBackgoround} className="w-screen h-screen bg-gray-800 bg-opacity-40 fixed z-[99999999999] flex justify-center items-center">
        <motion.div initial={{scale:0,opacity:0}} animate={controlModal} className="w-[80%] h-[90%] overflow-y-scroll border bg-gray-50 bg-opacity-50 rounded-md relative">
          <span onClick={()=>{hideModal()}} className="p-2 text-lg absolute top-0 right-0 hover:text-red-500 cursor-pointer">
            <FaTimes/>
          </span>
          
          <div className="   w-full flex justify-center ">
          <div className="w-4/5 ">
          <h1 className="py-4 text-3xl text-gray-700 font-semibold">
            {modalContent?.title}
          </h1>
          {/* <Slider /> */}
              <div className="w-full space-y-4  ">
                <div className="w-full h-[400px]  rounded-md bg-gray-100 relative group">
                 <div className='overflow-hidden w-full h-full rounded-md'> <img src={modalContent?.Thumb} alt="" /></div>
                <i className="left-arrow scale-[0] group-hover:scale-[1]  transform duration-300 absolute top-[50%]  flex justify-center  items-center text-white -left-5 w-10 h-10 rounded-full bg-orange-400">
                  <BsArrowLeft/>
                </i>
                <i className="right-arrow scale-[0] group-hover:scale-[1]  transform duration-300 absolute top-[50%]  flex justify-center items-center text-white -right-5 w-10 h-10 rounded-full bg-orange-400">
                  <BsArrowRight/>
                </i>
                </div>
                <div className=" w-full flex justify-center">
                <div className=" space-x-4 flex  mt-2">
                  <div className="w-20 h-20 rounded-md overflow-hidden bg-gray-100 border-2 relative  before:absolute before:-top-3 before:w-1/2  before:h-0.5  before:bg-orange-400 before:rounded-lg">
                    <img className='h-full' src={modalContent?.Thumb} alt="" />
                  </div>
                  <div className="w-20 h-20 rounded-md bg-gray-200"></div>
                  <div className="w-20 h-20 rounded-md bg-gray-200"></div>
                  <div className="w-20 h-20 rounded-md bg-gray-200"></div>
                  <div className="w-20 h-20 rounded-md bg-gray-200"></div>
                  <div className="w-20 h-20 rounded-md bg-gray-200"></div>
                  <div className="w-20 h-20 rounded-md bg-gray-200"></div>
                  <div className="w-20 h-20 rounded-md bg-gray-200"></div>
                </div>
                </div>
                
              </div>
              <p className="mt-8 text-lg text-gray-600">
                <div  dangerouslySetInnerHTML={{__html:modalContent.description}}/>
              </p>
          </div>
          </div>
        </motion.div>
      </motion.div>
  <Header page={'home'}/>
  <div className="w-full h-24 lg:hidden"></div>
  <div className="lg:w-[50%] w-full z-[-99]   overflow-hidden hidden items-center  lg:h-screen lg:absolute right-0 top-0  bg-gray-50 bg-opacity-    lg:block" >
     {/* <Swiper
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

                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper w-full h-full "
                            >
                              <SwiperSlide className='w-full h-full'>
                              <div  >
                                <img src='img/photos/ajad1.jpg'  className=' object-cover   relative z-[] ' />
                             </div>

                              </SwiperSlide>


          </Swiper> */}
          <div className="w-full h-full relative">
            <div className="top-0 w-full h-full absolute z-[40] lg:bg-gray-900 bg-gray-500 lg:bg-opacity-30 bg-opacity-30">

            </div>
            <img src="img/photos/ajad1.jpg" className='lg:h-full lg:w-auto relative w-full  ' alt="" srcset="" />
          </div>
     </div>
  <div className=' w-screen  flex justify-center  '>
    <div className="w-[90vw] ">

    <div className="  w-[100%]">


     <div className=" pt-0  pb-4 lg:flex lg:justify-center">

        <div className="  lg:w-[95vw] ">
        <section className='w-full lg:h-screen lg:flex bg-gray-20     px-2'>
         <div className=" w-full lg:w-[45%] relative  ">
         <h1 className=' font-source text-4xl  text-gray-600 font-semibold pt-4  lg:px-4 px-4 drop-shadow-md shadow-orange-400  ' >COMMITED FOR HELPING
PEOPLE</h1>

          <p className="font-karla mt-6 text-[#282523] text-lg text-justify px-4 lg:px-4 ">
The non-governmental organization Association Jeunesse Action Développement (AJAD) is a Mauritanian non-profit voluntary development organization.
AJAD was created in 1997 by a group of young Mauritanians with the aim of protecting the national youth from the various temptations that can lead them to debauchery and marginalization and to bring the youth to participate effectively and efficiently in the national construction effort by subscribing to actions to fight against poverty, food insecurity and the degradation of social services (education and health).

</p>

          <a href='documents/docs/ajad_presentation.doc' download={true} className=" group mb-8 text-orange-500 font-semibold flex space-x-3 items-center mt-10 lg:-mt-10 lg:absolute bottom-40 left-5 hover:underline hover:text-orange-600 ">
            <span id='download' className='text-md font-semibold group-hover:translate-y-0 ' >DOWNLOAD AJAD PRESENTATION </span>
            <motion.span  initial={{y:'-2px'}} animate={control}  transition={{yoyo:Infinity}}>
              <BsArrowDownCircleFill />
              </motion.span>
          </a>
         </div>


        </section>
        <ProgramsSection/>
        <div className="w-full h- bg--400 mt-40  px-4 lg:px-4 ">
        <HeadingPage>
            STORIES FROM THE FIELD
        </HeadingPage>
        <ul className="w-[100%] flex flex-wrap gap-6 mt-10  ">

      {
        Cases().map((each)=>(
          <li className=' cursor-pointer group w-80 relative rounded border bg-gray-0 hover:shadow-xl transform duration-300  overflow-'>
            
        <div className="w-w-ful h-56 ">
          <img className='w-full h-full' src={each.Thumb} />
        </div>

        <div className="w-full px- py- bg-slate-0">
          <h1 className="py-2 text-teal-600 px-2">{each.region}</h1>
         <h1 className=" text-lg font-semibold font font-karla text-orange-500 uppercase px-2">
                {each.title}
          </h1>
           {/* <div className="text-gray-500 text-md mt-6  " dangerouslySetInnerHTML={{__html:each.description.slice(0,250)}} /> */}
        <p className="text-gray-500 text-md mt-3  px-2 ">{each.intro}</p>


          <div className="w-full flex justify-center mt-10">


            <div className="absolute text-center overflow-hidden right-0 top-0 w-10 group-hover:w-40 transform duration-500 flex group-hover:space-x-4 justify-center items-center h-10   rounded-bl-lg  bg-orange-400 group-hover:bg-orange-400 text-white">
                        <span className='text-md transform -translate-x-80 font-semibold duration-700 group-hover:translate-x-0 absolute group-hover:static '>Read more</span>
                        <BsArrowRight className='text-xl text-white group-hover:text-white '/>

            </div>

          </div>
        </div>
        
        </li>
        ))
      }

       </ul>
        </div>
        <div className="w-full h- bg--400 mt-40  px-4 lg:px-4 ">
        <HeadingPage >
            LATEST POSTS
          </HeadingPage>

          <ul className="p- pt-8 lg:space-y-0 lg:flex lg:flex-wrap lg:gap-8  ">
          {

              Posts().map((post,i)=>(
                  <Post post={post} />
              ))
            }
          </ul>
        </div>
        <div className='w-full pt-5 px-2 my-10 '>
        <PartnersSlider/>

    </div>
        </div>
     </div>

    </div>
    <Divder/>

    </div>

  </div>
  <Divder/>
  <Footer/>
  </div>
  );
}

export default Home;




{/*

<Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}

        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className=" w-full h-80 m mySwiper2 "
      >

        {
          Cases().map((each)=>(
            <SwiperSlide className='flex'>
         <NavLink to='/' className='flex  '>
          <div className="w-1/3 h-full">
            <img className='w-full' src={each.img} />
          </div>
          <div className="w-2/3 px-4 py-4 bg-slate-50">
           <h1 className="text-gray-900 text-xl font-semibold font font-karla">
            Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Cras dapibus.
            </h1>
            <p className="text-gray-500 text-lg mt-6 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eligendi hic in. Autem velit consectetur consequatur eius atque similique iusto nulla quia, optio magni totam sequi veniam doloribus omnis voluptatum illo consequuntur a temporibus facere non ipsum provident? Beatae, ipsum?
            </p>
          </div>
          </NavLink>
          </SwiperSlide>
          ))
        }
      </Swiper>
<Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper h-24 w-full'

      >

        {
          Cases().map((each)=>(
            <SwiperSlide>
          <img className='grayscale' src={each.img} />
          </SwiperSlide>
          ))
        }

      </Swiper> */}