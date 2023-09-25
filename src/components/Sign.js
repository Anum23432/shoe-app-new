import React, {useState} from "react";
import {BsEnvelope} from "react-icons/bs";
import {RiLockPasswordLine} from "react-icons/ri";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { BsFacebook, BsApple } from "react-icons/bs";
import {FcGoogle} from "react-icons/fc";
import {BiUser} from "react-icons/bi";


 function Sign() {
    
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");

    const onChangeEmail = (event) => {
     setEmail(event.target.value);
    }

    const onChangePassword = (event) =>{
        setPassword(event.target.value);
    }

    const onChangeName = (event) =>{
        setName(event.target.value);
    }

    const handleClick = () => {
console.log(email,password);

if (email === "" || password === ""){
    alert("please enter email and password")
 } else if (name === "") {
       alert("please enter your name")
 } else{
    window.localStorage.setItem(email,password,name);
}

    }
    return(
        <><br/>
        <Form>
        <div class="logged">
            <br/>
        <h1 class="head1">Create Your Account</h1>
        
            <div class="logged1">
        
            <BiUser size={15}/>
     <label>Your Full Name</label><br/>
     
     <input name = "text" type="text" placeholder="Enter name" onChange={onChangeName}/><br/>
     
     <BsEnvelope size={15}/>
     <label>Your Email</label><br/>
     
     <input name = "email" type="email" placeholder="Enter email" onChange={onChangeEmail}/><br/>
     <RiLockPasswordLine size={15}/>
     <label>Password</label><br/>
     <input type="password" name = "password" placeholder="Password" onChange={onChangePassword}/>
     </div>
     <br/>
     <div class="button2">
        <div class="button1">
        
            
            <Link to="/main" type="submit" onClick={handleClick} className="sign1">Sign Up</Link>
            
        
     </div>
     
     </div>
     <br/>
     
     <span class="dim">Or SignUp With</span><br/>
     <div class="box-icon">
     <div class="iconic">
     <BsFacebook color={"#516FF7"}/>
     </div>
     <div class="iconic">
     <BsApple/>
     </div>
     <div class="iconic">
     <FcGoogle/>
     </div>
     </div><br/>
     
     </div>
     
     <br/>
     </Form>
     <br/>
     
        </>
    )
}
export default Sign;