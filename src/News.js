import React from 'react'
import travel13 from "./Images/travel4.jpg";
import {BsEmojiSmileFill} from "react-icons/bs";
import {GiFireplace} from "react-icons/gi";
import {MdLocalHotel} from "react-icons/md";
import {MdHotelClass} from "react-icons/md";

function News() {
  return (<>

<section class="container" id="news">
        <div class="container pt-5">
            <div class="row align-items-center justify-content-between">
                <div class="col-md">
                    <img src={travel13} className="img-fluid  d-sm-flex w-100" />
                </div>
                <div class="col-md">
                    <h1 class="text-center mt-3">The Best Travel Agency</h1>
                    <p>On her way she met a copy. The copy warned the Little Blind Text,
                     that where it came from it would have been rewritten a thousand times
                      and everything that was left from its origin would be the word "and" 
                      and the Little Blind Text should turn around and return to its own, safe country.
                       But nothing the copy said could convince her and so it didn’t take 
                       long until a few insidious Copy Writers ambushed her, made her drunk 
                       with Longe and Parole and dragged her into their agency, where they abused
                        her for their.long until a few insidious Copy Writers ambushed her, made her drunk 
                       with Longe and Parole and dragged her into their agency, where they abused
                        her for their.</p>

                </div>
            </div>
        </div>
    </section>




    
<div class="container p-5">
	<div class="row">
	    <br/>
	   <div class="col text-center">
		<h2>Our Service</h2>
		<p>we work for your benefits</p>
		</div>
		
             
		
	</div>
		<div class="row text-center">
	        <div class="col">
	        <div class="counter">
          <span className="icon"><BsEmojiSmileFill/></span>
      <h2 class=" count-title count-number" >400000</h2>
       <p class="count-text ">Happy Customers</p>
    </div>
	        </div>
              <div class="col">
               <div class="counter">
               <span className="icon"><GiFireplace/></span>
      <h2 class=" count-title count-number" >15000</h2>
      <p class="count-text ">Destination Places</p>
    </div>
              </div>
              <div class="col">
                  <div class="counter">
                  <span className="icon"><MdLocalHotel/></span>
      <h2 class=" count-title count-number" >35000</h2>
      <p class="count-text ">Hotels</p>
    </div></div>
              <div class="col">
              <div class="counter">
     <span className="icon"><MdHotelClass/></span>
      <h2 class=" count-title count-number" >14000</h2>
      <p class="count-text ">Resturants</p>
    </div>
              </div>
         </div>
</div>







    
{/* <div className="container mt-5  ">
  <div className="row d-flex b">

    <div className="col flcol ">
      <span className="text-center text-warning"> 1000000</span>
      <span className="text-center">  Happy Customers</span>
    </div>

    <div className="col">
    <span className="text-center"> 400000</span>
      <span className="text-center">  Destination Places</span>
    </div>

    <div className="col">
    <span className="text-center"> 35000</span>
      <span className="text-center">  Hotels</span>
    </div>

    <div className="col">
    <span className="text-center"> 15000</span>
      <span className="text-center">  Resturants</span>
    </div>

  </div>
</div> */}



    
  </>
    
  )
}

export default News