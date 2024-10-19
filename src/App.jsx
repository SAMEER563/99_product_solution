import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route , Router, Routes  } from 'react-router-dom'
import ServicesList from './pages/Services'
import AboutUs from './pages/AboutUs'
import ContactForm from './pages/Contact'
import WebsiteDevelopment from './pages/WebsiteDevelopment'
import MobileDevelopment from './pages/MobileDevelopment'
import Devops from './pages/Devops'
import ItOutsourcing from './pages/ItOutsourcing'
import ItConsulting from './pages/ItConsulting'
import ProductPage from './pages/ProductPage'


const App = () => {
  return (
    <div >
      
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/services' element={<ServicesList />} />
        <Route path='/web' element={<WebsiteDevelopment />} />
        <Route path='/mobile' element={<MobileDevelopment />} />
        <Route path='/devops' element={<Devops />} />
        <Route path='/outsourcing' element={<ItOutsourcing />} />
        <Route path='/consulting' element={<ItConsulting />} />
        </Routes>       

      
    </div>
  )
}

export default App