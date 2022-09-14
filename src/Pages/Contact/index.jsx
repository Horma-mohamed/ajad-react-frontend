import googleMapReact from "google-map-react";
import React , { useRef,ReactDOM } from "react";
import { BiMap, BiMapPin, BiPhone, BiSend } from "react-icons/bi";
import { MdEmail, MdSend } from "react-icons/md";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Divder from "../../includes/Divider";
import HeadingPage from "../../includes/Elements/HeadingPage";
import emailjs from '@emailjs/browser';
import { BsMap } from "react-icons/bs";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact(){
    const email = useRef()
    const subject = useRef()
    const message = useRef()
    const alert = document.getElementById('alert')
    const ContactForm = useRef()
    const [isSent,setIsSent] = useState(false)
    function validateEmail (emailAdress)
    {
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (emailAdress.match(regexEmail)) {
        return true; 
      } else {
        return false; 
      }
    }
    
        
    const sendMessage = (e)=>{
        e.preventDefault();
        if (email.current && message.current != ' '){
            if(validateEmail(email.current.value)){
                emailjs.sendForm('service_y9yccw6','template_ychvupu',ContactForm.current,'e4FNmhQo1ZLEmZzFY')
                .then((result)=>{
                    if( result.text =='Ok'){
                            
                    }
            console.log(result.text)
        },
        (erorr)=>{
            console.log(erorr.text)
        })
            email.current.value =''
            message.current.value=''
            subject.current.value=''
            alert('msg sended')
        
        
            }
            else{
                alert('the email you have entred is not valid ! ')
            }
        }
        else{
            alert('form can not be empty ! ')
        }
    

        
    }
    const {t} = useTranslation()
    return(
        <div className=" w-screen min-h-screen overflow-x-hidden ">
            <Header page='contact'/>
            <Divder/>
            <div className="w-full flex justify-center">
                <div className="lg:w-[50%] w-[70%] ">
                  

                    <div className="w-full lg: mt-10 lg:space-x-4 space-y-6 lg:space-y-0   ">
                       
                        <div className=" w-full px- mb-10 ">
                        <HeadingPage >
                        {t("STAY_IN_TOUCH")}
                    </HeadingPage>
                        
                        <div className="w-full ">
                        
                        
                        <ul className="space-y-6 w-full  hidde pt-4">
                            <li className="p-2 text-gray-700 flex space-x-4 items-center">
                                <BiPhone className="text-xl"/> <a href="tel:+22244420152">+22244420152</a>
                            </li>
                            <li className="p-2  text-gray-700 flex space-x-4 items-center ">
                                <BiMapPin className="text-2xl "/> <span  className=""> Mauritania/Nouakchott/TevraghZiena street 4556k</span>
                            </li>
                            <li className="p-2 text-gray-700 flex space-x-4 items-center">
                                <MdEmail className="text-xl"/> <a href="mail:info@ongjad.com">info@ongjad.com</a>
                            </li>
                        </ul>
                        
                        </div>
                        </div>
                        <div className=" w-full px- mb-10 ">
                       
                    
                        
                        <div className="w-full text-xl text-green-400 font-karla font-bold " id="alert">
                               
                            </div>

                            <form ref={ContactForm} onSubmit={sendMessage} className="w-full space-y-4 relative"  >
                            
                                <input ref={email}  type="email"  placeholder={t("EMAIL")} name="user_email" className="w-full h-14 rounded-md bg-gray-50 px-3 outline-orange-400 " />
                                <input ref={subject} type="text" placeholder={t("SUBJECT")} name="subject" className="w-full h-14 rounded-md bg-gray-50 px-3 outline-orange-400 " /> 
                                <textarea ref={message} name="message" id="" placeholder={t("MESSAGE")} className="w-full p-2 h-52 rounded-md bg-gray-50 px-3 outline-orange-400" ></textarea>
                                <button type="submit"  className=" float-right rounded-md  shadow-xl  transform duration-500  p-4 flex justify-center items-center space-x-4 text-white  bg-orange-400  mb-20 lg:mb-0 ">
                                    <span>{ t("SEND") }</span> <MdSend className=""/>
                                </button>
                            </form>
                            
                        </div>
                        </div>
            
            
            </div>
        </div>
        
        <Divder h='40'/>
        <Footer/>
        </div>
    )
}