// 
import React from "react";
import { Carousel } from 'react-bootstrap';
import img7 from "../images/8.jpg";
import img8 from "../images/9.png";
import img6 from "../images/7.png";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";
import MultiImageSlider from "./Multi";
import {Link} from "react-router-dom";

function Sliding() {
  return (
    <>
    <div className="card1" >
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={img6}  alt="air jordan" style={{borderRadius:"4%"}} />
          <div className="air2">
            <span>Nike Air Jordan</span>
          </div>
          <span className="heart"><AiOutlineHeart  /></span>
          
            <div className="details">
              <p className="point">Reviews (4.9 <AiOutlineStar size={12} />) <span className="add"><IoMdAddCircle size={32} /></span> </p>
              <p className="point">$ 38.5</p>
            </div>
          
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img7} style={{borderRadius:"4%"}} alt="air jordan" />
          <div className="air2">
            <span>Nike Air Jordan Red</span>
          </div>
          <span className="heart"><AiOutlineHeart size={20} /></span>
          
            <div className="details">
              <p className="point">Reviews (4.00 <AiOutlineStar size={12} />) <span className="add"><IoMdAddCircle size={32} /></span> </p>
              <p className="point">$ 40.5</p>
            </div>
          
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img8} style={{borderRadius:"4%"}} alt="white and black" />
          <div className="air2">
            <span>Nike White & Black</span>
          </div>
          <span className="heart"><AiOutlineHeart size={20} /></span>
          
            <div className="details">
              <p className="point">Reviews (5.00 <AiOutlineStar size={12} />) <span className="add"><IoMdAddCircle size={32} /></span> </p>
              <p className="point">$ 35.5</p>
            </div>
          
        </Carousel.Item>
      </Carousel>
      </div><br/>
      <h1 className="popular">New Arrivals <Link className="view"><span>View All</span></Link></h1> <br/>
      
<MultiImageSlider/>
      
    </>
  );
}

export default Sliding;
