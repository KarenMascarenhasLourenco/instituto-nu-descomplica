import React from "react";
import "./PinCard.css";
import Button from "../Button/Button";
import Badge from "../Badge/Badge";
export const PinCard = ({ image, title, total, onClick }) => {
 return (
  <div>
   <div className="card-img">
    <img src={image} alt="" />
    <div className="overlay">
     <p className="">pasta</p>
     <Button onClick={onClick} label='Salvar'>
      <Badge total={total} />
     </Button>
     <p className="">{image}</p>
    </div>
   </div>
   <div className="card-content">
    <h3 className="card-title">{title}</h3>
    <p className="card-description">descrição</p>
   </div>
  </div>
 );
};

export default PinCard;
