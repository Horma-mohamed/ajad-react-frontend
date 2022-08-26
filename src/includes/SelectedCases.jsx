import { NavLink } from "react-router-dom";
import cases from "../api/cases";

export default function SelectedCases(){

return(
    <div className="w-full h- bg--400 mt-40  px-4 lg:px-4 ">
        <span className="text-2xl z-[-1] mb-2 font-bold font-karla text-gray-700 relative  before:absolute before:-bottom-1 before:w-8 before:h-0.5 before:rounded-full before:bg-orange-300  ">
            STORIES FROM THE FIELD 
        </span> 
        <ul className="w-[100%] flex flex-wrap gap-6 mt-10  ">
       
      {
        cases().map((each)=>(
          <li className=' group  w-80 rounded hover:bg-gray-50 border bg-gray-0 hover:shadow-2xl transform duration-300  overflow-hidden'>
            <NavLink to='/' className='  '> 
        <div className="w-w-ful h-56 ">
          <img className='w-full h-full' src={each.Thumb} />
        </div>
        
        <div className="w-full px-2 py-4 bg-slate-0">
          <h1 className="py-2 text-teal-600">{each.region}</h1>
         <h1 className=" text-lg font-semibold font font-karla text-orange-500 uppercase">
                {each.title}
          </h1>
           {/* <div className="text-gray-500 text-md mt-6  " dangerouslySetInnerHTML={{__html:each.description.slice(0,250)}} /> */}
        <p className="text-gray-500 text-md mt-6  ">{each.intro}</p>
          
        
          <div className="w-full  mt-10">
          
            <div  className="w-[100%] py-2 text-center uppercase  group-hover:bg-orange-400 text-lg border font-bold border-orange-400 text-orange-400 group-hover:text-white font-karla">
              Learn more
            </div>
          
          </div>
        </div>
        </NavLink>
        </li>
        ))
      }

       </ul>
        </div>
)
}