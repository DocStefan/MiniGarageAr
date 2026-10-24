// import React from 'react'
import { useState, useRef, useEffect} from "react"
import "../styles/NavBarStyle.css"
import LogoMiniGarageAr from '../assets/LogoMiniGarageAr.webp'
import home from '../assets/home.webp'
import info from '../assets/info.webp'
import instagram from '../assets/instagram.webp'
import transport from '../assets/transport.webp'
import { useLocation, useNavigate } from "react-router"



function NavBar() {

  interface navOptions {

    logo: string,
    text: string,
    active?: boolean,
    route?: string,
    link?: string 

  }

  let [OptionsManager, setOptionsManager] = useState<navOptions[]>([{ logo: home, text: "INICIO", active: true, route: "/" }, { logo: transport, text: "CATALOGO", active: false, route: "/catalogo" }, { logo: info, text: "INFORMACION", active: false, route: "/informacion" }, { logo: instagram, text: "INSTAGRAM"}])

  let [NavActive, setNavActive] = useState<boolean>(false)

  let NavMenu = useRef<HTMLDivElement>(null)

  const location = useLocation()

  const navigateTo = useNavigate()

  useEffect(() => {

    const handleOutside = (event: PointerEvent) => {

      if (NavMenu.current && !NavMenu.current.contains(event.target as Node) ) {

        setNavActive(false)

      }

    }

    document.addEventListener("pointerdown", handleOutside)

    return () => {

      document.removeEventListener("pointerdown", handleOutside)
    }

  }, []);

  useEffect(() => {

    setOptionsManager(prevArr => prevArr.map((data) => ({

      ...data,
      active: data.route ? data.route === "/" ? location.pathname === "/" : location.pathname.startsWith(data.route) : false

      // active: location.pathname === data.route
      // solia ser esta la linea antes de hacer el product page (/catalogo/25)
      
    })))

  }, [location.pathname])

  return (

    <>

      <div className="MainNav-Mobile">

        <div className="BurgerMenu-Mobile" onClick={() => { setNavActive(true) }}><span className="material-symbols-outlined fixSpanBurger">menu</span></div>

        <div className="Logo-Mobile">

          <img className="PicLogo-Mobile" loading='eager' decoding='async' fetchPriority="high" src={LogoMiniGarageAr} alt="MiniGarageAr"></img>

        </div>

        <div className="LogInButton-Mobile">

          <button type="button" className="ButtonToLog">Iniciar sesión</button>

        </div>

        {/* <div className="LoggedIn-Mobile"></div> */}

      </div>

      {NavActive ? <div className="BurgerNav-Mobile" ref={NavMenu}>

        <div className="MenuLogo">

          <img className="PicLogoMenu" src={LogoMiniGarageAr} alt="MiniGarageAr"></img>

          <span onClick={() => { setNavActive(false) }} className="material-symbols-outlined CloseMenu">close</span>

        </div>

        {OptionsManager.map((data: navOptions) => {
          return <div className={data.active ? "MenuOption MenuOptionActive" : "MenuOption"} onClick={() => {setNavActive(false); if (data.route) {navigateTo(data.route)} else {window.open("https://www.instagram.com/garageminiarg/?hl=es", "_blank", "noopener,noreferrer")}}}>

            <div className="MenuOptionLogo">

              <img className="MenuOptionLogoPic" src={data.logo} alt="MiniGarageAr"></img>

            </div>

            <div className="MenuOptionName">

              <span className="MenuOptionText">{data.text}</span>

            </div>

          </div>
        })}


      </div> : ""}

    </>

  )
}

export default NavBar