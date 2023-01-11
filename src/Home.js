import React from "react";
import Typical from 'react-typical';

function Home() {
  return (
    <>
      <div className="container bgrow" id="home">
        <div className="row m-1 ">
          <span className="text-center texttypical ">
         
           <Typical
        steps={[
          " We are your ultimate Winter ",
           "experience Provider! ❤️",
           1000, 
           "we provide best tour trip in the world 👍 ", 
           1000, 
           "welcome to Winter Tour ❤️‍🔥" ,
            1000,
            ]}
        loop={Infinity}
       
      />
           
          </span>
          
          <p className="text-center para1">
            With hundreds of winter holiday destinations offered, we are your
            <div className="w-100"></div>
            natural choice for planning it all out!
          </p>
        </div>
        <div className="text-center justify-content-center">
        <button
            type="button"
            className="btn text-center btn-outline-primary btn-lg text-white font-weight-bold butt "
          >
          <a href="https://www.pakistantravelguide.pk/package-category/winters-tour-packages/" style={{textDecoration: "none", color: "white"}}>  Learn More </a>
          </button>
          </div>
      </div>
    </>
  );
}

export default Home;
