import { AnimatePresence, motion } from "framer-motion";

export default function Loader({loading}) {
    return(
        
     
    <motion.div initial={{opaciy:0}} animate={{opacity:1}} transition={{duration:5}} className={` w-full flex justify-center mt-40  ${loading?'block':'hidden'}`}>
            {/* <div className="flex">
  <div className="wave"></div>
  <div className="wave"></div>
  <div className="wave"></div>
  <div className="wave"></div>
  <div className="wave"></div>
  <div className="wave"></div>
  <div className="wave"></div>
  <div className="wave"></div>
  <div className="wave"></div>
  <div className="wave"></div>
</div> */}
<span class="loader"></span>
       </motion.div>
    )
}