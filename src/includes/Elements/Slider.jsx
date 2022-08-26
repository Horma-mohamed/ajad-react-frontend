import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function Slider({children}) {
    return(
        <div className="w-full space-y-4  ">
        <div className="w-full h-[400px]  rounded-md bg-gray-100 relative group">
        {children}
        <i className="left-arrow scale-[0] group-hover:scale-[1]  transform duration-300 absolute top-[50%]  flex justify-center  items-center text-white -left-5 w-10 h-10 rounded-full bg-orange-400">
          <BsArrowLeft/>
        </i>
        <i className="right-arrow scale-[0] group-hover:scale-[1]  transform duration-300 absolute top-[50%]  flex justify-center items-center text-white -right-5 w-10 h-10 rounded-full bg-orange-400">
          <BsArrowRight/>
        </i>
        </div>
       
        
      </div>
    )
}