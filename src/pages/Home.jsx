import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import First from './First'
import Latest from './Latest'
import ContactForm from './Contact'
import AboutUs from './AboutUs'
import ServicesList from './Services'

const Home = () => {
  return (
    <div className=''>
        <Navbar />
        <First />
        <AboutUs />
        <ServicesList />
        <Latest />
        <ContactForm />
        <Footer />
    </div>
  )
}

export default Home