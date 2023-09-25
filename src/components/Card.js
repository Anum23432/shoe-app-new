import React from "react";
import {

    Link
} from "react-router-dom";
// import StarRating from "./StarRating";
import {FiShoppingCart} from "react-icons/fi"



function Card(props) {
    return (
        <>
            <div className='cards'>
                <div class="card-1" >
                    <img src={props.picture} className="card-img" alt="mobile"   />
                    <div className="card-body">
                                              
                         <h5 class="card-title1">{props.category}</h5>
                        <h5 class="card-title2">{props.model}</h5>                 
                        <div className="button4">
                            <div className="button3">
                                
                           <Link to={props.link} className="shop1">Shop</Link>
                           <FiShoppingCart size={17} color="white" />
                           </div>
                           </div>
                        
                    </div>
                </div>
            </div>


        </>
    );
}

export default Card;