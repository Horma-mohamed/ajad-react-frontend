
export default function HeadingPage({post,children}) {
  
    return(
       <>
                   <h1 className="text-2xl z-[-1] mb-4  font-karla  text-gray-700 relative px- lg:px-  before:absolute before:-bottom-1 before:w-14 before:h-[2.5px] before:rounded-full before:bg-orange-500 font-bold  ">
                    {children}
                   </h1>
       </>
    )
}