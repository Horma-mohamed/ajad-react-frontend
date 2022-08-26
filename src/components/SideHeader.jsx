import { BiDonateHeart } from "react-icons/bi"
import { BsYoutube } from "react-icons/bs"
import { IoIosArrowForward } from "react-icons/io"
import { RiFacebookLine, RiTwitterFill } from "react-icons/ri"
import { NavLink } from "react-router-dom"
import Divder from "../includes/Divider"


export default function SideHeader(){
    const navlinks = document.querySelectorAll('#nav-link')
    for(var i=0 ; i<navlinks.length;i++){
        let el = navlinks[i]
        el.addEventListener('click',()=>{
          
          for(var j=0;j<navlinks.length;j++){
            navlinks[j].classList.remove(' border-r-2 border-orange-400 bg-red-400 ')
          }
          el.style = 'border-right:2px solid rgb(251 146 60)'
          el.classList.add(' border-r-2 border-orange-400 bg-red-400 ') 
        })
    }
   

    return(
        <div className="w-[14vw] h-screen bg-[#fdfdfd] fixed border-r border-gray-100 py-4">
            <div className="w-full flex justify-center px-4">
                <img src="/logo.png" className="w-[50%]" alt="" />
            </div>
            <Divder/>
            <div className="w-full pl-4 ">
            <ul className="space-y-2">
                <li className="w-full ">
                    <NavLink to='/home2'>
                      <div  id='nav-link' className="w-full text-gray-700 font-karla py-2  flex justify-between items-center font-[600] hover:border-r-2 hover:border-orange-400 transform duration-100">
                        <a>Home</a>
                        
                      </div>
                    </NavLink>
                </li>
                <li className="">
                    <NavLink to='/about'>
                      <div  id='nav-link' className="w-full text-gray-700 font-karla py-2  flex justify-between items-center font-[600] hover:border-r-2 hover:border-orange-400">
                        <a>About us</a>
                        
                      </div>
                    </NavLink>
                </li>
                <li className="">
                    <NavLink to='/about'>
                      <div  id='nav-link' className="w-full text-gray-700 font-karla py-2  flex justify-between items-center font-[600] hover:border-r-2 hover:border-orange-400 pr-3">
                        <a>What we do</a>
                        <IoIosArrowForward/>
                      </div>
                    </NavLink>
                </li>
                <li className="">
                    <NavLink to='/gallery'>
                      <div  id='nav-link' className="w-full text-gray-700 font-karla py-2  flex justify-between items-center font-[600] hover:border-r-2 hover:border-orange-400 pr-3">
                        <a>Cases</a>
                        <IoIosArrowForward/>
                      </div>
                    </NavLink>
                </li>
                <li className="/help">
                    <NavLink to=''>
                      <div  id='nav-link' className="w-full text-gray-700 font-karla py-2  flex justify-between items-center font-[600] hover:border-r-2 hover:border-orange-400 pr-3">
                        <a>Help</a>
                        <IoIosArrowForward/>
                      </div>
                    </NavLink>
                </li>
                <li className="">
                    <NavLink to='/contact'>
                      <div  id='nav-link' className="w-full text-gray-700 font-karla py-2  flex justify-between items-center font-[600] hover:border-r-2 hover:border-orange-400">
                        <a>Contact </a>
                        
                      </div>
                    </NavLink>
                </li>
                <li className="">
                    <NavLink to='/blog'>
                      <div  id='nav-link' className="w-full text-gray-700 font-karla py-2  flex justify-between items-center font-[600] hover:border-r-2 hover:border-orange-400">
                        <a>Blog</a>
                        
                      </div>
                    </NavLink>
                </li>
            </ul>
            </div>
            <Divder/>
            <div className="w-full flex justify-center px-4">
                <a href="">
                    <div className="w-40 h-14 flex justify-around items-center hover:bg-orange-400 hover:text-white transform duration-200 rounded-lg text-orange-400 font-sand font-semibold">
                       <BiDonateHeart/>
                        <span>Make a Donate </span>
                    </div>
                </a>
            </div>
            <Divder/>
            <div className="full flex justify-center">
                <div className="flex space-x-4 text-gray-600">
                    <a href="http://" className="hover:text-orange-400"><RiFacebookLine/></a>
                    <a href="http://" className="hover:text-orange-400"><RiTwitterFill/></a>
                    <a href="http://" className="hover:text-orange-400"><BsYoutube/></a>
                </div>
            </div>
            <Divder/>
        </div>
    )
}