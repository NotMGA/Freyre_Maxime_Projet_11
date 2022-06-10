import { Link } from 'react-router-dom'
import '../../style/error/index.css'

function Error() {
  return (
    <div className="container font">
      <h1>404</h1>
      <h2>Oups!La page que vous demandez n'existe pas.</h2>
      <Link className="error_retour" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
