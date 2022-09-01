import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import cases from "../api/cases";
import HeadingPage from "./Elements/HeadingPage";

export default function CasesSection(){
    return(
        <div className="w-full h- bg--400 mt-40  px-4 lg:px-4 ">
        <HeadingPage>
            STORIES FROM THE FIELD
        </HeadingPage>
        <ul className="w-[100%] flex flex-wrap gap-6 mt-10  ">

      {
        cases().map((each)=>(
          <NavLink to={`cases/${each.id}`}>
             <li className=' cursor-pointer group w-80 relative rounded border bg-gray-0 hover:shadow-xl transform duration-300  overflow-'>
            
            <div className="w-w-ful h-56 ">
              <img className='w-full h-full' src={each.Thumb} />
            </div>
    
            <div className="w-full px- py- bg-slate-0">
              <h1 className="py-2 text-teal-600 px-2">{each.region}</h1>
             <h1 className=" text-lg font-semibold font font-karla text-orange-500 uppercase px-2">
                    {each.title}
              </h1>
               {/* <div className="text-gray-500 text-md mt-6  " dangerouslySetInnerHTML={{__html:each.description.slice(0,250)}} /> */}
            <p className="text-gray-500 text-md mt-3  px-2 ">{each.description.substring(0,100)}</p>
    
    
              <div className="w-full flex justify-center mt-10">
    
    
                <div className="absolute text-center overflow-hidden right-0 top-0 w-10 group-hover:w-40 transform duration-500 flex group-hover:space-x-4 justify-center items-center h-10   rounded-bl-lg  bg-orange-400 group-hover:bg-orange-400 text-white">
                            <span className='text-md transform -translate-x-80 font-semibold duration-700 group-hover:translate-x-0 absolute group-hover:static '>Read more</span>
                            <BsArrowRight className='text-xl text-white group-hover:text-white '/>
    
                </div>
    
              </div>
            </div>
            
            </li>
          </NavLink>
        ))
      }

       </ul>
        </div>
    )
}