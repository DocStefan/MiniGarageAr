import { BrowserRouter, Routes, Route } from 'react-router'
import NavBar from './components/NavBar'
import LandPag from './components/LandPag'
import LastArrivals from './components/LastArrivals'
import Questions from './components/Questions'
import Footer from './components/Footer'
import Catalogue from './components/Catalogue'
import { ScrollProvider } from './customHooks/useScroll'
import ScrollToTop from './customHooks/ScrollToTop'
import Product from './components/Product'
import Favoritos from './components/Favoritos'
import Carrito from './components/Carrito'

function App() {

  return (

    <BrowserRouter>
      <ScrollProvider>
      <ScrollToTop />  
        <Routes>
          <Route path='/' element={[<NavBar />, <LandPag />, <LastArrivals />, <Questions />, <Footer />]} />
          <Route path='/catalogo' element={[<NavBar />, <Catalogue />, <Footer />]} />
          <Route path='/informacion' element={[<NavBar />]} />
          <Route path='/catalogo/:productId' element={[<NavBar />, <Product />, <Footer />]} />
          <Route path='/favoritos' element={[<NavBar />, <Favoritos />, <Footer />]}></Route>
          <Route path='/carrito' element={[<NavBar />, <Carrito />, <Footer />]}></Route>                  
        </Routes>
      </ScrollProvider>
    </BrowserRouter>

  )
}

export default App
