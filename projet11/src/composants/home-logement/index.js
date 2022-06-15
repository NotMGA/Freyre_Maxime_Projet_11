import { Link } from 'react-router-dom'
import Logements from '../../BDD/logment.json'
import '../../style/home-logment/index.css'
function logementhome() {
  return (
    <div className="container-logments">
      {Logements.map((Logement) => (
        <div key={Logement.id} className="logment">
          <Link to={'/logement/' + Logement.id}>
            <img
              className="img-logement"
              src={Logement.cover}
              alt={Logement.description}
            />
          </Link>
          <div className="title-logement">{Logement.title}</div>
        </div>
      ))}
    </div>
  )
}
export default logementhome
