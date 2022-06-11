import { useParams } from 'react-router-dom'
import Logements from '../../BDD/logment.json'
import vectorL from '../../assets/VectorL.png'
import vectorR from '../../assets/VectorR.png'
import '../../style/Galerie/index.css'

function Galerie() {
  const { id } = useParams()
  var { Logement } = {}
  var nbimg = 0
  var display = 'displayT'

  for (let i = 0; i < Logements.length; i++) {
    if (Logements[i].id === id) {
      Logement = Logements[i]
    }
  }
  if (Logement.pictures.length === 1) {
    display = 'displayN'
  }
  function suivant() {
    var x = document.getElementsByClassName('img-galerie').item(0)
    var z = document.getElementsByClassName('nmb-img').item(0)
    if (nbimg < Logement.pictures.length - 1) {
      nbimg = nbimg + 1
    } else {
      nbimg = 0
    }
    x.setAttribute('src', Logement.pictures[nbimg])
    z.innerHTML = nbimg + 1 + '/' + Logement.pictures.length
  }
  function precedent() {
    var x = document.getElementsByClassName('img-galerie').item(0)
    var z = document.getElementsByClassName('nmb-img').item(0)
    if (nbimg > 0) {
      nbimg = nbimg - 1
    } else {
      nbimg = Logement.pictures.length - 1
    }
    x.setAttribute('src', Logement.pictures[nbimg])
    z.innerHTML = nbimg + 1 + '/' + Logement.pictures.length
  }
  return (
    <div className="container-galerie">
      <img
        className="img-galerie"
        src={Logement.pictures[0]}
        alt="logment "
      ></img>
      <img
        className={'img-vectorL ' + display}
        src={vectorL}
        alt="fleche gauche"
        onClick={precedent}
      ></img>
      <img
        className={'img-vectorR ' + display}
        src={vectorR}
        alt="fleche droite"
        onClick={suivant}
      ></img>
      <div className="nmb-img">1/{Logement.pictures.length}</div>
    </div>
  )
}
export default Galerie
