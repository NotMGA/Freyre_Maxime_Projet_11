import img_home from '../../assets/home-img.png'
import '../../style/img-home/index.css'
function bandeau_home() {
  return (
    <div className="home-background">
      <img
        className="img_background"
        src={img_home}
        alt="fond sur la mer"
      ></img>
      <div className="txt-background font">Chez vous, partout et ailleurs</div>
    </div>
  )
}

export default bandeau_home
