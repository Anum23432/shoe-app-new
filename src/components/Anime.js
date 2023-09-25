
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../images/2.png";
import img2 from "../images/3.png";
import img3 from "../images/4.png";
import {GiRunningShoe} from "react-icons/gi"
import { BiWind} from "react-icons/bi"
// import Intro from "./Intro";


function Anime() {
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.landing-page').classList.add('slide-left');
    }, 2000);
     setTimeout(() => {
       setShowCarousel(true);
     }, 2000); // Change this time interval as per your preference
  }, []);
  
  

  return (
    <>
      <div className={`landing-page  slideleft ${showCarousel ? 'hide' : ''}`}>
      <div className='heading'>
        <BiWind className="wind" size={50} color={'#1cc98f'} />
         <GiRunningShoe size={70} color={'#1cc98f'}/>
        </div>
      <h2>Shoe App</h2>
    </div>
      

      {showCarousel && (
        <div className="main-page">
          <div className="my-carousel" >
          <Carousel fade>
            <Carousel.Item>
              <img className="d-block w-100" src={img1} alt="First slide" width="450px" height="350px" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img2} alt="Second slide" width="450px" height="350px" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img3} alt="Third slide" width="450px" height="350px" />
            </Carousel.Item>
          </Carousel>
          </div><br/>
          <div className="heading1">
        <h1 className="f1">Find your favourite<br/> <span className='mid'>Shoes with us</span></h1><br/>
         <p>Polish up your selfies to make yourself<br/> <span className='mid'>more beautiful with this app.</span></p><br/>
        </div>
          
        </div>
      )}
    </>
  );
}

export default Anime;
