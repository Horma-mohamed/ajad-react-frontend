import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { BsTranslate } from 'react-icons/bs'
import { MdGTranslate } from 'react-icons/md'

export default function GoogleTranslate() {

    const [open,setOpen] = useState(false)
    const [lang,setLang] = useState('en')


    

    return (
       

            <div id="google_translate_element" className={` z-[9999] fixed rounded-l-lg top-[50%] transform duration-300  ${open?'translate-x-[0%]':'translate-x-[80%]'}  right-0 bg-orange-400  flex  items-center text-white  `} > <button onClick={()=>{setOpen(!open)}} className='cursor-pointer' ><MdGTranslate className='text-4xl px-2 '/></button> 
            <div className="space-x-2 mx-4 ">
            <button onClick={()=>{setLang('en')}} className={`text-md  px-1 underlined underline-offset-1  ${lang ==='en'?'bg-white text-orange-400':''}`}>EN</button>
            <button onClick={()=>{setLang('fr')}} className={`text-md  px-1 underlined underline-offset-1  ${lang ==='fr'?'bg-white text-orange-400':''}`}>FR</button>
            <button onClick={()=>{setLang('ar')}} className={`text-md  px-1 underlined underline-offset-1  ${lang ==='ar'?'bg-white text-orange-400':''}`}>AR</button>
            </div>
            </div>


        
    )
}