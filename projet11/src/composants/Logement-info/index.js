import '../../style/Logement-info/index.css'
import { useParams } from 'react-router-dom'
import Logements from '../../BDD/logment.json'
import StarP from '../../assets/starP.png'
import StarV from '../../assets/starV.png'
function Information() {
  const { id } = useParams()
  var { Logement } = {}
  var star = [StarP, StarV, StarV, StarV, StarV]
  for (let i = 0; i < Logements.length; i++) {
    if (Logements[i].id === id) {
      Logement = Logements[i]
    }
  }
  for (let i = 0; i < Logement.rating; i++) {
    console.log(star)
    star.splice(i, 1, StarP)
  }
  console.log(star[1])
  return (
    <div className="container-info">
      <div className="titre_nom">
        <div className="titre_location">
          <div className="titre-info color">{Logement.title}</div>
          <div className="location-info">{Logement.location}</div>
        </div>
        <div className="nom_img">
          <div className="nom-info">{Logement.host.name}</div>
          <img
            className="img-info"
            src={Logement.host.picture}
            alt="proprietaire"
          ></img>
        </div>
      </div>
      <div className="tag_name">
        <div className="tags">
          {Logement.tags.map((tag) => (
            <div className="tag">{tag}</div>
          ))}
        </div>
        <div>
          <img className="star" src={star[0]} alt="star"></img>
          <img className="star" src={star[1]} alt="star"></img>
          <img className="star" src={star[2]} alt="star"></img>
          <img className="star" src={star[3]} alt="star"></img>
          <img className="star" src={star[4]} alt="star"></img>
        </div>
      </div>
    </div>
  )
}

export default Information
