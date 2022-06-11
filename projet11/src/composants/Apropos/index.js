import Close from '../../assets/close.png'
import Open from '../../assets/open.png'
import Imgapropos from '../../assets/apropos.png'
import '../../style/apropos/index.css'
function Apropos() {
  function display(e) {
    const parent = e.target.parentElement
    console.log(e.target)
    const child = parent.getElementsByClassName('txt-apropo')[0]
    const childatt = child.getAttribute('class')
    if (childatt === 'off txt-apropo') {
      child.setAttribute('class', 'on txt-apropo')
      e.target.setAttribute('src', Open)
    } else {
      child.setAttribute('class', 'off txt-apropo')
      e.target.setAttribute('src', Close)
    }
  }
  return (
    <div>
      <img
        className="background-apropo"
        src={Imgapropos}
        alt="background"
      ></img>
      <div className="container-apropo">
        <div className="titre-apropos">Fiabilité</div>
        <img
          className="img-apropo"
          onClick={display}
          src={Close}
          alt="fermer"
        ></img>
        <div className="off txt-apropo">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </div>
      </div>
      <div className="container-apropo">
        <div className="titre-apropos">Respect</div>
        <img
          className="img-apropo"
          onClick={display}
          src={Close}
          alt="fermer"
        ></img>
        <div className="off txt-apropo">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </div>
      </div>
      <div className="container-apropo">
        <div className="titre-apropos">Service</div>
        <img
          className="img-apropo"
          onClick={display}
          src={Close}
          alt="fermer"
        ></img>
        <div className="off txt-apropo">
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </div>
      </div>
      <div className="container-apropo">
        <div className="titre-apropos">Sécurité</div>
        <img
          className="img-apropo"
          onClick={display}
          src={Close}
          alt="fermer"
        ></img>
        <div className="off txt-apropo">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </div>
      </div>
    </div>
  )
}
export default Apropos
