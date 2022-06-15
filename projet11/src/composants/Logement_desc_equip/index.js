import Logements from '../../BDD/logment.json'
import { useParams } from 'react-router-dom'
import Close from '../../assets/close.png'
import Open from '../../assets/open.png'
import '../../style/Logement_equip_desc/index.css'
function Equipement_description() {
  const { id } = useParams()
  var { Logement } = {}
  for (let i = 0; i < Logements.length; i++) {
    if (Logements[i].id === id) {
      Logement = Logements[i]
    }
  }
  function display(e) {
    const parent = e.target.parentElement
    const child = parent.getElementsByClassName('txt-descri')[0]
    const childatt = child.getAttribute('class')
    if (childatt === 'off txt-descri') {
      child.setAttribute('class', 'on txt-descri')
      e.target.setAttribute('src', Open)
    } else {
      child.setAttribute('class', 'off txt-descri')
      e.target.setAttribute('src', Close)
    }
  }
  return (
    <div className="container-equip-desc">
      <div className="container-descri">
        <div className="titre-descri">Description</div>
        <img
          className="img-descri"
          onClick={display}
          src={Close}
          alt="fermer"
        ></img>
        <div className="off txt-descri">{Logement.description}</div>
      </div>
      <div className="container-descri">
        <div className="titre-descri">Equipment</div>
        <img
          className="img-descri"
          onClick={display}
          src={Close}
          alt="fermer"
        ></img>
        <div className="off txt-descri">
          <ul>
            {Logement.equipments.map((equipment) => (
              //modifier la key
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Equipement_description
