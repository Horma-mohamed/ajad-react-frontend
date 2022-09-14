import { useTranslation } from "react-i18next";
import programs from "../../api/programs";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SideHeader from "../../components/SideHeader";
import Divder from "../../includes/Divider";
import HeadingPage from "../../includes/Elements/HeadingPage";

export default function About(){
    const {t} = useTranslation()
    return(
        <div className="w-screen overflow-hidden   ">
            <Header page={'about'}/>
            <div className="w-full min-h-screen bg-gray-0  bg-gray-00 p-4 md:p-0" >
                <div className={`w-full flex ${document.dir=='rtl'?'lg:mr-60':'lg:ml-60'} lg:ml-60 ml-4 `}>
                    <div className="lg:w-1/2 w-[90%] ">
                        <Divder/>
                        <HeadingPage  >{t("ABOUT")}</HeadingPage>
                        <p className="font-karla mt-6 border-l- text-[#282523] text-justify text-lg px-4 lg:px-4 ">{t("ajad_desc1")}                         </p>
<p className="font-karla mt-6 text-[#282523] text-lg text-justify px-4 lg:px-4 ">
{t("ajad_desc2")}

  </p>
  <Divder/>
                        <HeadingPage  >{t("WHAT_DO_WE_DO")}</HeadingPage>
                        <Divder />
                        <ul className="space-y-10">
                            {
                                programs().map((program)=>(
                                    <li>
                                        <h1 className="text-lg font-bold ml-3  text-gray-600 relative before:absolute before:top-3 before:-left-3  before:w-2 before:h-2 before:rounded-full before:bg-orange-500">{program.name}</h1>
                        <p className="font-karla mt-6 text-[#282523] text-justify text-lg px-4 lg:px-4 ">
                            <div dangerouslySetInnerHTML={{__html:program.description}}/>
                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                        <Divder />
                        <HeadingPage  >{t("OUR_EXPERIENCES")} </HeadingPage>
                        
                        <p className="font-karla mt-6 text-[#282523] text-justify text-lg px-4 lg:px-4 ">
                       {t("EXPERIENCES_DESC")}
                        </p>
                        <Divder/>
                    </div>
                </div>
            </div>
            <div className="w-full h-14 lg:h-0"></div>
            <Footer/>
        </div>
    )
}