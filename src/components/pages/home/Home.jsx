import React from 'react'
import Header from '../../partials/Header'
import Hero from './hero/Hero'
import Footer from '../../partials/Footer'
import Contact from '../../partials/Contact'
import Stores from './stores/Stores'
import Services from './services/Services'

const Home = () => {
  return (
    <>
      <div className="font-sans bg-gray-50">
        <Header />
        <Hero />
        <Stores />
        <Services/>
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Home
