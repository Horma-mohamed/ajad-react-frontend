
import SideHeader from "../../components/SideHeader";
import Divder from "../../includes/Divider";
import ThumbSlider from "../../includes/Elements/ThumbSlider";
import LastestPosts from "../../includes/LastestPosts";
import OurPartners from "../../includes/OurPartners";
import ProgramsSection from "../../includes/ProgramsSection";
import SelectedCases from "../../includes/SelectedCases";
import ShortPresentation from "../../includes/ShortPresentation";

export default function Home2(){

    return(
        <div className="  w-screen overflow-hidden flex dark:bg-gray-700 relative">

            <SideHeader/>
            <div className="w-[86vw] min-h-screen  ml-[14vw] " >
                
                <div className="w-full flex">
                    
                    <div className="w-[55%] mx-10">
                    <Divder/>
                        <h1 className="text-[100px] text-gray-700">
                            
                        </h1>
                    </div>
                    <div className="w-[45%] h-screen bg-gray-300">
                    <Divder/>
                        
                    </div>
                </div>
                <div className=" mx-10 mt-20 ">
                <ProgramsSection/>
                </div>
                <div className=" mx-10 mt-20 ">
                <SelectedCases/>
                </div>
                <div className=" mx-10 mt-20 ">
                <LastestPosts/>
                </div>
                <div className=" mx-10 mt-20 ">
                <OurPartners/>
                </div>
                
            </div>
        </div>
    )
}