import Programs from '../api/programs';
import { NavLink } from 'react-router-dom';

import Divider from './Divider'
import HeadingPage from './Elements/HeadingPage';
import { BsArrowRight, BsEye } from 'react-icons/bs';
import Divder from './Divider';
import { MdAdd } from 'react-icons/md';
export default function ProgramsSection(){
    function ThereIsMoreToRead(text){
        if(text.length>400){
          return text.slice(0,200)+' ...'
        }
        else{
          return text
        }
    }
    return(
        <div className='w-full pt-5 px-2 mt-20 '>
        <HeadingPage >
            HOW DO WE HELP 
          </HeadingPage>
          <Divider/>


          <div className="w-full   flex flex-wrap gap-8 gap-x-6 ">
          
            {
            
              Programs().map((program,i)=>(
              
                
                  <div  className=" group w-[22rem] min-h-60  p-4 transform duration-300  relative hover:border hover:bg-[#fcfcfc] hover:rounded-md">
                    <h1 className="text-2xl text-gray-700 font-semibold w-[90%]">
                      {program.name}
                    </h1>
                    <img  src={program.icon} alt="" />
                    <div className="absolute top-6 right-4">
                      
                      <span className='text-2xl text-orange-600 font-mono font-bold hidden'>#{i+1}</span>
                    </div>
                    <p className="text-md text-gray-700 text-opacity-60 mt-4 ">
                     <div className='' dangerouslySetInnerHTML={{__html:program.intro}}/>
                   </p>
                  </div>
                
                
              
              
              ))
            }
          
          </div>
        </div>
    )
}


{/* <div style={{minHeight:"24rem"}} className={` w-72  border border-gray-50  rounded  hover:shadow-xl transform duration-300 overflow-x-hidden `} >
                  <div className="w-full h-1 bg-[#ED8C56] rounded- "></div>
                  <Divider h={8}/>
                   <div className="w-full h-1 bg-orange-300 odd: relative z-[20] "></div> 
                  <div className="w-full px-4 relative z-[10] space-y-5">
                    <div className="flex justify-between  mb-2  items-center">
                    <h1 className="w-60  text-2xl text-gray-600">{program.name}</h1>
                     <img className='text-orange-400' src={program.icon_url} alt={program.name+'-icon'} srcset="" /> 
                    </div>
                    <div className="w-64 h-44 text-base text-gray-500 relative z-[10]" dangerouslySetInnerHTML={{__html:ThereIsMoreToRead(program.description)}} />

                  </div>  
                 
                      </div>
    */}