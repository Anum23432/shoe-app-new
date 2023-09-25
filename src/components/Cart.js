import React from "react";
import { useCart } from "../CartContext";
import {RiDeleteBin2Fill} from "react-icons/ri";
import {AiTwotoneShopping} from "react-icons/ai";
import {Link,useNavigate} from "react-router-dom";

function Cart() {
  const { cartItems , removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleRemove = (index) => {
    removeFromCart(index);
  };

  const goBack = () => {
    navigate(-2);
       };


  return (
    <>
    <div className="cart-page"><br/>
      <h1 className="head2">Your Cart</h1><br/>
      <ul className="cart-list"><br/>
        {cartItems.map((item, index) => (
          <>
          <li key={index}>
            <div className="cart-card">
              <img src={item.picture} alt={item.model} className="cart-item-image" /><br/><br/>
              <div className="detail2">
                {item.model} - ${item.price}
              </div>
              
              <RiDeleteBin2Fill  size={20} className="delete" onClick={() => handleRemove(index)}/>
              
            </div>
          </li> <br/>

          </>
        ))}
      </ul><br/><br/>
      <div className="button2">
        <div className="button1">
    <Link className="sign1" onClick={goBack}>Continue Shop <AiTwotoneShopping size={25}/></Link>
    </div>
    </div>
    </div><br/>
    </>
  );
}

export default Cart;
