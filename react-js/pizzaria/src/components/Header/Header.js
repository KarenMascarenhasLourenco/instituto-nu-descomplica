import React from 'react';

export const Header = ()=>{
  return(
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="index.html"><img src="./public/logo-pizza.png" height="120px"
              alt="company logo"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="nosso-time.html">Nosso time</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="quem-somos.html">Quem somos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="cardapio.html">Cardápio</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Header