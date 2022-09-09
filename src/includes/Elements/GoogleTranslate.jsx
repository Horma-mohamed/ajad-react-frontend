import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { BsTranslate } from 'react-icons/bs'
import { MdGTranslate } from 'react-icons/md'
//import {} from 'flag-icons'
import '../../Config/i18next'
import i18next from '../../Config/i18next'
import "/node_modules/flag-icons/css/flag-icons.min.css"; 
export default function GoogleTranslate() {

    const [open,setOpen] = useState(false)
    const [lang,setLang] = useState('en')
    useEffect(()=>{
      setLang(i18next.language)
      if(i18next.language=='ar'){
        document.dir = 'rtl'
      }
    },[i18next.language])
    function ChangeLanguage(lngCode ='ar',Dir){
      i18next.changeLanguage(lngCode)
      document.dir = Dir
      setOpen(false)
    }
    return (
       

            <div id="google_translate_element" className={` z-[9999] fixed rounded-l-lg top-[50%] transform duration-300  ${open?'translate-x-[0%]':document.dir=='rtl'?'translate-x-[-80%]':'translate-x-[80%]'}  ${document.dir==='rtl'?'left-0 ':'right-0'} flex  items-center text-white  `} > <button onClick={()=>{setOpen(!open)}} className={`cursor-pointer  bg-orange-400 ${document.dir=='rtl'?'rounded-r-lg':'rounded-l-lg'}`} ><MdGTranslate className='text-4xl px-2 '/></button> 
            <div className=" px-4  h-9 bg-orange-400  flex items-center">
            <button onClick={()=>{ChangeLanguage('en','ltr')}} className={`text-md mx-2 px-1 underlined underline-offset-1 relative  ${lang ==='en'?'before:absolute before:-bottom-0.5 before:left-[50%] before:-translate-x-[50%] before:w-0 before:h-0 before:border-x-[3px] before:border-x-transparent before:border-b-[3px] before:border-b-white  text-orange-400':''}`}> <span className="fi fi-us"></span>  </button>
            <button onClick={()=>{ChangeLanguage('fr','ltr')}} className={`text-md mx-2 px-1 underlined underline-offset-1 relative ${lang ==='fr'?'before:absolute before:-bottom-0.5 before:left-[50%] before:-translate-x-[50%] before:w-0 before:h-0 before:border-x-[3px] before:border-x-transparent before:border-b-[3px] before:border-b-white  text-orange-400':''}`}><span className="fi fi-fr"></span></button>
            <button onClick={()=>{ChangeLanguage('ar','rtl')}} className={`text-md mx-2 px-1 underlined underline-offset-1 relative ${lang ==='ar'?'before:absolute before:-bottom-0.5 before:left-[50%] before:-translate-x-[50%] before:w-0 before:h-0 before:border-x-[3px] before:border-x-transparent before:border-b-[3px] before:border-b-white  text-orange-400':''}`}><span className="fi fi-sa"></span></button>
            </div>
            </div>


        
    )
}