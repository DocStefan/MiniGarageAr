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
// import { useState } from "react"

function LastArrivals() {

    const navegar = useNavigate()

    const screen = useResponsiveDetect()

    const scrollTo = useScroll()

    interface arrivalsData {

      id: number,
      status: string,
      img: string,
      name: string,
      line: string,
      price: number,

    }

    // const [lastArrivalsData, setLastArrivalsData] = useState<arrivalsData[]>([{status: "VOLVIO", img: produEx, name: "LP Works Lamborghini Huracan Coupe", line: "HW Mainline 2023", price: 19990.00 },
    //   {status: "NUEVO", img: produExB, name: "'18 Chevrolet Camaro SS", line: "HW Torque 2025", price: 14990.00},
    //   {status: "NUEVO", img: produExC, name: "'96 Porsche Carrera", line: "HW Nightburnerz 2024", price: 22990.00},
    //   {status: "VOLVIO", img: produExD, name: "Ferrari SF90 Stradale", line: "HW Factory Fresh 2026", price: 24990.00},
    // ])

    const lastArrivalsData: arrivalsData[] =  [{id: 1, status: "VOLVIO", img: produEx, name: "LP Works Lamborghini Huracan Coupe", line: "HW Mainline 2023", price: 19990.00 },
      {id: 2, status: "NUEVO", img: produExB, name: "'18 Chevrolet Camaro SS", line: "HW Torque 2025", price: 14990.00},
      {id: 3, status: "NUEVO", img: produExC, name: "'96 Porsche Carrera", line: "HW Nightburnerz 2024", price: 22990.00},
      {id: 4, status: "VOLVIO", img: produExD, name: "Ferrari SF90 Stradale", line: "HW Factory Fresh 2026", price: 24990.00},
    ]

    return (

        <div className="LastArrivals-Mobile" id="Arrivals" onClick={() => { if(screen === "PC") {scrollTo("Arrivals")}}}>

          <div className="ArrivalsTittle"><span className="FirstSpanTittle">ULTIMOS</span><span className="SecondSpanTittle">INGRESOS</span></div>

            <div className="ArrivalShowcase">

              {/* <div className="LoadingShowcasePostBox">

                <div className="LoadingPic"></div>

                <div className="LoadingName"></div>

                <div className="LoadingBrand"></div>

                <div className="LoadingPrice"></div>

              </div> */}

               {lastArrivalsData.map((data) => {

                  return (

                <div className="ShowcasePostBox" onClick={() => {navegar(`/catalogo/${data.id}`)}} style={{backgroundImage: `url("${LastBack}")`}}>

                    <div className="FavIconCont"><span className="material-symbols-outlined FavIcon">favorite</span></div>

                    <div className="DataStatus"><span className="Status">{data.status}</span></div>

                    <div className="DataImage">

                      <img className="DataImageContainer" src={data.img}></img>

                    </div>

                    <div className="DataText">

                      <span className="TextNAME">{data.name}</span>

                      <span className="TextBRAND">{data.line}</span>

                      <span className="TextPRICE">{new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS", maximumFractionDigits: 2,}).format(data.price)}</span>

                    </div>

                </div> )
               })}

            </div>

            <div className="LastArrivalButton">

               <button type="button" className="ButtonToCatalogueArrival" onClick={() => {navegar("/catalogo")}}><div className="ButtonArrivalsText">VER CATALOGO{screen === "PC" ? <div className="AnimBlock"></div> : ""}</div></button>

            </div>

        </div>

    )
}

export default LastArrivals