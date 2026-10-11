// import React from 'react'
import "../styles/LandPag.css"
import LandBack from '../assets/LandBack.webp'
import { useNavigate } from "react-router"
import fondoLandPc from '../assets/fondoLandPc.webp'
import useResponsiveDetect from "../customHooks/responsiveDetect"




function LandPag() {

 const navegar = useNavigate()

 const screen = useResponsiveDetect()

  return (

    <div className="MaindLand-Mobile">

       <img className="BackPic-Mobile" src={screen === "PC" ? fondoLandPc : LandBack}></img>

       <div className="LandTextContainer">

         <span className="WelcomeText"><div style={{color:"#FFFFFF"}}>Bienvenido a</div>GarageMiniAr</span>
         
         <span className="SecondText">Tu proximo Hot Wheels te esta esperando</span>

         <button className="LandButton" type="button" onClick={() => {navegar("/catalogo")}}>VER CATALOGO<div className="AnimBlock"></div></button>

       </div>

    </div>

  )
}

export default LandPag