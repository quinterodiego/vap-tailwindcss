import { NavbarLanding } from '../features/navbar/NavbarLanding'
// import ProductList from '../features/product/components/ProductList'
import Hero from './Hero'
import Contact from './Contact'
import About from './About'
import Footer from '../features/footer/Footer'
import Popular from './Popular'

export const Home = () => {
  return (
    <div>
      <NavbarLanding>
        <Hero />
        <Popular />
        <About />
        <Contact />
        {/* <ProductList /> */}
        <Footer />
      </NavbarLanding>
    </div>
  )
}