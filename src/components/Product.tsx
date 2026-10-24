import { useState, useEffect } from "react"
import { useParams } from "react-router"
import "../styles/Product.css"

import produEx from '../assets/produEx.webp'
import produExB from '../assets/produExB.png'
import produExC from '../assets/produExC.png'
import produExD from '../assets/produExD.png'

import LastBack from '../assets/LastBack.webp'
import plusProduct from '../assets/plusProduct.webp'
import minusProduct from '../assets/minusProduct.webp'
import transport from '../assets/transport.webp'
import cart from '../assets/cart.webp'

function Product() {

 const { productId } = useParams()

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

 const [idManager, setIdManager] = useState<number>()
 const [productManager, setProductManager] = useState<arrivalsData>({id: 0, status: "", img: produExD, name: "", line: "", price: 0})

 useEffect(() => {

   setIdManager(Number(productId))

   const productFound = lastArrivalsData.find((data) => data.id === Number(productId))

   if(productFound) {

    setProductManager(productFound)

   }

 }, [])

  return (

    <div className="ProductPageMain">

      {/* <div className="LoadingProductPicContainer"></div>

      <div className="LoadingProductTextsContainer">

         <div className="LoadingProductTittle"></div>

         <div className="LoadingProductLine"></div>

         <div className="LoadingProductPrice"></div>

      </div>

      <div className="LoadingProductPanel">

        <div className="LoadingAddSection">

          <div className="LoadingAddSectionTittle"></div>

          <div className="LoadingAddSectionPanel"></div>

        </div>

        <div className="LoadingStockSection">

          <div className="LoadingStockLogo"></div>

          <div className="LoadingStockNumber"></div>

        </div>

      </div>

      <div className="LoadingProductButtonPanel"></div> */}

      <div className="ProductPicContainer" style={{backgroundImage: `url("${LastBack}")`}}>

        <img className="ProductPic" loading='eager' decoding='async' fetchPriority="high" src={productManager.img}></img>

        <div className="ProductFavIconCont"><span className="material-symbols-outlined ProductFavIcon">favorite</span></div>

      </div>

      <div className="ProductTextsContainer">

         <span className="ProductTittle">{productManager.name?.toUpperCase()}</span>

         <span className="ProductLine">{productManager.line}</span>

         <span className="ProductPrice">{new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS", maximumFractionDigits: 2,}).format(productManager.price)}</span>

      </div>

      <div className="ProductPanel">

        <div className="AddSection">

           <span className="AddSectionTittle">CANTIDAD</span>

           <div className="AddSectionPanel">

             <div className="PanelButtonMinus" style={{backgroundColor: "#373C3D", marginLeft: "-1px"}}>

               <img className="PanelButtonLogo" src={minusProduct}></img>

             </div>

             <span className="SelectedAddition">0</span>

             <div className="PanelButtonPlus" style={{backgroundColor: "#E60410", marginRight: "-1px"}}>

               <img className="PanelButtonLogo" style={{width: "70%"}} src={plusProduct}></img>

             </div>

           </div>

        </div>

        <div className="StockSection">

          <div className="StockLogo">

            <img className="StockPic" src={transport}></img>

          </div>

          <div className="StockNumber">

            <span className="StockText">EN STOCK: 99</span>

          </div>

        </div>

      </div>

      <div className="ProductButtonPanel">

        <div className="AddToCartStuff">

         <img className="AddToCartLogo" src={cart}></img>

         <span className="AddToCartButton">AGREGAR AL CARRITO</span>

        </div>

      </div>

    </div>

  )

}

export default Product