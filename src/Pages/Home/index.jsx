
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
import CasesSection from '../../includes/CasesSection';
import {useTranslation} from 'react-i18next'

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
  const {t} = useTranslation()
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
  <div className={`lg:w-[50%] w-full z-[-99]   overflow-hidden hidden items-center  lg:h-screen lg:absolute ${document.dir==='rtl'?'left-0':'right-0'} top-0  bg-gray-50 bg-opacity-    lg:block`} >
     
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
        <section className='w-full lg:h-screen  bg-gray-20     px-2'>
         <div className=" w-full lg:w-[45%] relative  ">
         <h1 className=' font-source text-4xl  text-gray-600 font-semibold pt-4  lg:px-4 px-4 drop-shadow-md shadow-orange-400  ' >{t("AJAD_HEAD_HERO")}</h1>

          <p className="font-karla mt-6 text-[#282523] text-lg text-justify px-4 lg:px-4 ">
            {t('AJAD_SHORT_INTRO')}
          </p>

          <a href='documents/docs/ajad_presentation.doc' download={true} className=" group lg:mt-10 ml-4 mb-8 bg-transparent  text-orange-400 border border-orange-400 w-72 lg:w-80 h-10 justify-center items-center rounded-full font-semibold flex space-x-3 px-2  mt-10   left-5 hover: hover:text-white hover:bg-orange-400 ">
            <span id='download' className='lg:text-md text-sm font-semibold group-hover:translate-y-0 ' > {t("DOWNLOAD_PRESENTATION")}</span>
            <motion.span  initial={{y:'0'}} animate={control}  transition={{yoyo:Infinity}}>
              <BsArrowDown />
              </motion.span>
          </a>
         </div>

         
        </section>
        <ProgramsSection/>
          {Cases().length >0 ?<CasesSection/>:''}
        <div className="w-full h- bg--400 mt-40  px-4 lg:px-4 ">
        <HeadingPage >
        {t("LATEST_POSTS")}
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