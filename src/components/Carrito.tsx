// import React from 'react'
import "../styles/Carrito.css"

import produEx from '../assets/produEx.webp'
import produExB from '../assets/produExB.png'
import produExC from '../assets/produExC.png'
import produExD from '../assets/produExD.png'

import LastBack from '../assets/LastBack.webp'
import cartRemove from '../assets/cartRemove.webp'
import plusProduct from '../assets/plusProduct.webp'
import minusProduct from '../assets/minusProduct.webp'

import { useNavigate } from "react-router"

import noCart from '../assets/noCart.webp'

import useResponsiveDetect from "../customHooks/responsiveDetect"


function Carrito() {

  const navegar = useNavigate()

  interface arrivalsData {

    id: number,
    status: string,
    img: string,
    name: string,
    line: string,
    price: number,

  }

  const lastArrivalsData: arrivalsData[] = [{ id: 1, status: "VOLVIO", img: produEx, name: "LP Works Lamborghini Huracan Coupe", line: "HW Mainline 2023", price: 19990.00 },
  { id: 2, status: "NUEVO", img: produExB, name: "'18 Chevrolet Camaro SS", line: "HW Torque 2025", price: 14990.00 },
  { id: 3, status: "NUEVO", img: produExC, name: "'96 Porsche Carrera", line: "HW Nightburnerz 2024", price: 22990.00 },
  { id: 4, status: "VOLVIO", img: produExD, name: "Ferrari SF90 Stradale", line: "HW Factory Fresh 2026", price: 24990.00 },
  { id: 5, status: "VOLVIO", img: produEx, name: "LP Works Lamborghini Huracan Coupe", line: "HW Mainline 2023", price: 19990.00 },
  { id: 6, status: "NUEVO", img: produExB, name: "'18 Chevrolet Camaro SS", line: "HW Torque 2025", price: 14990.00 },
  { id: 7, status: "NUEVO", img: produExC, name: "'96 Porsche Carrera", line: "HW Nightburnerz 2024", price: 22990.00 },
  { id: 8, status: "VOLVIO", img: produExD, name: "Ferrari SF90 Stradale", line: "HW Factory Fresh 2026", price: 24990.00 },
  { id: 9, status: "VOLVIO", img: produEx, name: "LP Works Lamborghini Huracan Coupe", line: "HW Mainline 2023", price: 19990.00 },
  { id: 10, status: "NUEVO", img: produExB, name: "'18 Chevrolet Camaro SS", line: "HW Torque 2025", price: 14990.00 },
  { id: 11, status: "NUEVO", img: produExC, name: "'96 Porsche Carrera", line: "HW Nightburnerz 2024", price: 22990.00 },
  { id: 12, status: "VOLVIO", img: produExD, name: "Ferrari SF90 Stradale", line: "HW Factory Fresh 2026", price: 24990.00 },
  ]

  const screen = useResponsiveDetect()

  return (

    <div className="CartMain">

      <div className="CarritoTittle">

        <div className="CarritoTittleSpan">CARRITO</div>

      </div>

      <div className="ProductosEnCarrito">

        {/* <div className="LoadingCartProductPostBox">

          <div className="LoadingCartImageContainer"><div className="LoadingCartImage"></div></div>

          <div className="LoadingCartProductText">

            <div className="LoadingCartProductName"></div>

            <div className="LoadingCartProductLine"></div>

            <div className="LoadingCartProductPrice"></div>

          </div>

          <div className="LoadingCartProductButtons">

            <div className="LoadingCartRemoveButton"></div>

            <div className="LoadingCartQuantityButton"></div>

          </div>

        </div> */}

        {lastArrivalsData.map((data) => {

          return (

            <div className="CartProductPostBox">

              <div className="CartImageContainer" style={{backgroundImage: `url("${LastBack}")`}}>
              
                <img className="CartImage" src={data.img}></img>

                <div className="PicDegradeCartPostLeft"></div>

              </div>

              <div className="CartProductText">

                 <span className="CartProductName">{data.name}</span>

                 <span className="CartProductLine">{data.line}</span>

                 <span className="CartProductPrice">{new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS", maximumFractionDigits: 2,}).format(data.price)}</span>

              </div>

              <div className="CartProductButtons">

                 <div className="CartRemoveButton">

                    <img src={cartRemove} className="CartRemoveButtonLogo"></img>

                 </div>

                 <div className="CartQuantityButton">

                  <div className="CartQuantityTopPseudoBorder" style={{top: "-2px"}}></div>
                  <div className="CartQuantityBottomPseudoBorder" style={{bottom: "-2px"}}></div>

                   <div className="CartMinusQuantity">

                     <img src={minusProduct} className="CartQuantityMinusAndPlusLogo" style={{width: "50%"}}></img>

                   </div>

                   <span className="CartQuantityNumber">5</span>

                   <div className="CartPlusQuantity">

                     <img src={plusProduct} className="CartQuantityMinusAndPlusLogo" style={{width: "70%"}}></img>
                  
                   </div>
                  
                 </div>
                
              </div>

            </div>

          )

        })}

      </div>

        {/* <div className="EmptyCart">

          <img className="EmptyCartLogo" src={noCart}></img>

          <span className="EmptyCartFirstText" style={{ color: "#FFFFFF"}}>CARRITO VACIO</span>

          <span className="EmptyCartSecondText" style={{ color: "#E60410", marginTop: "4px" }}>¡AGREGA EL PRIMERO!</span>

          <div className="EmptyCartButton" style={{ marginTop: "13px" }}>

            <button type="button" className="ButtonToCatalogueEmptyCart" onClick={() => { navegar("/catalogo") }}><div className="ButtonEmptyCartText">IR AL CATALOGO{screen === "PC" ? <div className="AnimBlockEmptyCart"></div> : ""}</div></button>

          </div>

        </div> */}

      <div className="CarritoResume">

        <div className="ResumeTextAndTotal">

          <span className="ResumeTextTittle">TOTAL:</span>

          <span className="ResumeTextPrice">{new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 2, }).format(29990.00)}</span>

        </div>

        <div className="ResumeButton">

          <button className="ConfirmButton" type="button">CONFIRMAR COMPRA{screen == "PC" ? <div className="AnimBlockConfirmButton"></div> : ""}</button>

        </div>

      </div>

    </div>

  )

}

export default Carrito
