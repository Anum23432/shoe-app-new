
import './App.css';
import React from "react";
import Pages from "./Pages";
import { BrowserRouter, Routes,Route} from "react-router-dom";
import Intro from './components/Intro';
import Details from "./components/Details.js";
import Login from "./components/Login.js";
import Sign from "./components/Sign.js";
import Main from "./components/Main.js";
import Filter from "./components/Filter.js";
import  { CartProvider } from "./CartContext.js";
import Cart from "./components/Cart.js";
import Profile from './components/Profile.js';
import Policy from "./components/Policy";

function App() {
  

return(
  <BrowserRouter>
  
  
    
   <CartProvider> 
  <Routes>
        <Route path="/" element={<Pages />} />
        
           <Route  path="/Login"
           element={<Login />}
           />
             
            
            <Route path="/Sign"
            element={<React.Fragment><Sign /></React.Fragment>}
            />
            
             <Route path="/Intro"
             element={<React.Fragment><Intro /></React.Fragment>}
             />
            
             <Route path="/Main"
             element={<Main />}/>

             
             <Route path="/filter/:brandName" element={<Filter />} />
             <Route path="details/:id" element={ (<Details />)}/>
             <Route path="/Cart"
             element={<Cart />}/>

            <Route path="/Profile"
             element={<Profile />}/>

             <Route path="/Policy"
             element={<Policy />}/>
      </Routes>
      </CartProvider>
  </BrowserRouter>
);

}

export default App;
