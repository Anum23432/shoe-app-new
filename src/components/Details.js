
import React from "react";
import { useParams, useNavigate,Link } from "react-router-dom";
import data from "./Data.js";
import Navbar from "./Navbar.js";
import {BiArrowBack} from "react-icons/bi";
import {FaCartArrowDown} from "react-icons/fa";
import { useCart } from "../CartContext.js";

function Details() {
    
  const { addToCart } = useCart();
    const navigate = useNavigate();
    const { id } = useParams();
    const getId = parseInt(id, 10); 
    const getData = data[getId - 1];

    
    
    

    const goBack = () => {
 navigate(-1);
    };        // Go back to the previous page
       
    const addToCartHandler = () => {
        addToCart(getData); // Pass the selected product to addToCart
        // localStorage.setItem("cartItems", JSON.stringify(cartItems));
      };

    return (
        <>
            <br/>
            <div className="detail0">
            <BiArrowBack onClick={goBack} size={20} className="back"/>  
            <h1 className="detail1">Details </h1>
            </div>
            <br/>
                
                    <img src={getData.picture} className="card-img-1" alt="mobile"/>
                    <div className="card-body">
                        <h6 className="card-title1">{getData.model}</h6>
                        <h6 className="card-title2">{getData.price}</h6>
                        <h6 className="card-title3">{getData.des}</h6>
                    </div>
                    <div class="button2">
        <div class="button1">
        
            
            <Link class="sign1"onClick={addToCartHandler}>Add To Cart <FaCartArrowDown  /></Link>
            
        
     </div>
     
     </div>
      
     
     
            <br/>
            <br/><br/>
            <Navbar/>
            <br/>
        </>
    );
}

export default Details;
