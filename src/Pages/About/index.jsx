import programs from "../../api/programs";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SideHeader from "../../components/SideHeader";
import Divder from "../../includes/Divider";
import HeadingPage from "../../includes/Elements/HeadingPage";

export default function About(){
    return(
        <div className="w-screen overflow-hidden   ">
            <Header page={'about'}/>
            <div className="w-full min-h-screen bg-gray-0  bg-gray-00 p-4 md:p-0" >
                <div className="w-full flex  lg:ml-60 ml-4 ">
                    <div className="lg:w-1/2 w-[90%] ">
                        <Divder/>
                        <HeadingPage  >WHO ARE WE </HeadingPage>
                        <p className="font-karla mt-6 border-l- text-[#282523] text-justify text-lg px-4 lg:px-4 ">
                        The non-governmental organization Association Jeunesse Action Développement (AJAD) is a Mauritanian non-profit voluntary development organization. 
AJAD was created in 1997 by a group of young Mauritanians with the aim of protecting the national youth from the various temptations that can lead them to debauchery and marginalization and to bring the youth to participate effectively and efficiently in the national construction effort by subscribing to actions to fight against poverty, food insecurity and the degradation of social services (education and health). 
Consequently, AJAD was created as a tool for capacity building and promotion that allows young people and women to fully play their role as development actors.
AJAD is officially recognized by virtue of the receipt N° 0723 MIPT of 11.11.1998 and is managed by a General Assembly and a Board of Directors composed of an Executive Bureau and an Advisory Bureau.                         </p>
<p className="font-karla mt-6 text-[#282523] text-lg text-justify px-4 lg:px-4 ">
Our partnership with international NGOs such as the Institute of Cultural Affairs in the Netherlands, Horizon Holland provides us with a large number of European and other volunteers in the various fields of intervention of AJAD. 

  </p>
  <Divder/>
                        <HeadingPage  >WHAT DO WE DO </HeadingPage>
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
                        <HeadingPage  >OUR EXPERIENCES </HeadingPage>
                        
                        <p className="font-karla mt-6 text-[#282523] text-justify text-lg px-4 lg:px-4 ">
                        The permanent staff of AJAD brings together Consultants, facilitators and trainers of international stature see attached CVs. Specialized in the actions of:<br/>
- Training and supervision of associations <br/>
- Training on grassroots development project management techniques<br/>
- Conducting surveys and sociological studies<br/>
- Preparation of development projects using different participatory methods (MAPP, MARP..)<br/>
- Preparation and launch of awareness campaigns around various themes<br/>

AJAD also has the possibility of obtaining other skills from its partners or through selection competitions and calls for tenders.

AJAD has considerable experience in:<br/>

- Creation of nurseries and reforestation actions in the R'Kiz area<br/>
- Research for the improvement of production<br/>
- Creation and supervision of development poles<br/>
- Community development needs studies<br/>
- Creation and supervision of grassroots development associations and women's agricultural and craft cooperatives<br/>
- Training of grassroots development organizations
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