import React from 'react';

export const Header = ()=>{
  return(
    <header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="index.html"><img src="./public/logo-pizza.png" height="120px"
              alt="company logo"/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="nosso-time.html">Nosso time</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="quem-somos.html">Quem somos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="cardapio.html">Cardápio</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Header