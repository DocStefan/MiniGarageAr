import { BrowserRouter, Routes, Route } from 'react-router'
import NavBar from './components/NavBar'
import LandPag from './components/LandPag'
import LastArrivals from './components/LastArrivals'
import Questions from './components/Questions'
import Footer from './components/Footer'

function App() {

  return (

    <BrowserRouter>
    <Routes>

     <Route path='/' element={[<NavBar />, <LandPag />, <LastArrivals />, <Questions />, <Footer />]} />

    </Routes>
    </BrowserRouter>

  )
}

export default App
