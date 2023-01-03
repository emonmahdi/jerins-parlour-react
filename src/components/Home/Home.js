import React from 'react'
import Footer from '../../shared/Footer'
import About from './About'
import Contact from './Contact'
import Header from './Header'
import Services from './Services'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <div>
      <Header />
      <Services />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
