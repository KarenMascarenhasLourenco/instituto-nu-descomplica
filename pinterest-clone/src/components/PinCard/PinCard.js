import React from "react";
import './PinCard.css'
export const PinCard = () => {
 return (
  <div>
   <div className="card-img">
    <img src="http://placehold.it/" alt="" />
    <div className="overlay">
     <p className="">pasta</p>
     <p className="">salvar</p>
     <p className="">link da imagem</p>
    </div>
   </div>
  </div>
 );
};

export default PinCard;
