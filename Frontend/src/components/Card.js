import React from "react";
import './Card.css'

function Card(props) {
   
  return (
    
        <div className="card-container ">
            <div class="row">
                <img  className="image-container" src={props.img} alt="photo" />
            </div>
            <div className="card-title">
                <h2 className="txt">{props.name}</h2>
            </div>
        
        </div>

 
     
  )

    
}



export default Card;