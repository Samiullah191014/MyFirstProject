import React from "react";
import { NavLink } from "react-router-dom";
import App from "./App.css";
import {MdContactPhone} from "react-icons/md";
import {FaFacebookF} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";






const Contact=()=>{

    return(<>
 
    <div className="container" id="contact" >
        <div className="row bgrow1 ">
        <div className="col-10 ml-auto pt-5 ">
        <h1 className="stroke-text">Contact us</h1>
            <p className="text-white font-weight-bold">Let's talk about your website or project, send us a message and we 
            <div className="w-100"></div>
            will be in touch within one business day</p>
       
         
            
        </div>
            

         <br/> <br/>

        <div className="row  mx-auto pt-5">
            <div className="col-6 bg-white">
                <h4 className="pt-4"><a href="https://www.google.com"target="_blank"id="kaka">Pricing or plans</a></h4>
                <div className="w-100"></div>
                <h4><a href="https://www.google.com"target="_blank"id="kaka">your desire payment methods</a></h4>
                <div className="w-100"></div>
                <h4><a href="https://www.google.com"target="_blank"id="kaka">Request for guideness or any related questions</a></h4>
                <div className="w-100"></div>
                <h4><a href="https://www.google.com"target="_blank"id="kaka">Best tourists places </a></h4>
                <div className="w-100"></div>
                <h4><a href="https://www.google.com"target="_blank"id="kaka">Anything else</a></h4>
                <div className="w-100"></div>
            </div>



            <div className="col-6 bg-white  ">
                <h4 className="pt-4 hhh "><a href="https://www.google.com"target="_blank"><MdContactPhone/>WTour@.com</a></h4>
                <div className="w-100"></div>
                <h4 className="hhh"><a href="https://www.facebook.com"target="_blank"><FaFacebookF/> Facebook.co</a></h4>
                <div className="w-100"></div>
                <h4 className="hhh"><a href="https://www.twitter.com"target="_blank"><FaTwitter/> Twitter.com</a></h4>
                <div className="w-100"></div>
                <h4 className="hhh"><a href="https://www.instagram.com"target="_blank"><FaInstagram/> Instagram.c</a></h4>
                <div className="w-100"></div>
                <h4 className="hhh"><a href="https://www.linkedin.com"target="_blank"><FaLinkedinIn/> Linkedin.co</a></h4>
                <div className="w-100"></div>
                <h5 className="hhh">Already member of WinterTour ?</h5>
                <div className="w-100"></div>
                <p className="hhh">Chat with <strong><a href="www.facebook.com" target="_blank">wTour</a></strong> now and get an 
                <div className="w-100"></div>
                instant reply</p>
            </div>

            

        </div>

       
    </div>

  </div>




  <div className="container mt-5 p-5 ">
   <div className="row ">
   <iframe style={{width: "100%" , height: "400px" , border: "1px" , backgroundColor: "blue" , borderRadius: "10px"}} src="https://maps.google.com/maps?width=1612&amp;height=432&amp;hl=en&amp;q=islamabad pakistan&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

   </div>
  </div>

    </>)
}

export default Contact;