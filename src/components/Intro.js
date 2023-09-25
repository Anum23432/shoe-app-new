
import React, { useState } from "react";


function Intro() {
  const [animationComplete, setAnimationComplete] = useState(false);

  function handleAnimationEnd() {
    setAnimationComplete(true);
  }

  return (
    <>
    <div className={` ${animationComplete ? "slide-left" : ""}`} onAnimationEnd={handleAnimationEnd}>
      
      
    </div>
    
    </>
  );
}

export default Intro;
