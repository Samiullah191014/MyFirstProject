import React from "react";
import {NavLink} from "react-router-dom";
import App from "./App.css";
import {Link} from "react-scroll";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {SiYourtraveldottv} from "react-icons/si";



// window.addEventListener("scroll",()=>{
//   document.querySelector(".navbar").classList.toggle("window-scroll",window.scrollY>0)
// })


const Navbar1 = () => {

  
  return (
    <>
    <div className="container  " >
    <nav className="navbar navbar-expand-lg bg-primary  ">
      <Link to="home" spy={true} smooth={true} offset={50} duration={500} className=" text-light p-4 font-weight-bold size" >
       <SiYourtraveldottv/> Winter Tour
      </Link>
    
      <div className="collapse navbar-collapse" >
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active ">
            <Link to="home" spy={true} smooth={true} offset={50} duration={500} className="nav-link text-light red " >
              Home 
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" spy={true} smooth={true} offset={50} duration={500} className="nav-link text-light red" >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className="nav-link text-light red" >
              Contact
            </Link>
          </li>
          
          <li className="nav-item">
          <Link to="gallery" spy={true} smooth={true} offset={50} duration={500} className="nav-link text-light red" >Gallery</Link>
          </li>

          <li className="nav-item">
          <Link to="news" spy={true} smooth={true} offset={50} duration={500} className="nav-link text-light red" >News</Link>
          </li>

          
         
        </ul>
      </div>
    </nav>
    </div>
    
    </>
  );
};

export default Navbar1;










