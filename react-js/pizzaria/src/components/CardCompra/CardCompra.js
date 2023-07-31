import React from "react";

const CardCompra = ({ name, price, quantity }) => {
 return (
  <div>
   <p>{name}</p>
   <p>Price: ${price}</p>
   <p>Quantity: {quantity}</p>
  </div>
 );
};

export default CardCompra;
