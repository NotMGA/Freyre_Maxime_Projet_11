import Footer from '../../composants/Footer'
import Galerie from '../../composants/Galerie'
import Header from '../../composants/header'
import Information from '../../composants/Logement-info'
import Logements from '../../BDD/logment.json'
import { useParams } from 'react-router-dom'
import Equipement from '../../composants/Logment_equip'
function PageLogement() {
  const { id } = useParams()
  var { Logement } = {}
  for (let i = 0; i < Logements.length; i++) {
    if (Logements[i].id === id) {
      Logement = Logements[i]
    }
  }
  return (
    <div>
      <Header />
      <Galerie />
      <Information />
      <div className="container-equip-desc">
        <Equipement titre="Description" description={Logement.description} />
        <Equipement
          titre="Equipement"
          description={
            <ul>
              {Logement.equipments.map((equipment) => (
                //modifier la key
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
      <Footer />
    </div>
  )
}
export default PageLogement
