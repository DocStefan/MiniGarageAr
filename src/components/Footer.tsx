// import React from 'react'
import "../styles/Footer.css"
import LogoMiniGarageAr from '../assets/LogoMiniGarageAr.webp'
import FooterBack from '../assets/FooterBack.webp'



function Footer() {

  return (

    <div className="FooterMain-Mobile" style={{backgroundImage: `url("${FooterBack}")`}}>
      
       <img src={LogoMiniGarageAr} className="FooterLogo"></img>

       <span className="FooterText">© 2026 GarageMiniAr<br></br>Todos los derechos reservados.<div className="TextTopBoder"></div></span>

    </div>

  )
}

export default Footer