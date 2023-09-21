
import "./Footer.css"
import styled from "styled-components"


const Footer = ()=>{
  return(
    <>
   <footer>
    <div className="row">
      <div className="col">
        <h3 className="logo-heading">CineSphere</h3>
        <p>Visit our website.CineSphere is an exciting new website dedicated to providing comprehensive information about movies and series.</p>
      </div>
      <div className="col">
        <h3>Office
          <div className="underline"><span></span></div>
        </h3>
        <p>Lovely Professional University<br></br>Jalandhar</p>
        <p className="email-id">chi.chiragbhardwaj@gmail.com</p>
         <h4>+91-8543999604</h4>
      </div>
      <div className="col">
        <h3>Links
        <div className="underline"><span></span></div>
        </h3>
        <h4>Home</h4>
        <h4>About us</h4>
        <h4>Features</h4>
      </div>
      <div className="col">
        <h3>NewsLetter
        <div className="underline"><span></span></div>
        </h3>
        <form action="" className="form-footer">  
        <i class="fa-solid fa-envelope email">
        </i>
        <input type="email" placeholder="enter Email" ></input>
        <button type="submit"> <i class="fa-solid fa-arrow-right" style={{color:"white"}}></i></button>
        </form>
      </div>
     
    </div>
   
     <p className="copyright">
      CineSphere © 2023- All Right Reserved
    </p>
    
   </footer>
   </>
  )
}

export default Footer;