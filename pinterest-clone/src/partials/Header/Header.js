import React from 'react'
import './Header.css'

export const Header = (props) => {
  return (
    <header>
      <h1>Pinterest</h1>
      <nav>
        <ul>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>Minhas Pastas</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
