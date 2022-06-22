import Close from '../../assets/close.png'
import Open from '../../assets/open.png'
import '../../style/apropos/index.css'
function Apropos(propos) {
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
    <div className="container-apropo">
      <div className="titre-apropos">{propos.titre}</div>
      <img
        className="img-apropo"
        onClick={display}
        src={Close}
        alt="fermer"
      ></img>
      <div className="off txt-apropo">{propos.description}</div>
    </div>
  )
}
export default Apropos
