import { Link } from 'react-router-dom'
import Kasa from '../../assets/Kasa.PNG'

function Header() {
  const url = window.location.href
  const page = url.split('/')[3]
  var underline_app = 'underline-off'
  var underline_acc = 'underline-off'
  if (page === '') {
    underline_app = 'underline-off'
    underline_acc = 'underline-on'
  }
  if (page === 'apropos') {
    underline_app = 'underline-on'
    underline_acc = 'underline-off'
  }
  return (
    <div className="header-global">
      <div>
        <img src={Kasa} alt="Logo kasa" className="lmj-logo" />
      </div>
      <nav className="Header-nav">
        <Link className={underline_acc + ' header-accueil'} to="/">
          Accueil
        </Link>
        <Link className={underline_app + ' header-apropos'} to="/apropos">
          A Propos
        </Link>
      </nav>
    </div>
  )
}

export default Header
