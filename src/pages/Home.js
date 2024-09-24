import React from 'react'
import { NavbarLanding } from '../features/navbar/NavbarLanding'
import { Navbar } from '../features/navbar/Navbar'
import ProductList from '../features/product/components/ProductList'
import Hero from './Hero'
import Contact from './Contact'
import About from './About'
import Footer from '../features/footer/Footer'
import Popular from './Popular'

const Home = () => {
  return (
    <div>
      <Navbar>
        <Hero />
        <Popular />
        <About />
        <Contact />
        {/* <ProductList /> */}
        <Footer />
      </Navbar>
    </div>
  )
}

export default Home