import { useState, useEffect } from "react"
import { useParams } from "react-router"
import "../styles/Product.css"

import produEx from '../assets/produEx.webp'
import produExB from '../assets/produExB.png'
import produExC from '../assets/produExC.png'
import produExD from '../assets/produExD.png'

import LastBack from '../assets/LastBack.webp'



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
 const [productManager, setProductManager] = useState<arrivalsData>({})

 useEffect(() => {

   setIdManager(Number(productId))

   const productFound = lastArrivalsData.find((data) => data.id === Number(productId))

   if(productFound) {

    setProductManager(productFound)

   }

 }, [])

  return (

    <div className="ProductPageMain">

      <div className="ProductPicContainer" style={{backgroundImage: `url("${LastBack}")`}}>

      <img className="ProductPic" loading='eager' decoding='async' fetchPriority="high" src={productManager.img}></img>

      </div>

      <div className="ProductTextsContainer">

         <span className="ProductTittle">{productManager.name?.toUpperCase()}</span>

         <span className="ProductLine">{productManager.line}</span>

         <span className="ProductPrice">{new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS", maximumFractionDigits: 2,}).format(productManager.price)}</span>

      </div>

    </div>

  )

}

export default Product