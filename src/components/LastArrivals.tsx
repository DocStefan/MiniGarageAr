// import React from 'react'
import "../styles/LastArrivals.css"
// import banner from '../assets/banner.webp'
import LastBack from '../assets/LastBack.webp'
import produEx from '../assets/produEx.webp'
import produExB from '../assets/produExB.png'
import produExC from '../assets/produExC.png'
import produExD from '../assets/produExD.png'
import useResponsiveDetect from "../customHooks/responsiveDetect"
import { useScroll } from "../customHooks/useScroll"
import { useNavigate } from "react-router"

function LastArrivals() {

    const navegar = useNavigate()

    const screen = useResponsiveDetect()

    const scrollTo = useScroll()


    return (

        <div className="LastArrivals-Mobile" id="Arrivals" onClick={() => { if(screen === "PC") {scrollTo("Arrivals")}}}>

          <div className="ArrivalsTittle"><span className="FirstSpanTittle">ULTIMOS</span><span className="SecondSpanTittle">INGRESOS</span></div>

            <div className="ArrivalShowcase">

              {/* <div className="LoadingShowcasePostBox">

                <div className="LoadingPic"></div>

                <div className="LoadingName"></div>

                <div className="LoadingBrand"></div>

                <div className="LoadingPrice"></div>

              </div>

              
              <div className="LoadingShowcasePostBox">

                <div className="LoadingPic"></div>

                <div className="LoadingName"></div>

                <div className="LoadingBrand"></div>

                <div className="LoadingPrice"></div>

              </div>

              
              <div className="LoadingShowcasePostBox">

                <div className="LoadingPic"></div>

                <div className="LoadingName"></div>

                <div className="LoadingBrand"></div>

                <div className="LoadingPrice"></div>

              </div>

              
              <div className="LoadingShowcasePostBox">

                <div className="LoadingPic"></div>

                <div className="LoadingName"></div>

                <div className="LoadingBrand"></div>

                <div className="LoadingPrice"></div>

              </div> */}

                <div className="ShowcasePostBox" style={{backgroundImage: `url("${LastBack}")`}}>

                    <div className="FavIconCont"><span className="material-symbols-outlined FavIcon">favorite</span></div>

                    <div className="DataStatus"><span className="Status">VOLVIO</span></div>

                    <div className="DataImage">

                      <img className="DataImageContainer" src={produEx}></img>

                    </div>

                    <div className="DataText">

                      <span className="TextNAME">LP Works Lamborghini Huracan Coupe</span>

                      <span className="TextBRAND">HW Mainline 2023</span>

                      <span className="TextPRICE">$ 19.990,00</span>

                    </div>

                </div>

                <div className="ShowcasePostBox" style={{backgroundImage: `url("${LastBack}")`}}>

                    <div className="FavIconCont"><span className="material-symbols-outlined FavIcon">favorite</span></div>

                    <div className="DataStatus"><span className="Status">NUEVO</span></div>

                    <div className="DataImage">

                      <img className="DataImageContainer" src={produExB}></img>

                    </div>

                    <div className="DataText">

                      <span className="TextNAME">'18 Chevrolet Camaro SS</span>

                      <span className="TextBRAND">HW Torque 2025</span>

                      <span className="TextPRICE">$ 14.990,00</span>

                    </div>

                </div>

                
                <div className="ShowcasePostBox" style={{backgroundImage: `url("${LastBack}")`}}>

                    <div className="FavIconCont"><span className="material-symbols-outlined FavIcon">favorite</span></div>

                    <div className="DataStatus"><span className="Status">NUEVO</span></div>

                    <div className="DataImage">

                      <img className="DataImageContainer" src={produExC}></img>

                    </div>

                    <div className="DataText">

                      <span className="TextNAME">'96 Porsche Carrera</span>

                      <span className="TextBRAND">HW Nightburnerz 2024</span>

                      <span className="TextPRICE">$ 22.990,00</span>

                    </div>

                </div>

                
                <div className="ShowcasePostBox" style={{backgroundImage: `url("${LastBack}")`}}>

                    <div className="FavIconCont"><span className="material-symbols-outlined FavIcon">favorite</span></div>

                    <div className="DataStatus"><span className="Status">VOLVIO</span></div>

                    <div className="DataImage">

                      <img className="DataImageContainer" src={produExD}></img>

                    </div>

                    <div className="DataText">

                      <span className="TextNAME">Ferrari SF90 Stradale</span>

                      <span className="TextBRAND">HW Factory Fresh 2026</span>

                      <span className="TextPRICE">$ 24.990,00</span>

                    </div>

                </div>

            </div>

            <div className="LastArrivalButton">

               <button type="button" className="ButtonToCatalogueArrival" onClick={() => {navegar("/catalogo")}}><div className="ButtonArrivalsText">VER CATALOGO{screen === "PC" ? <div className="AnimBlock"></div> : ""}</div></button>

            </div>

        </div>

    )
}

export default LastArrivals