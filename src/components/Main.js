import React from "react";
import {BsSearch,BsMic} from "react-icons/bs";
import {CiSliderHorizontal} from "react-icons/ci";
import Sliding from "./Sliding.js";
import Btn from "./Arrival.js";
import Navbar from "./Navbar.js";



export default function Main(){
return(

<>
<div class="main-full"><br/>
    <div class="mid2">
<div class="search">
    <BsSearch class="search-glass" />   
    <input class="search1" placeholder="Search here" type="text"/>
    
    <BsMic  className="mic" />
    
</div>
<div class="filter">
    <CiSliderHorizontal size={25} class="filter1"/>
</div>
</div><br/>
<Btn/>

<h1 class="popular">Popular Shoes</h1><br/>


<Sliding/>

</div>
<br/><br/><br/>

<Navbar/>
<br/><br/>

</>


)


}