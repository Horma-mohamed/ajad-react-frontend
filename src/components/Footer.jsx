import { BsTwitter, BsYoutube } from 'react-icons/bs'
import {ImFacebook,ImTwitter,ImYoutube} from 'react-icons/im'
import { IoIosArrowForward } from 'react-icons/io'
import Divder from '../includes/Divider'
export default function Footer(){
    const socials = [
        <ImFacebook/>,
        <ImTwitter/>,
        <ImYoutube/>
    ]
    return(
        <div className=" w-full  bg-gray-0 border-  flex justify-center items-center bg-sky- text-gray-500 bg-gray-50 bg-opacity-40 to-transparent p-4">
            <div className="w-[90%] space-y-10  md:flex md:space-y-0 items-center justify-between ">
                <div className="md:w-4/12  ">
                        <div className="flex space-x-4 items-center ">
                        <img className='w-14 mb-5' src="logo.png" alt="" srcset="" />
                        <h1 className="text-lg font-bold font-karla">AJAD</h1>
                        </div>
                        
                        <p className="text-md text-gray-400 mb-6">
                        (AJAD) is a Mauritanian non-profit voluntary development organization. 
AJAD was created in 1997 by a group of young Mauritanians with the aim of protecting the national youth from the various temptations that can lead them to debauchery and marginalization                        </p>

                        <div className="flex space-x-4">
                            <div className="w-10 h-10 group flex justify-center items-center rounded-full  hover:bg-orange-400 transform duration-300">
                                <ImFacebook className='text-gray-400 group-hover:text-white'/>
                            </div>
                            <div className="w-10 h-10 group flex justify-center items-center rounded-full  hover:bg-orange-400 transform duration-300">
                                <BsTwitter className='text-gray-400 group-hover:text-white' />
                            </div>
                            <div className="w-10 h-10 group flex justify-center items-center rounded-full  hover:bg-orange-400 transform duration-300">
                                <BsYoutube className='text-gray-400 group-hover:text-white' />
                            </div>

                        </div>

                </div>
                <ul className='space-y-10 md:space-y-0 md:flex md:space-x-20 justify--end '>
                    <li  >
                        <h1 className="text-xl text-gray-600 font-semibold mb-4">Information</h1>
                        <div className="space-y-2">
                        <div className="flex space-x-0.5 items-center">
                            <IoIosArrowForward className='text-[14px]' />
                        <a href='/'  className="text-gray-600 text-sm">Our principles</a>
                        </div>
                        <div className="flex space-x-0.5 items-center">
                            <IoIosArrowForward className='text-[14px]' />
                        <a href='/'  className="text-gray-600 text-sm">Our parnters</a>
                        </div>
                        <div className="flex space-x-0.5 items-center">
                            <IoIosArrowForward className='text-[14px]' />
                        <a href='/'  className="text-gray-600 text-sm">Locations</a>
                        </div>
                        </div>
                    </li>
                    <li  >
                        <h1 className="text-xl text-gray-600 font-semibold mb-4">Our location</h1>
                        <div className="space-y-2">
                        <div className="flex space-x-0.5 items-center">
                            <IoIosArrowForward className='text-[14px]' />
                        <a href='/'  className="text-gray-600 text-sm">In Google Maps</a>
                        </div>
                        <div className="flex space-x-0.5 items-center hidden ">
                            <IoIosArrowForward className='text-[14px]' />
                        <a href='/'  className="text-gray-600 text-sm"></a>
                        </div>
                        <div className="flex space-x-0.5 items-center hidden">
                            <IoIosArrowForward className='text-[14px]' />
                        <a href='/'  className="text-gray-600 text-sm"></a>
                        </div>
                        </div>
                    </li>
                    <li  >
                        <h1 className="text-xl text-gray-600 font-semibold mb-4">Contact us</h1>
                        <div className="space-y-2">
                        <div className="flex space-x-0.5 items-center">
                            <IoIosArrowForward className='text-[14px]' />
                        <a href='/'  className="text-gray-600 text-sm">Our Facebook Page</a>
                        </div>
                        <div className="flex space-x-0.5 items-center">
                            <IoIosArrowForward className='text-[14px]' />
                        <a href='/'  className="text-gray-600 text-sm">Our Twitter </a>
                        </div>
                        <div className="flex space-x-0.5 items-center">
                            <IoIosArrowForward className='text-[14px]' />
                        <a href='/'  className="text-gray-600 text-sm">Contact Page</a>
                        </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

{/*

<div className="w-full p-6  bg-gray-100">
     <h1>© 2022 Ong AJAD, Inc.</h1>
                <a href="http://">Facebook</a>
                <a href="http://">Twitter</a>
                <a href="http://">Youtube</a>
                <a href="http://">Linkedin</a>   
<div className=" w-full flex space-x-4 items-center">
               <div className="w-20 h-20 rounded-full bg-gray-400  "></div>
                <div className="flex space-x-4 justify-center p-4">
                {
                    socials.map((social)=>(
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-gray-800 bg-gray50 ">{social}</div>
                    ))
                }
            </div>
               </div>
            <h1 className="p- w-4/5  text-lg text-gray-600 mt-4   ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio doloremque sed alias! Eligendi et provident ad esse minus rerum dolorem.
            </h1>
            <div className="flex space-x-10 mt-5">
                <div className="   " >
                    <h1 className="text-xl font-karla">Contact us </h1>
                    <ul  className='w- space-y-1.5 mt-2' >
                        <li className="font-light-text-lg  ">
                            (+222) 4555546
                        </li>
                        <li className="font-light-text-lg  ">
                            office@ajad.com
                        </li>
                        <li className="font-light-text-lg  ">
                            ajad2022@gmail.com
                        </li>
                    </ul>
                    
                </div>
                <div className="   " >
                    <h1 className="text-xl font-karla">Our locations</h1>
                    <p className="text-xl font-light  ">
                        Musritania/Nouakchoott/TevraghZiena/Cite-plage/ruemelika
                    </p>
                    
                </div>
            </div>
            </div>
            
            
            <div className="flex justify-center">
            
            </div>
            <div className=" flex space-x-4  p-4 justify-center ">
                {
                    [1,2,3,4,5].map(()=>(
                        <div className=" text-light underline underline-offset-2 text-gray-600 "> <span>Link</span> </div>
                    ))
                }
            </div>

*/}