import { NavLink } from 'react-router-dom'
import Logo from '../Logo'

function Nav() {
  return (
    <nav className="nav">
      <Logo className="logo" />

      <ul className="nav__links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/chemin/qui/n'existe/pas">404</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
