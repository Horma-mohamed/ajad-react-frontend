import { motion,useAnimation } from "framer-motion"
import { useTranslation } from "react-i18next"
import { BsArrowUp } from "react-icons/bs"
export default function ScrollToUp(){
    const {t} = useTranslation()
    const control = useAnimation()
    window.addEventListener('scroll',()=>{
        if(window.scrollY>50){
            control.start({opacity:1,y:0,transition:{duration:0.2}})
        }else{
            control.start({opacity:0,y:10,transition:{duration:0.2}})
        }
    })
    return(
        <motion.div onClick={()=>{window.scrollTo({top:0,behavior:'smooth'})}} initial={{opacity:0,y:-10}} animate={control} className="md:px-4  bg-orange-400 text-white lg:bg-transparent p-3 md:py-2 border cursor-pointer flex justify-center md:space-x-2 items-center hover:text-white hover:bg-orange-400 transform duration-200 rounded-full border-orange-400 md:text-orange-400 fixed bottom-10 right-10 z-[99999999]">
               <span className="md:block hidden"> {t("SCROLL_TO_THE_TOP")}</span> <BsArrowUp/>
      </motion.div>
    )
}