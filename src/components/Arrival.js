
import React, { useState } from "react";
import {  SiNike, SiAdidas, SiPuma } from "react-icons/si";
import img4 from "../images/5.png";
import img5 from "../images/6.png";
import { useNavigate } from "react-router-dom";

export default function Btn() {
  const navigate = useNavigate();
  const [activeBrandIndex, setActiveBrandIndex] = useState(-1);

  const brands = [
    
    { icon: <SiNike className="brand2" size={30} />, span: "Nike" },
    { icon: <SiAdidas className="brand2" size={30} />, span: "Adidas" },
    { icon: <><SiPuma className="brand4" size={25} /></>, span: "Puma" },
    { icon: <img className="icon1" src={img4} alt="shoe1" />, span: "Converse" },
    { icon: <img className="icon2" src={img5} alt="shoe2" />, span: "UnderArmour" },
    
  ];

  const handleBrandClick = (index) => {
    setActiveBrandIndex(index);
    const selectedBrand = brands[index].span; // Get the selected brand
    navigate(`/filter/${selectedBrand}`); // Pass the selected brand as a URL parameter
  };

  return (
    <>
      <h1 className="head2">Brands</h1>
      <br />
      <div className="brands">
        {brands.map((brand, index) => (
          <div className="brand-wrapper" key={index}>
            <div
               className={`brand1 ${index === activeBrandIndex ? 'hover' : " " }`}
              onClick={() => handleBrandClick(index)}
            >
              <i>{brand.icon}</i>
            </div>
            <div className="hard">
              <span className="brand-description">{brand.span}</span>
            </div>
          </div>
        ))}
      </div>

      <br /><br />
    </>
  );
}

