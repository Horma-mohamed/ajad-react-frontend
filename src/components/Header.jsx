//import logo from '../../public/logp';
import {  NavLink } from "react-router-dom";
import { useState ,useEffect } from 'react';
import {IoIosArrowDown} from 'react-icons/io'
import {MdAlternateEmail,MdOutlineAttachEmail,MdOutlinePhoneInTalk} from 'react-icons/md'
import {ImFacebook,ImTwitter,ImYoutube} from 'react-icons/im'
import {BiDonateHeart} from 'react-icons/bi'
import { motion, useScroll } from "framer-motion";

export default function Header({page}){
    const [windowY,setWindowY] = useState(10)
    const [fixed,setFixed] = useState(false)
    const [Ham,setHam] =useState(false)
    const [scrollYProgress,setScrollYProgress]=  useState()
    const totalHeight =window.innerHeight

    
      
    const socials = [
        <ImFacebook/>,
        <ImTwitter/>,
        <ImYoutube/>
    ]

    const menuitems= document.querySelectorAll('#menuitem')
    for(var i =0; i<menuitems.length ;i++){
        const Item = menuitems[i]
        Item.addEventListener('click',()=>{
            for(var j =0; j<menuitems.length ;j++){
               const otherItem = menuitems[j]
                otherItem.classList.remove('before:w-[20px]')
            }
            Item.classList.add('before:w-[20px]')
            //filter.classList.add('font-semibold text-orange-500 underline underline-offset-1')
            
        }) 
   
    }
    window.addEventListener('scroll',(e)=>{ 
        setWindowY(window.scrollY)
        // const header = document.getElementById('navbar')
        // const menuitems= document.querySelectorAll('#menuitem')
        // const socials = document.querySelectorAll('.social-header')
        setScrollYProgress((scrollYProgress/totalHeight)*100)
        if(window.scrollY>10){
         setFixed(true)
        }else{
          setFixed(false)
        }
    })
    return(
    <>
        <motion.nav id='navbar'  className={` fixed w-full lg:h-auto h-auto  to-transparent  backdrop   top-0 z-[9999] transform duration-500 ${fixed?'  backdrop-blur border- bg-gray-50 bg-opacity-50  border-gray-300 shadow-lg':''} `} >
            {/* <div className="w-full  border- py-1.5 sm:flex  space-y-2 sm:space-y-0 lg:justify-between justify-center space-x-4 items-center relative z-20   px-4" >
                    <div className="sm:flex sm:space-x-8 space-y-2 sm:space-y-0">
                    <div className='  flex justify-center items-center space-x-1' >
                       <MdOutlineAttachEmail className='text-orange-400 text-[20px] font-karla '/> <a href="mailto:Manager@ajad.com"><span className="text-gray-500 text-[16px] font-karla">Manager@ajad.com</span></a>
                    </div>
                    <div className='flex justify-center items-center space-x-1'>
                    <MdOutlinePhoneInTalk className='text-orange-400 text-[20px] font-karla '/>
                        <a href="tel:+22241446868" className="text-gray-500  font-meduim text-[16px] font-karla">+22241446868</a>
                    </div>
                    </div>
                    
            </div> */}
            <div className="full flex justify-center ">
            <div className="relative z-40 w-[95%] h-full flex justify-between items-center ">
            <div className=" flex justify-between space-x-6 ">
            <div className="w-40  bg-gray-00 flex items-center justify-center py-4 space-x-4 "> 
            <img className=' w-16 ' src={'/logo.png'} alt="" srcset="" /> 
            <h1 className=' text-3xl font-karla  font-bold text-teal-900' > AJAD </h1>
              </div>
              
            </div>
            <div className="flex space-x-14">
            
            <div className=' flex items-center text-gray-900   relative space-x-6 ' >
            <div className=" md:flex space-x-3 items-center  hidden">
                <NavLink to='/' exact ><div className=" text-center pl-2"     ><span id='menuitem' className={`${fixed?'text-gray-700':page=='home'?'text-gray-50':'text-gray-500'}  px-2 py-2  text-[15px] font-[500]  relative before:absolute before:-bottom-1 before:w-1.5 before:h-1.5 before:rounded-full before:opacity-0 before:bg-orange-400  before:transform before:duration-500 hover:before:opacity-100 before:left-[50%]  ${page==='home'?'before:opacity-100':''} text-center `} >Home</span></div></NavLink>
                <NavLink to='/blog' exact ><div className=" text-center pl-2"     ><span id='menuitem' className={`${fixed?'text-gray-700':page=='home'?'text-gray-50':'text-gray-500'}  px-2 py-2  text-[15px] font-[500]  relative before:absolute before:-bottom-1 before:w-1.5 before:h-1.5 before:rounded-full before:opacity-0 before:bg-orange-400  before:transform before:duration-500 hover:before:opacity-100 before:left-[50%]  ${page==='blog'?'before:opacity-100':''} text-center `} >Blog</span></div></NavLink>
                <NavLink to='/about' exact ><div className=" text-center pl-2"     ><span id='menuitem' className={`${fixed?'text-gray-700':page=='home'?'text-gray-50':'text-gray-500'}  px-2 py-2  text-[15px] font-[500]  relative before:absolute before:-bottom-1 before:w-1.5 before:h-1.5 before:rounded-full before:opacity-0 before:bg-orange-400  before:transform before:duration-500 hover:before:opacity-100 before:left-[50%]  ${page==='about'?'before:opacity-100':''} text-center ` }>Who are we</span></div></NavLink>
                <NavLink to='/gallery' exact ><div className=" text-center pl-2"     ><span id='menuitem'  className={`${fixed?'text-gray-700':page=='home'?'text-gray-50':'text-gray-500'}  px-2 py-2  text-[15px] font-[500]  relative before:absolute before:-bottom-1 before:w-1.5 before:h-1.5 before:rounded-full before:opacity-0 before:bg-orange-400  before:transform before:duration-500 hover:before:opacity-100 before:left-[50%]  ${page==='gallery'?'before:opacity-100':''} text-center ` }>Gallery</span></div></NavLink>
                <NavLink to='/contact' exact ><div className=" text-center pl-2"     ><span id='menuitem'  className={`${fixed?'text-gray-700':page=='home'?'text-gray-50':'text-gray-500'}  px-2 py-2  text-[15px] font-[500]  relative before:absolute before:-bottom-1 before:w-1.5 before:h-1.5 before:rounded-full before:opacity-0 before:bg-orange-400  before:transform before:duration-500 hover:before:opacity-100 before:left-[50%]  ${page==='contact'?'before:opacity-100':''} text-center ` }> Contact</span></div></NavLink>
            </div>
            <a target={'__blank'}  href="https://donorbox.org/ajad" className={`xs:hidden custom-dbox-popup relative group  bg-orange-4000 border-[1.6px] ${fixed?'border-orange-400':page=='home'?'lg:border-white border-orange-400':'border-orange-400'} border-orange-400   flex justify-center space-x-2 lg:px-2 py-2 px-6  items-center rounded-full  text-gray-00 lg:text-xl sm:text-sm hover:bg-orange-400 hover:border-orange-400 hover:text-white text-gray-50 lg:text-gray-700 lg:  lg:hover:text-gray-50 transform duration-200    `}>
                <BiDonateHeart className={`text-gray-5 ${fixed?'text-orange-400':page=='home'?'lg:text-white text-orange-400 ':'text-orange-400'} group-hover:text-white`} /> 
                <span className='text-[16px] text-orange-400 group-hover:text-white lg:hidden '>Make a Donation</span>
                
            </a>
            <div className=' lg:flex justify-center space-x-4 lg:space-x-4 px-4 hidden '>
                        {
                            socials.map((social)=>(
                               <a href="#">
                                    <div className=" group flex justify-center items-center ">
                                        <span className={`social-header ${fixed?'text-gray-700':page=='home'?'text-gray-50':'text-gray-500'}  text-[14px] hover:text-orange-500`}>{social}</span>
                                    </div>
                               </a>
                            ))
                        }
                    </div>
            <button onClick={()=>setHam(!Ham)} className={` md:hidden group flex items-center w-8 h-8 bg-gray-10 rounded-lg relative  before:absolute  ${Ham?'before:translate-y-0 before:rotate-45 after:translate-y-0 after:rotate-[135deg] ':'after:translate-y-2 before:-translate-y-2'}  before:transform before:duration-300 before:left-0 before:w-full before:h-1 before:rounded-full before:bg-gray-600  after:absolute   after:left-0 after:w-full after:h-1 after:bg-gray-600  after:transform after:duration-300 after:rounded-full`} >
            <span className={`w-full h-1 rounded-l-full bg-gray-600 ${Ham?'-translate-x-28 opacity-0':''} transform duration-300 `}></span>
            <span className={`w-full h-1 rounded-r-full bg-gray-600 ${Ham?'translate-x-28 opacity-0':''} transform duration-300 `}></span>
            </button>

            
            </div>
            </div>
            </div>
            </div>
                <div className={`  md:hidden w-[100%]      transform duration-300 ${Ham?'translate-y-0 relative ':'-translate-y-[100vh] absolute '}    bg-gray-50  bg-opacity-50   shadow-lg  `}>
                    
                    <ul className="space-y-3 pt-0 ">
                        <li className='w-full border-t last:border-b border-gray-200  px-4 h-14  ' ><NavLink to='/' exact ><div className='text-gray-900 w-full h-full font-light   relative    flex justify-between items-center'  ><span className='  w-full text-xl font-semibold  ' >Home</span> <span className='text-2xl' ></span> </div></NavLink></li>
                        <li className='w-full border-t last:border-b border-gray-200  px-4 h-14  ' ><NavLink to='/blog' exact ><div className='text-gray-900 w-full h-full font-light   relative  flex justify-between items-center'  ><span className='  w-full text-xl font-semibold  ' >Blog</span> <span className='text-2xl' ></span></div></NavLink></li>
                        <li className='w-full border-t last:border-b border-gray-200  px-4 h-14  ' ><NavLink to='/about' exact ><div className='text-gray-900 w-full h-full font-light   relative  flex justify-between items-center'  ><span className='  w-full text-xl font-semibold  ' >About</span> <span className='text-2xl' ></span></div></NavLink></li>
                        <li className='w-full border-t last:border-b border-gray-200  px-4 h-14  ' ><NavLink to='/gallery' exact ><div className='text-gray-900 w-full h-full font-light   relative  flex justify-between items-center'  ><span className='  w-full text-xl font-semibold  ' >Gallery</span> <span className='text-2xl' ></span></div></NavLink></li>
                        <li className='w-full border-t last:border-b border-gray-200  px-4 h-14  ' ><NavLink to='/contact' exact ><div className='text-gray-900 w-full h-full font-light   relative  flex justify-between items-center'  ><span className='  w-full text-xl font-semibold  ' >Contact</span> <span className='text-2xl' ></span></div></NavLink></li>
                    </ul>
                </div>
        <motion.div style={{display:page=='post'?'block':'none',width:scrollYProgress}} className={`hidden h-[1.5px] w-auto   bg-orange-400`} />
        </motion.nav>
        
        <div className="w-full h-20 lg:h-32" ></div>
       
    </>
        
    )
}