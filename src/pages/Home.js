import React from 'react'
import { Navbar } from '../features/navbar/Navbar'
import ProductList from '../features/product/components/ProductList'
import Hero from './Hero'
import Contact from './Contact'
import About from './About'

const Home = () => {
  return (
    <div>
      <Navbar>
        <Hero />
        <About />
        <Contact />
        <ProductList />
      </Navbar>
    </div>
  )
}

export default Home