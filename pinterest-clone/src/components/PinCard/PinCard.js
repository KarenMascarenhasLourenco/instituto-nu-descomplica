import React from "react";
import './PinCard.css'
import { Button } from "../Button/Button"
import { Badge } from "../Badge/Badge";
export const PinCard = () => {
 return (
  <div>
   <div className="card-img">
    <img src="http://placehold.it/" alt="" />
    <div className="overlay">
     <p className="">pasta</p>
     <Button/>
     <p className="">link da imagem</p>
    </div>
   </div>
   <div className="card-content">
    <h3 className='card-title' >Título</h3>
    <p className='card-description'>descrição</p>
   </div>
  </div>
 );
};

export default PinCard;
