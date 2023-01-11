
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Link} from "react-scroll";
import {AiOutlineArrowUp} from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function Footer() {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qn9t98d', 'template_xsdghy8', form.current, 'EWJ0JD9Lg9IPhMzib')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }; 

 function DiffToast(){

  toast.success("your email is submitted,we will contact you within an hour 🥰" ,{
position: "top-center" });
}


  return (<>


<div className="container">
  <div className="row bg-primary text-left">
    
  <form className="ui form" ref={form} onSubmit={sendEmail}>
  <div className="field">
    <label htmlFor="first_name">Enter Name</label>
    <input type="text" name="first_name" id="first_name" placeholder="Your Name"/>
  </div>
  <div className="field">
    <label htmlFor="email">Enter Email</label>
    <input type="email" name="user_email" id="email" placeholder="123@gmail.com"/>
  </div>
  
    <div className="ui checkbox">
      <input type="checkbox" tabindex="0" class="hidden"/>
      <label>I agree to the Terms and Conditions</label>
    </div>
  
  
  <div>
    <label className="text-warning"> Your Message</label><br/>
    <textarea cols="35" rows="4" name="text_message" style={{resize: "none"}} ></textarea>
  </div>
  
  <button className="ui button" type="submit" onClick={DiffToast}>Submit</button>
  <button className="ui button" type="reset">Reset</button>
</form>
<br/>
  
<p className="text-center text-white">&copy; copy right reserved by Winter Tour &reg; 2022-2023</p>


   <p className=" text-right">
  <button type="button" className="btn btn-primary "><Link to="home"> Back to Top <AiOutlineArrowUp/></Link></button>
  </p>
  
  </div>
</div>

  <ToastContainer/>
  </>
    
  )
}

export default Footer;