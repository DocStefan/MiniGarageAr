// import React from 'react'
import "../styles/Footer.css"
import LogoMiniGarageAr from '../assets/LogoMiniGarageAr.webp'
import FooterBack from '../assets/FooterBack.webp'
import { useScroll } from "../customHooks/useScroll"
import useResponsiveDetect from "../customHooks/responsiveDetect"



function Footer() {

  const scrollTo = useScroll()

  const screen = useResponsiveDetect()

  return (

    <div className="FooterMain-Mobile" id="Footer" onClick={() => {if(screen === "PC") {scrollTo("Footer")}}} style={{backgroundImage: `url("${FooterBack}")`}}>
      
       <img src={LogoMiniGarageAr} className="FooterLogo"></img>

       <span className="FooterText">© 2026 GarageMiniAr<br></br>Todos los derechos reservados.<div className="TextTopBoder"></div></span>

    </div>

  )
}

export default Footer