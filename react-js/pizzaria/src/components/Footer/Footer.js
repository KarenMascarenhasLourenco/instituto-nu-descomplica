import React from 'react';
import './Footer.css';
export const Footer = ()=>{
  return(
    <footer className="container d-flex ms-auto justify-content-around align-content-center">
      <p>Rua dos Bobos n°0<br/>(11) 99999-9999</p>
      <div>
        <a href="instagram.com" target="_blank"><img src='./images/ig.png' height="40px" alt="..."/></a>
        <a href="twitter.com" target="_blank"><img src='./images/twitter.png' height="40px" alt="..."/></a>
        <a href="whatsapp.com" target="_blank"><img src='./images/wpp.png' height="40px" alt="..."/></a>
      </div>
    </footer>
  )
}
export default Footer