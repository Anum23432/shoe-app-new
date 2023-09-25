import React from "react";
// import Login from "./components/Login.js";
// import Sign from "./components/Sign.js";
import Intro from "./components/Intro.js";
import Anime from "./components/Anime.js";
// import Main from "./components/Main";
import { Link } from "react-router-dom";




  


  function Pages(){
    return(
  <> 
   

      <div> 
      <div className='landing-page'><Intro/></div>
  <Anime/>
      
    
          <ul>
            <div class="button2">
              <div class="button1">
            <li>
              <Link class="sign1" to="/Login">Get Started</Link>
            </li>
            </div>
            </div>
            {/* <li>
              <Link to="/Sign">Sign Up</Link>
            </li> */}
          </ul>
        
     
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
         {/* <Routes>
           
         <Route path="/*" element={<React.Fragment><Intro /></React.Fragment>} />
           <Route  path="/Login"
           element={<React.Fragment><Login /></React.Fragment>}
           />
             
            
            <Route path="/Sign"
            element={<React.Fragment><Sign /></React.Fragment>}
            />
            
             <Route path="/Intro"
             element={<React.Fragment><Intro /></React.Fragment>}
             />
            
             <Route path="/Main"
             element={<React.Fragment><Main /></React.Fragment>}
             />
              
           
         </Routes> */}
       </div>
       
     
        </>
    )
  }

  export default Pages;