import React from "react";
 import img7 from "../images/10.jpg";
 import img8 from "../images/11.jpg";
 import img9 from "../images/13.png";
 import img10 from "../images/16.jpg";
 import img11 from "../images/17.png";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineHeart,AiOutlineStar } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";






const MultiImageSlider = () => {
     const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      variableWidth: true,
      centerMode: true,
      centerPadding: "0px",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
          
        };
        return (
          <div>
             <style>{`
        .slick-slide {
          width: 220px !important;
          height: 300px !important;
          
        }
      `}</style>
            <Slider {...settings}>
              <div className="box5">
              <img src={img7} width="200px" height="200px" alt="img1" style={{marginLeft:"5%",marginTop:"2%",borderRadius:"10px"}}  />
              <div className="price">
              <p className="point">Reviews (4.00 <AiOutlineStar size={10} />) <span className="add"><IoMdAddCircle size={32} /></span> </p>
              <p className="point">$ 40.5</p>
              <span className="hearts"><AiOutlineHeart  /></span>
            </div>
              </div>
              <div className="box5">
                <img src={img8} width="200px" height="200px" alt="img2" style={{marginLeft:"5%",marginTop:"2%",borderRadius:"10px"}} />
                <div className="price">
              <p className="point">Reviews (4.00 <AiOutlineStar size={10} />) <span className="add"><IoMdAddCircle size={32} /></span> </p>
              <p className="point">$ 40.5</p>
              <span className="hearts"><AiOutlineHeart  /></span>
            </div>
              </div>
              <div className="box5">
                <img src={img9} width="200px" height="200px" alt="img3" style={{marginLeft:"5%",marginTop:"2%",borderRadius:"10px"}} />
                <div className="price">
              <p className="point">Reviews (4.00 <AiOutlineStar size={10} />) <span className="add"><IoMdAddCircle size={32} /></span> </p>
              <p className="point">$ 40.5</p>
              <span className="hearts"><AiOutlineHeart  /></span>
            </div>
              </div>
              <div className="box5">
                <img src={img10} width="200px" height="200px" alt="img3" style={{marginLeft:"5%",marginTop:"2%",borderRadius:"10px"}} />
                <div className="price">
              <p className="point">Reviews (4.00 <AiOutlineStar size={10} />) <span className="add"><IoMdAddCircle size={32} /></span> </p>
              <p className="point">$ 40.5</p>
              <span className="hearts"><AiOutlineHeart /></span>
            </div>
              </div>
              <div className="box5">
                <img src={img11} width="200px" height="200px" alt="img3" style={{marginLeft:"5%",marginTop:"2%",borderRadius:"10px"}} />
                <div className="price">
              <p className="point">Reviews (4.00 <AiOutlineStar size={10} />) <span className="add"><IoMdAddCircle size={32} /></span> </p>
              <p className="point">$ 40.5</p>
              <span className="hearts"><AiOutlineHeart  /></span>
            </div>
              </div>
              
            </Slider>
          </div>
  );
};

export default MultiImageSlider;

   
