import React from 'react'
import {IoMdAirplane} from "react-icons/io";
import {BsStarFill} from "react-icons/bs";
import {MdPeople} from "react-icons/md";
import {FaLaptopCode} from "react-icons/fa";

function About() {
  return (<>


<section className="" id="about" >
    <div className="container bg-primary p-lg-5 " >
    <h1 className="text-center text-white">Why We’re the Best</h1>
    
        <div className="row text-center g-4">
            <div className="col-md">
                <div className="card bg-primary text-light" >
                  <div className="card-body text-center">
                    <div className="h1 mb-3 text-warning">
                        <FaLaptopCode/>
                    </div>
                    <h3 className="card-title mb-3">
                        Accommodation
                      
                    </h3>
                    <p className="card-text">We offer the finest selection of top notch hotels anywhere!We offer the finest selection of top notch!</p>
                    
                  </div>
                </div>
            </div>
            <div className="col-md">
                <div className="card bg-primary text-light" >
                  <div className="card-body text-center">
                    <div className="h1 mb-3 text-warning">
                       <IoMdAirplane/>
                    </div>
                    <h3 className="card-title mb-3">
                        Transportation
                    </h3>
                    <p className="card-text">Whether it’s about air tickets or shuttle bus, we will set it up!Whether it’s about air tickets or shuttle bus.</p>
                    
                  </div>
                </div>
            </div>
            <div className="col-md">
                <div className="card bg-primary text-light" >
                  <div className="card-body text-center">
                    <div className="h1 mb-3 text-warning">
                        <MdPeople/>
                    </div>
                    <h3 className="card-title mb-3">
                         Agents
                    </h3>
                    <p className="card-text">Combined, the experience our agents have is centuries! Vitae commodi facilis dolores mollitia</p>
                    
                  </div>
                </div>
            </div>

            <div className="col-md">
                <div className="card bg-primary text-light" >
                  <div className="card-body text-center">
                    <div className="h1 mb-3 text-warning">
                        <BsStarFill/>
                    </div>
                    <h3 className="card-title mb-3">
                        Trip planning
                    </h3>
                    <p className="card-text">Our travel agents are always ready to plan your perfect trip!. Vitae commodi facilis dolores mollitia</p>
                    
                  </div>
                </div>
            </div>
        </div>
    </div>
     </section>

  </>
    
  )
}

export default About