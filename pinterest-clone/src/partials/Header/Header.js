import { Link } from 'react-router-dom'
import './Header.css'

export const Header = (props) => {
  return (
    <header>
      <h1>Pinterest</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/minhas-pastas'>Minhas pastas</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
