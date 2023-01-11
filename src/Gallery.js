import React from 'react'
import travel8 from "./Images/travel8.jpg";
import travel12 from "./Images/travel12.jpg";
import travel14 from "./Images/travel14.jpg";

function Gallery() {
  return (<>


<section className="p-1" id="gallery" >
    <div className="container bg-primary ">
    <h1 className="text-center text-white pt-5">See our latest vacation ideas</h1>
        <div className=" row d-flex flex-wrap">
     
            <div className="col-md mb-3 imgbtn pt-3 ">
                <img src={travel8} alt="" />
                  <button type="button" className="btn  p-3 w-75">
                  <a href="https://unsplash.com/s/photos/mountainscape" style={{textDecoration: "none"}}>Mountain Scap</a>
                  </button>
                    </div>
                  


                  
            <div className="col-md mb-3 imgbtn pt-3 ">
                <img src={travel14} alt="" />
                <button type="button" className="btn  p-3 w-75">
                <a href="https://www.travelandleisure.com/trip-ideas/summer-vacations/americas-best-lake-vacations" style={{textDecoration: "none"}}>Lake trips</a>
                </button>
                    </div>
                


                  
            <div className="col-md mb-3 imgbtn pt-3">
                <img src={travel12} alt="" />
                <button type="button" className="btn  p-3 w-75">
               <a href="https://www.undiscovered-destinations.com/pakistan/" style={{textDecoration: "none"}}> Group Holidays</a>
                </button>
                    </div>
                  


                  </div>
                </div>
            
          
           
     </section>

  </>
    
  )
}

export default Gallery