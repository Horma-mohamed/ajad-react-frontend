
import { NavLink } from 'react-router-dom';
import moment from 'moment'
import { readingTime } from 'reading-time-estimator';
export default function Posts({post}) {
  function scrollUp(i){
    window.scrollY = i || 0
  } 
    return(
      
              
              
<a href={`/blog/${post.id}`} onClick={()=>scrollUp(0)}>
              
              <div className="w-full lg:w-[350px] p-4">
                <div className="relative w-full h-40">
                <img src={post.Thumb} className='rounded-md h-full w-full ' alt="" />
                
                </div>
                <p className="text-md text-gray-400 py-2 space-x-5">
                  <span>{moment(post.date).format("MMM Do YY") }</span>
                  <span>{ readingTime(post.description).text}</span>
                </p>
                <h1 className="  text-xl font-semibold ">
                  {post.title}
                </h1>
                <p className="text-md text-gray-400 py-2">
                  <div dangerouslySetInnerHTML={{__html:post.description.substring(0,150)}}/>
                </p>
              </div>
              
              </a>
                
              
            
         
    )
}


// li className={`w-full hover:scale-[102%]  lg:w-72 min-h-24 py-  overflow-hidden  hover:bg-gray-50 mb-4 group  rounded-md flex flex-row lg:flex-col-reverse  lg:h-60  hover:shadow-lg transform duration-300`}>
//                     <div className="w-2/3 lg:w-full h-24  rounded-lg  bg-gray-0 lg:h-40  flex">
//                 <div className=' relative w-full' >
//                 <h1 className="lg:text-lg font-karla font-bold p-2 "> {post.title}  </h1>
//                 <div className=" w-full absolute bottom-2 left-2 flex justify-between px-3">
//                 <div className='flex space-x-2  items-center'>
//                 <h1 className="lg:text-[15px] text-[10px] font-[400] font-karla text-orange-400 italic  border-r-[1.5px] pr-2 "> Education </h1>
//                 <h1 className="lg:text-[15px] text-[10px] font-karla text-gray-600 ">{readingTime(post.description).text}</h1>
//                 </div>
//                 <h1 className="lg:text-[15px] text-[12px] font-karla text-gray-600 ">{moment(post.date,'YYYYMMDD').fromNow()}</h1>
//                 </div>
//                 </div>
                
//                   </div>
//                   <div className={`w-1/3 lg:w-full min-h-24 lg:h-40 bg-gray-400 relative overflow-hidden`}>
//                     <img src={post.Thumb} className=' absolute w-full h-full' alt={post.title.slice(0,10)} />

//                 </div>
               
//               </li> 