import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { useEffect } from "react";
import {Modal, Button,ModalHeader,ModalTitle,ModalFooter } from "react-bootstrap";
import { BiCloset, BiFile, BiImage, BiTime, BiVideo } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { MdClose, MdDelete } from "react-icons/md";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeadingPage from "../../includes/Elements/HeadingPage";
import Loader from "../../includes/Loader";
import { useTranslation } from "react-i18next";

export default function Gallery(){
    const [data,setData]=useState([])
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {t} = useTranslation()

    useEffect(()=>{
        setLoading(true)
        fetch('http://localhost:8000/api-auth/Files/')
        .then((res)=>{
                return res.json()
        })
        .then((data)=>{
            
                setData(data)
                setLoading(false)
                
                console.log(data)
                setGallery(data)
            
            
            //console.log(data)
        })
    },[])
    const [gallery,setGallery]=useState(data)
    function galleryFilterFunction(type) {
        
        if(type==''){
            setGallery(data)
        }
        else{
        var filtredData = data.filter(each=>each.type==type)
        setGallery(filtredData)
        }
        console.log(gallery)
    }

    const  filters = document.querySelectorAll('#galleryfilter')
    
        for(var i =0; i<filters.length ;i++){
            const filter = filters[i]
            filter.addEventListener('click',()=>{
                for(var j =0; j<filters.length ;j++){
                   const otherFilter = filters[j]
                   otherFilter.classList.remove('border')
                   otherFilter.classList.remove('text-orange-400')
                   otherFilter.classList.add('text-gray-400')
                   otherFilter.classList.remove('text-orange-400')
                }
                filter.classList.add('border')
                filter.classList.add('border-orange-400')
                filter.classList.add('text-orange-400')
                //filter.classList.add('font-semibold text-orange-500 underline underline-offset-1')
                
            }) 
       
        }
        
        const modal = document.getElementById('modal')
       
       function viewItem(e){
        let itemType =e.target.getAttribute('type')
        if ( itemType == 'Image'){
        const img = document.createElement('img')
        img.src = e.target.getAttribute('link')
        setShow(true)
        modal.innerHTML = ''
        modal.appendChild(img)
        }
        else{
            const iframe = document.createElement('iframe')
            iframe.width = '700'
            iframe.height = '400'
            iframe.src = e.target.getAttribute('link')
            setShow(true)
            modal.innerHTML = ''
            modal.appendChild(iframe)
        }
       
        
        
       }
    return(
        <div className="relative w-screen ">
            <Header page={'gallery'}/>
            
            <div onClick={()=>{setShow(false);modal.innerHTML = ''}} className={`w-full h-screen flex justify-center items-center fixed top-0 transition-all duration-300  ${show?'z-[99999] bg-gray-900 bg-opacity-60':'z-[-99999]'} `}>
              
            </div>
            <div className={` bg-gray-00 flex justify-center opacity-0 lg:max-w-[60%]   h-[60%] rounded-md fixed lg:top-[5%] lg:left-[25%]  z-[99999] transition-all duration-500 bottom-20 ${show?'opacity-100':'opacity-0 z-[-99999]'}`}>
        <div  id='modal' className="w-full h-full relative">
            <button onClick={()=>setShow(false)}>
                <MdClose/>
            </button>
        </div>
            </div>

     
            <div className="w-full flex justify-center pb-10">
                <div className="w-[80%] min-h-screen mt-14">
                    {/* <HeadingPage>
                        <span className="lg:text-2xl text-lg  font-semibold font-sans  text-gray-700">GALLERY</span>
                    </HeadingPage> */}
                    <div className="w-full flex justify-center">
                    <ul className="flex w-full lg:w-1/2 mt-10  px-2 py-4  justify-center bg-gray-50  shadow-md rounded-full">
                        <li id='galleryfilter' onClick={()=>galleryFilterFunction('')} className="  flex lg:mx-7 mx-2 space-x-4 md:text-[17px] rounded-lg text-md text-orange-400  cursor-pointer py-[6px] px-[14px] border  border-orange-400  font-semibold hover:shadow-lg hover:bg-gray-100 ">
                            <span>{t("ALL")}</span>
                        </li>
                        <li id='galleryfilter' onClick={()=>galleryFilterFunction('Image')} className=" flex lg:mx-7 mx-2 space-x-2 items-center md:text-[17px] rounded-lg text-md text-gray-600 font-semibold hover:shadow-lg hover:bg-gray-100 cursor-pointer py-[6px] px-[14px]  ">
                        <BiImage/><span>{t("IMAGES")}</span>
                        </li>
                        <li id='galleryfilter' onClick={()=>galleryFilterFunction('Video')} className=" flex lg:mx-7 mx-2 space-x-2 items-center md:text-[17px] rounded-lg text-md text-gray-600 font-semibold hover:shadow-lg hover:bg-gray-100 cursor-pointer py-[6px] px-[14px]  ">
                           <BiVideo/> <span>{t("VIDEOS")}</span>
                        </li>
                        <li id='galleryfilter' onClick={()=>galleryFilterFunction('Documents')} className=" md:text-[17px] rounded-lg text-md text-gray-600 font-semibold hover:shadow-lg hover:bg-gray-100 hidden cursor-pointer py-[6px] px-[14px]  gl">
                            DOCUMENTS
                        </li>
                    </ul>
                    </div>
                   
                    <div className="flex justify-center">
                        <Loader loading={loading}/>
                    </div>
                    <motion.ul animate={{transition:{staggerChildren:0.5}}} className="mt-10 grid grid-cols-1 lg:grid-cols-6 lg:gap-5 gap-y-2  " style={{ gridAutoFlow:'dense',gridAutoRows:'200px' }}>
                        {
                            
                        gallery.map((file,i)=>{
                                if(file.type=='Image'){
                                    return <AnimatePresence >
                                         <motion.li  initial={{opacity:0,x:-40,y:-20}} animate={{opacity:1,x:0,y:0}} transition={{ ease:'easeOut',duration:0.3,delay:i*0.3}} exit={{opacity:0,x:-40,y:20}}  className= {`relative  cursor-pointer  overflow-hidden rounded-md shadow-md hover:shadow-xl transform duration-300 hover:scale-[102%] group ${file.w>400?'lg:col-span-2 col-span-1':''} ${file.h>400?'row-span-2':''} `}>
                                    <div className="w-7 h-8  bg-gray-300 bg-opacity-70  text-gray-700 rounded rounded-bl-none rounded-tr-none absolute  top-0 left-0 z-[999] flex justify-center items-center">
                                        <BiImage/>
                                    </div>
                                    <img   className=" group-hover:opacity-[120] object-cover object-center w-full h-full group-hover:scale-110 transition-transform duration-300 " src={file.file} alt="" />
                                    <div type={file.type} link={file.file} id={`item-${i}}`} onClick={(e)=>viewItem(e)} className="w-full h-full absolute top-0 bg-gray-800 bg-opacity-60 z-[-9999] group-hover:z-[999]"></div>
                                    <h1 className="text-4xl font-semibold text-gray-200 absolute top-[50%] left-[50%] translate-x-[-50%] opacity-0  transition-all duration-700 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 z-[999]" ><AiFillEye/></h1>
                                </motion.li>
                                    </AnimatePresence>
                                }
                                else if(file.type='Video'){
                                    return <AnimatePresence >
                                    <motion.li initial={{opacity:0,x:-40,y:-20}} animate={{opacity:1,x:0,y:0}} transition={{ ease:'easeOut',duration:0.3,delay:i*0.3}} exit={{opacity:0,x:-40,y:20}} className= {`relative  cursor-pointer  overflow-hidden rounded-md shadow-md hover:shadow-xl transform duration-300 hover:scale-[102%] group ${file.w>400?'col-span-2':'col-span-2'} ${file.h>400?'row-span-2':''} `}>
                                    <div className="w-7 h-8 bg-gray-300 bg-opacity-70  text-gray-700 rounded rounded-bl-none rounded-tr-none absolute top-0 left-0 z-20 flex justify-center items-center">
                                        <BiVideo/>
                                    </div>
                                    <iframe className="w-full h-full" src={file.link} frameborder="0"></iframe>
                                    <div  d type={file.type} onClick={(e)=>viewItem(e)} link={file.link} className="w-full h-full  bg-gray-700  bg-opacity-0 absolute top-0   group-hover:bg-opacity-60 transition-colors duration-500 ">
    
                                    </div>
                                    <h1 className="txt-2xl font-semibold text-gray-200 absolute top-[50%] left-[50%] translate-x-[-50%] opacity-0 -translate-y-[24rem] transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-0" style={{transform:'translateX(50%,-50%)'}}>VIEW</h1>
                                </motion.li>
                                </AnimatePresence>
                                }
                               
                            }
                            )
                        }
                    </motion.ul>
                </div>
            </div>
            <div className="w-full h-14 lg:h-0"></div>
            <Footer/>
        </div>
    )
}


