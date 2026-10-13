// import React from 'react'
import "../styles/Catalogue.css"
import useResponsiveDetect from "../customHooks/responsiveDetect"
import { useScroll } from "../customHooks/useScroll"
import { useNavigate } from "react-router"
import search from '../assets/search.webp'
import filter from '../assets/filter.webp'
import down from '../assets/down.webp'
import trash from '../assets/trash.webp'
import close from '../assets/close.webp'
import produEx from '../assets/produEx.webp'
import produExB from '../assets/produExB.png'
import produExC from '../assets/produExC.png'
import produExD from '../assets/produExD.png'
import LastBack from '../assets/LastBack.webp'
import { useState, useRef, useEffect } from "react"



function Catalogue() {

 const screen = useResponsiveDetect()
 const scrollTo = useScroll()
 const navegar = useNavigate()

 const [FilterActive, setFilterActive] = useState<boolean>(false)

 const FilterMenu = useRef<HTMLDivElement>(null)
 const FilterButton = useRef<HTMLDivElement>(null);

     interface arrivalsData {

      status: string,
      img: string,
      name: string,
      line: string,
      price: number,

    }

    const lastArrivalsData: arrivalsData[] =  [{status: "VOLVIO", img: produEx, name: "LP Works Lamborghini Huracan Coupe", line: "HW Mainline 2023", price: 19990.00 },
      {status: "NUEVO", img: produExB, name: "'18 Chevrolet Camaro SS", line: "HW Torque 2025", price: 14990.00},
      {status: "NUEVO", img: produExC, name: "'96 Porsche Carrera", line: "HW Nightburnerz 2024", price: 22990.00},
      {status: "VOLVIO", img: produExD, name: "Ferrari SF90 Stradale", line: "HW Factory Fresh 2026", price: 24990.00},
      {status: "VOLVIO", img: produEx, name: "LP Works Lamborghini Huracan Coupe", line: "HW Mainline 2023", price: 19990.00 },
      {status: "NUEVO", img: produExB, name: "'18 Chevrolet Camaro SS", line: "HW Torque 2025", price: 14990.00},
      {status: "NUEVO", img: produExC, name: "'96 Porsche Carrera", line: "HW Nightburnerz 2024", price: 22990.00},
      {status: "VOLVIO", img: produExD, name: "Ferrari SF90 Stradale", line: "HW Factory Fresh 2026", price: 24990.00},
      {status: "VOLVIO", img: produEx, name: "LP Works Lamborghini Huracan Coupe", line: "HW Mainline 2023", price: 19990.00 },
      {status: "NUEVO", img: produExB, name: "'18 Chevrolet Camaro SS", line: "HW Torque 2025", price: 14990.00},
      {status: "NUEVO", img: produExC, name: "'96 Porsche Carrera", line: "HW Nightburnerz 2024", price: 22990.00},
      {status: "VOLVIO", img: produExD, name: "Ferrari SF90 Stradale", line: "HW Factory Fresh 2026", price: 24990.00},
    ]


   useEffect(() => {
 
     const handleOutside = (event: PointerEvent) => {

          const target = event.target as Node;
 
       if (FilterMenu.current && !FilterMenu.current.contains(event.target as Node) && !FilterButton.current?.contains(target)) {
 
         setFilterActive(false)
 
       }
 
     }
 
     document.addEventListener("pointerdown", handleOutside)
 
     return () => {
 
       document.removeEventListener("pointerdown", handleOutside)
     }
 
   }, []);


  return (
    
    <div className="MainCatalogue">
        
       <div className="CatalogueTittle">CATALOGO</div>

       <div className="CatalogueSearchAndFilter">

         <div className="SearchBar">

            <img src={search} className="SearchInputLogo"></img>

            <input type="search" className="SearchInput" placeholder="Buscar"></input>

         </div>

         <div className="OpenFiltersButton"   ref={FilterButton} onClick={() => {setFilterActive(prev => !prev)}}>

           <button className="FilterButton"><img src={filter} className="FilterButtonLogo"></img><span className="ButtonFilterText">FILTROS</span><img src={down} className="FilterButtonLogo" style={{transform: FilterActive ? "rotateX(180deg)" : ""}}></img></button>

         </div>

       </div>

{FilterActive ?       <div className="FiltersMenu" ref={FilterMenu}>

         <div className="FilterOption">

            <div className="FilterOptionTittle">LINEA / CATEGORIA</div>

            <div className="ScrollableOptionContainer">

            <span className="FilterMenuUption"><input type="checkbox" className="SquareInput"></input>Linea</span>
            <span className="FilterMenuUption"><input type="checkbox" className="SquareInput"></input>Linea</span>
            <span className="FilterMenuUption"><input type="checkbox" className="SquareInput"></input>Linea</span>
            <span className="FilterMenuUption"><input type="checkbox" className="SquareInput"></input>Linea</span>
            <span className="FilterMenuUption"><input type="checkbox" className="SquareInput"></input>Linea</span>
            <span className="FilterMenuUption"><input type="checkbox" className="SquareInput"></input>Linea</span>
            <span className="FilterMenuUption"><input type="checkbox" className="SquareInput"></input>Linea</span>
            <span className="FilterMenuUption"><input type="checkbox" className="SquareInput"></input>Linea</span>
            <span className="FilterMenuUption"><input type="checkbox" className="SquareInput"></input>Linea</span>
            <span className="FilterMenuUption"><input type="checkbox" className="SquareInput"></input>Linea</span>
            <span className="FilterMenuUption"><input type="checkbox" className="SquareInput"></input>Linea</span>

            </div>

         </div>

         <div className="FilterOption" style={{borderLeft: "2px solid #555555"}}>

            <div className="FilterOptionTittle">MARCA</div>

            <div className="ScrollableOptionContainer">

            <span className="FilterMenuUption"><input type="checkbox" className="SquareInput"></input>Marca</span>
            <span className="FilterMenuUption"><input type="checkbox" className="SquareInput"></input>Marca</span>
            <span className="FilterMenuUption"><input type="checkbox" className="SquareInput"></input>Marca</span>
            <span className="FilterMenuUption"><input type="checkbox" className="SquareInput"></input>Marca</span>
            <span className="FilterMenuUption"><input type="checkbox" className="SquareInput"></input>Marca</span>
            <span className="FilterMenuUption"><input type="checkbox" className="SquareInput"></input>Marca</span>
            <span className="FilterMenuUption"><input type="checkbox" className="SquareInput"></input>Marca</span>
            <span className="FilterMenuUption"><input type="checkbox" className="SquareInput"></input>Marca</span>
            <span className="FilterMenuUption"><input type="checkbox" className="SquareInput"></input>Marca</span>
            <span className="FilterMenuUption"><input type="checkbox" className="SquareInput"></input>Marca</span>
            <span className="FilterMenuUption"><input type="checkbox" className="SquareInput"></input>Marca</span>
            <span className="FilterMenuUption"><input type="checkbox" className="SquareInput"></input>Marca</span>
            <span className="FilterMenuUption"><input type="checkbox" className="SquareInput"></input>Marca</span>
            <span className="FilterMenuUption"><input type="checkbox" className="SquareInput"></input>Marca</span>

            </div>

         </div>

         <div className="OpenedFilterButtons">

              <button type="button" className="SelectedFilters" onClick={() => {setFilterActive(false)}}>APLICAR FILTROS</button>

         </div>
        
       </div> : ""}

       <div className="SelectedFilterSection">

         <div className="ActiveFiltersPanel">

           <button type="button" className="DeleteFiltersQuickButton">Filtro<img className="DeleteFiltersQuickButtonLogo" src={close}></img></button>
           <button type="button" className="DeleteFiltersQuickButton">Filtro<img className="DeleteFiltersQuickButtonLogo" src={close}></img></button>
           <button type="button" className="DeleteFiltersQuickButton">Filtro<img className="DeleteFiltersQuickButtonLogo" src={close}></img></button>
           <button type="button" className="DeleteFiltersQuickButton">Filtro<img className="DeleteFiltersQuickButtonLogo" src={close}></img></button>

         </div>

         <div className="CleanFiltersAndNuM">

          <button type="button" className="CleanFiltersQuickButton"><img className="CleanFiltersQuickButtonLogo" src={trash}></img>Limpiar filtro</button>

          <span className="ResultsCount">12 Resultados</span>

         </div>

       </div>

       <div className="ResultsSection">

              {/* <div className="CatalogueLoadingShowcasePostBox">

                <div className="CatalogueLoadingPic"></div>

                <div className="CatalogueLoadingName"></div>

                <div className="CatalogueLoadingBrand"></div>

                <div className="CatalogueLoadingPrice"></div>

              </div> */}

               {lastArrivalsData.map((data) => {

                  return (

                <div className="CatalogueShowcasePostBox" style={{backgroundImage: `url("${LastBack}")`}}>

                    <div className="CatalogueFavIconCont"><span className="material-symbols-outlined CatalogueFavIcon">favorite</span></div>

                    <div className="CatalogueDataImage">

                      <img className="CatalogueDataImageContainer" src={data.img}></img>

                    </div>

                    <div className="CatalogueDataText">

                      <span className="CatalogueTextNAME">{data.name}</span>

                      <span className="CatalogueTextBRAND">{data.line}</span>

                      <span className="CatalogueTextPRICE">{new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS", maximumFractionDigits: 2,}).format(data.price)}</span>

                    </div>

                </div> 
                
              )
               })}

       </div>

       <div className="CataloguePaginator">

          <div className="CatalogueMaxLongitude">

            <div className="PageManager FirstSign"><img src={down} className="FirstSignPic"></img></div>

                        <div className="PageManager PageManagerSelectedOption">1</div>
                        <div className="PageManager">2</div>
                        <div className="PageManager">3</div>

            <div className="PageManager LastSign"><img src={down} className="LastSignPic" ></img></div>

          </div>

       </div>

    </div>

  )

}

export default Catalogue