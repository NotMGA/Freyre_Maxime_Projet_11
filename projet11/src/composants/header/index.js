import { Link } from 'react-router-dom'
import Kasa from '../../assets/Kasa.PNG'

function Header() {
  return (
    <div className="header-global">
      <div>
        <img src={Kasa} alt="Logo kasa" className="lmj-logo" />
      </div>
      <nav className="Header-nav">
        <Link className="header-accueil" to="/">
          Accueil
        </Link>
        <Link className="header-apropos" to="/apropos">
          A Propos
        </Link>
      </nav>
    </div>
  )
}

export default Header
