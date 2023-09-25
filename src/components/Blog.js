import React from "react";

import Card from "./Card";

export default function Blog(){
    return(
        <>
  <section className='container py-4 py-lg-5'>
        <div className= 'row justify-content-center' >
            {dataItems.map((item, index)=>{
                return(<Card key={index} model={item.model} picture={item.picture} category={item.category} link={`/details/${item.id}`} />)
            })}
            
​
        </div>
    </section>
        </>
    )
}
