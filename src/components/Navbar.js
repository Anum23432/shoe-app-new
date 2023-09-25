import React from "react";
import {BsHandbag} from "react-icons/bs";
import {AiOutlineHome} from "react-icons/ai";
import {BiCategoryAlt} from "react-icons/bi";
import {AiOutlineHeart} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {Link} from "react-router-dom";
import { useCart } from "../CartContext.js";

function Navbar(){
  const {cartItems } = useCart();
    return(
        <>
        <div className="nav">
          <Link to="/cart">
            <div className="bag0">
         <BsHandbag className="bag" />
      <div className="power">  
       {cartItems.length}
       </div>
           </div>
           </Link>
        </div><br/> <br/>
      <section className="lower-bar">
        <Link to="/main" >
            <AiOutlineHome className="end-icon" />
        </Link>
        <Link to="/policy">
            <BiCategoryAlt className="end-icon" />
        </Link>
            <AiOutlineHeart className="end-icon" />
          <Link to="/profile">
            <AiOutlineUser className="end-icon" />
            </Link>
      </section>

        </>
    )
}
export default Navbar;