import { NavLink } from "react-router-dom";
import partners from "../api/partners";

export default function OurPartners(){
    return(
        <div className='w-full pt-5 px-2 my-10 '>
        <span className="text-2xl z-[-1] mb-2 font-bold font-karla text-gray-700 relative px-4 lg:px-4  before:absolute before:-bottom-1 before:w-8 before:h-0.5 before:rounded-full before:bg-orange-300  ">
            OUR PARTNERS 
          </span>
          <div className='w-full flex justify-center '>
          <ul className="w-[80vw] lg:w-4/5 flex  flex-wrap gap-4 space-y lg:space-y-0 lg:flex lg:space-x-4 mt-10">
              {
                partners().map((each,i)=>(
                  
                  <li className="w- lg:w-auto flex justify-center ">
               <NavLink to='/'> <div className="group w-24  h-24 bg-gray-00 rounded-lg relative overflow-hidden ">
                 <img src={each.icon_url} className='w-full h-full opacity-30 group-hover:opacity-100 transform duration-300 '  alt={each.name} />
                 <div className="w-full h-full bg-gray-500  opacity-0 absolute top-0"></div>
                  </div></NavLink>
              </li>
                ))
              }
              </ul>
          </div>
          
    </div>
    )
}