
import React from "react";
import { useParams } from "react-router-dom";
import data from "./Data.js";
import Card from "./Card.js";
import Navbar from "./Navbar.js";


export default function Filter() {
  const { brandName } = useParams();
  console.log("Selected brand:", brandName);
  const filteredItems = data.filter((item) => item.category === brandName);
  
  return (
    <>   
     <section className="container py-4 py-lg-5">
      <div className="row justify-content-center">
        
        {filteredItems.map((item, index) => (
          <>
          {/* <h1 className="head2"> {item.category}</h1> */}
          <Card
            key={index}
            model={item.model}
            picture={item.picture}
            category={item.category}
            link={`/details/${item.id}`}
          />
          </>
        ))}
        
      </div>
      
    </section>
    <Navbar/><br/><br/>
    </>

  );
}
