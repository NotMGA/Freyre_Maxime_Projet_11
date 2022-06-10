import { useParams } from 'react-router-dom'
import Logements from '../../BDD/logment.json'
import vectorL from '../../assets/VectorL.png'
import vectorR from '../../assets/VectorR.png'
import '../../style/Galerie/index.css'

function Galerie() {
  const { id } = useParams()
  var { Logement } = {}
  for (let i = 0; i < Logements.length; i++) {
    if (Logements[i].id === id) {
      Logement = Logements[i]
    }
  }
  return (
    <div className="container-galerie">
      <img
        className="img-galerie"
        src={Logement.pictures[1]}
        alt="logment numero 1"
      ></img>
      <img className="img-vectorL" src={vectorL} alt="fleche gauche"></img>
      <img className="img-vectorR" src={vectorR} alt="fleche droite"></img>
    </div>
  )
}
export default Galerie
