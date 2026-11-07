// import React from 'react'
import "../styles/Favoritos.css"
import noFavorites from '../assets/noFavorites.webp'

import produEx from '../assets/produEx.webp'
import produExB from '../assets/produExB.png'
import produExC from '../assets/produExC.png'
import produExD from '../assets/produExD.png'

import LastBack from '../assets/LastBack.webp'

import { useNavigate } from "react-router"

import useResponsiveDetect from "../customHooks/responsiveDetect"


function Favoritos() {

     const navegar = useNavigate()

      const screen = useResponsiveDetect()



    interface arrivalsData {

      id: number,
      status: string,
      img: string,
      name: string,
      line: string,
      price: number,

    }

    const lastArrivalsData: arrivalsData[] =  [{id: 1, status: "VOLVIO", img: produEx, name: "LP Works Lamborghini Huracan Coupe", line: "HW Mainline 2023", price: 19990.00 },
      {id: 2, status: "NUEVO", img: produExB, name: "'18 Chevrolet Camaro SS", line: "HW Torque 2025", price: 14990.00},
      {id: 3, status: "NUEVO", img: produExC, name: "'96 Porsche Carrera", line: "HW Nightburnerz 2024", price: 22990.00},
      {id: 4, status: "VOLVIO", img: produExD, name: "Ferrari SF90 Stradale", line: "HW Factory Fresh 2026", price: 24990.00},
      {id: 5, status: "VOLVIO", img: produEx, name: "LP Works Lamborghini Huracan Coupe", line: "HW Mainline 2023", price: 19990.00 },
      {id: 6, status: "NUEVO", img: produExB, name: "'18 Chevrolet Camaro SS", line: "HW Torque 2025", price: 14990.00},
      {id: 7, status: "NUEVO", img: produExC, name: "'96 Porsche Carrera", line: "HW Nightburnerz 2024", price: 22990.00},
      {id: 8, status: "VOLVIO", img: produExD, name: "Ferrari SF90 Stradale", line: "HW Factory Fresh 2026", price: 24990.00},
      {id: 9, status: "VOLVIO", img: produEx, name: "LP Works Lamborghini Huracan Coupe", line: "HW Mainline 2023", price: 19990.00 },
      {id: 10, status: "NUEVO", img: produExB, name: "'18 Chevrolet Camaro SS", line: "HW Torque 2025", price: 14990.00},
      {id: 11, status: "NUEVO", img: produExC, name: "'96 Porsche Carrera", line: "HW Nightburnerz 2024", price: 22990.00},
      {id: 12, status: "VOLVIO", img: produExD, name: "Ferrari SF90 Stradale", line: "HW Factory Fresh 2026", price: 24990.00},
    ]

  return (

    <div className="MainFavorites">
        
        <div className="FavoritesTittle">

          <span className="FavoritesTittleSpan">FAVORITOS</span>

          <div className="FavoritesContainer"></div>

        </div>

        {/* <div className="NoFavoritesContainer">

           <img className="NoFavoritesLogo" src={noFavorites}></img>

           <span className="NoFavoritesFirstText" style={{color: "#FFFFFF", marginTop: "-7.5px"}}>NO HAY FAVORITOS</span>

           <span className="NoFavoritesSecondText" style={{color: "#E60410", marginTop: "4px"}}>¡AGREGA EL PRIMERO!</span>

            <div className="FavoriteButton" style={{marginTop: "13px"}}>

               <button type="button" className="ButtonToCatalogueFavorite" onClick={() => {navegar("/catalogo")}}><div className="ButtonArrivalsText">IR AL CATALOGO{screen === "PC" ? <div className="AnimBlock"></div> : ""}</div></button>

            </div>

        </div> */}

         <div className="FavoritesPostContainer">

              {/*<div className="FavoriteLoadingShowcasePostBox">

                <div className="FavoriteLoadingPic"></div>

                <div className="FavoriteLoadingName"></div>

                <div className="FavoriteLoadingBrand"></div>

                <div className="FavoriteLoadingPrice"></div>

              </div> */}

{lastArrivalsData.map((data) => {

                  return (

                <div className="FavoritePostBox" onClick={() => {navegar(`/catalogo/${data.id}`)}} style={{backgroundImage: `url("${LastBack}")`}}>

                    <div className="FavoriteIconCont"><span className="material-symbols-outlined FavoriteIcon">favorite</span></div>

                    <div className="FavoriteDataImage">

                      <img className="FavoriteDataImageContainer" src={data.img}></img>

                    </div>

                    <div className="FavoriteDataText">

                      <span className="FavoriteTextNAME">{data.name}</span>

                      <span className="FavoriteTextBRAND">{data.line}</span>

                      <span className="FavoriteTextPRICE">{new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS", maximumFractionDigits: 2,}).format(data.price)}</span>

                    </div>

                </div> 
                
              )
               })}

        </div>
      
    </div>

  )

}

export default Favoritos
