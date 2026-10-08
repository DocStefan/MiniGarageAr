// import React from 'react'
import "../styles/LandPag.css"
import LandBack from '../assets/LandBack.webp'
import rightarrow from '../assets/rightarrow.webp'
import { useNavigate } from "react-router"



function LandPag() {


 const navegar = useNavigate()

  return (

    <div className="MaindLand-Mobile">

       <img className="BackPic-Mobile" src={LandBack}></img>

       <div className="LandTextContainer">

         <span className="WelcomeText"><div style={{color:"#FFFFFF"}}>Bienvenido a</div>GarageMiniAr</span>
         
         <span className="SecondText">Tu proximo Hot Wheels te esta esperando</span>

         <button className="LandButton" type="button" onClick={() => {navegar("/catalogo")}}>VER CATALOGO<img className="LandButtonLogo" src={rightarrow}></img></button>

       </div>

    </div>

  )
}

export default LandPag