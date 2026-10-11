import { BrowserRouter, Routes, Route } from 'react-router'
import NavBar from './components/NavBar'
import LandPag from './components/LandPag'
import LastArrivals from './components/LastArrivals'
import Questions from './components/Questions'
import Footer from './components/Footer'
import { ScrollProvider } from './customHooks/useScroll'

function App() {

  return (

    <BrowserRouter>

      <ScrollProvider>

        <Routes>
          <Route path='/' element={[<NavBar />, <LandPag />, <LastArrivals />, <Questions />, <Footer />]} />
          <Route path='/catalogo' element={[<NavBar />]} />
          <Route path='/informacion' element={[<NavBar />]} />
          <Route path='/catalogo/prod:' element={[<NavBar />]} />         
        </Routes>

      </ScrollProvider>

    </BrowserRouter>

  )
}

export default App
