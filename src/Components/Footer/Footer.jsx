
import "./Footer.css"
const Footer = ()=>{
  return(
   <div className="Footer-parent">
    <div className="right-section">
    <div className="Footer-child">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      </div>
      <div className="newsletter">
      <input type="text" id = "new_letter" placeholder="Email"/>
      <button>Subscribe</button>
      </div>
    </div>
   </div>
  )
}

export default Footer;