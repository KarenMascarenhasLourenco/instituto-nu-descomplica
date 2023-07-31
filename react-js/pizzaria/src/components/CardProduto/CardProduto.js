import React from "react";
import "./CardProduto.css";

const CardProduto = ({ name, description, price, image, onAddToCart }) => {
  const handleClick = (event) => {
   event.preventDefault();
   onAddToCart();
  };

 return (
  <div className="card text-center staff-card" style={{ width: "20rem" }}>
   <img
    src={image}
    style={{ width: "12rem" }}
    className="card-img-top"
    alt="..."
   />
   <div className="card-body">
    <h3 className="card-title">{name}</h3>
    <p className="card-text">{description}</p>
    <h5>{price}</h5>
    <a href="" className="btn btn-primary" onClick={handleClick}>
     COMPRAR
    </a>
   </div>
  </div>
 );
};

export default CardProduto;
