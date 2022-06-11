import '../../style/Footer/index.css'
import KasaN from '../../assets/KasaN.PNG'
function Footer() {
  return (
    <div className="container-footer">
      <img className="img-footer" src={KasaN} alt="icon site"></img>
      <div className="txt-footer">© 2020 Kasa. All rights reserved</div>
    </div>
  )
}
export default Footer
