import React from 'react'
import Hero from '../components/home/Hero'
import Banner from '../components/home/Banner'
import About from '../components/home/About'
import Navbar from '../components/home/Navbar'
import Contact from '../components/home/Contact'
import Footer from '../components/home/Footer'

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Banner />
    <About />
    <Contact />
    <Footer />
    </>
  )
}

export default Home
