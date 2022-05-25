import React from "react"
// import { Image } from "react-bootstrap";

const Rat = ({rating,handleRating}) => {
    var x = [];
    //var n = rating;
    //var ch = <span> * </span>;
    for (let i=0;i<rating;i++){
         //x += <h1 style={{color:"yellow"}}>*</h1>
         x[i]= <span onClick={()=>handleRating(i)} style={{fontSize:"20pt", color:"rgb(253,218,22)",cursor:'pointer'}}> ★</span>   
    }
    for (let i=rating+1;i<=5;i++){
       // x += <h1 style={{color:"gray"}}>*</h1>
       x[i]= <span onClick={()=>handleRating(i)}style={{fontSize:"20pt", color:"lightgrey",cursor:'pointer'}}> ★</span>
   }
    
    return (x )
  }

export default Rat 
