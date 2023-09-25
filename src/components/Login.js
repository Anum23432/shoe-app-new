import React, {useState} from "react";
import {BsEnvelope} from "react-icons/bs";
import {RiLockPasswordLine} from "react-icons/ri";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { BsFacebook, BsApple } from "react-icons/bs";
import {FcGoogle} from "react-icons/fc";
// import { useHistory } from "react-router-dom";

 function Login() {
    
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const onChangeEmail = (event) => {
     setEmail(event.target.value);
    }

    const onChangePassword = (event) =>{
        setPassword(event.target.value);
    }

    const handleClick = () => {
console.log(email,password);
if (email === "" || password === ""){
    alert("please enter email and password")
} else{
    window.localStorage.setItem(email,password);
}

    }
    return(
        <>
        <br/>
        <Form>
        <div className="logged">
            <br/>
        <h1 className="head1">Login to Your Account</h1>
        
            <div className="logged1">
        
        
     
     <BsEnvelope size={15}/>
     <label>Email</label><br/>
     
     <input name = "email" type="email" placeholder="Enter email" onChange={onChangeEmail}/><br/>
     <RiLockPasswordLine size={15}/>
     <label>Password</label><br/>
     <input type="password" name = "password" placeholder="Password" onChange={onChangePassword}/>
     <div class="remember">
     <input class="checked" type="checkbox"/>
     <label class="checker">Remember me<span class="forget">Forget Password?</span></label>
     
     </div>
     </div>
     <br/>
     <div class="button2">
        <div class="button1">
        
            
            <Link to="/main" type="submit" onClick={handleClick}class="sign1">Log In</Link>
            
        
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
     <p class="line1">Don't have an Account?
     <span>
        
            <Link to="/sign" class="sign2">Sign Up</Link>
        
        </span>
        </p>
     </div>
     
     
     </Form>
     <br/>
     <br/>
        </>
    )
}
export default Login;