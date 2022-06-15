import Footer from '../../composants/Footer'
import Galerie from '../../composants/Galerie'
import Header from '../../composants/header'
import Information from '../../composants/Logement-info'
import Equipementdescription from '../../composants/Logement_desc_equip'
function PageLogement() {
  return (
    <div>
      <Header />
      <Galerie />
      <Information />
      <Equipementdescription />
      <Footer />
    </div>
  )
}
export default PageLogement
