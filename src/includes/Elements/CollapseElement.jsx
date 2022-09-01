import { BiMinus, BiPlus } from "react-icons/bi";
import {motion} from 'framer-motion'
import { useEffect, useState } from "react";
import { useRef } from "react";
export default function CollapseElement({Title,Desc}){
    const Collapse = useRef()
    const [isOpen,setIsOpen] = useState(false)

    
   
       

 
    return(
        <div ref={Collapse}  className="w-full cursor-pointer collapse ">
            <motion.div onClick={()=>{setIsOpen(!isOpen)}} className={`head w-full h-14 transform duration-300 ${isOpen?'bg-orange-100 rounded-t-lg':'bg-orange-400 rounded-lg'} white  flex justify-center items-center relative z-30`}>
                <button  className=" absolute top-0 left-0 w-14 h-14 flex justify-center items-center ">
                    {/* {isOpen?<BiMinus  className="text-3xl text-white"/>:<BiPlus  className="text-3xl text-white"/>}  */}
                    <div className="relative">
                        <div className={`w-6 absolute transform duration-300 ${isOpen?'bg-orange-400 rotate-0 ':'rotate-90 bg-white'} h-1 bg-white rounded-full`}></div>
                        <div className={`w-6 absolute h-1 ${isOpen?"bg-orange-400":"bg-white"} rounded-full`}></div>
                    </div>
                </button>
                <h1 className={` text-2xl  ${isOpen?'text-orange-400':'text-white'} font-sand font-semibold `}>
                        { Title}
                    </h1>
            </motion.div>
            <motion.p className={`w-full p-4 rounded-b-lg text-gray-600 font-sand font-semibold bg-orange-50 transform duration-300 relative z-10 ${isOpen?' translate-y-[0%] opacity-100':' translate-y-[-100%] opacity-0 h-0 p-0'}`}>
                {Desc}
            </motion.p>
        </div>
    )
}