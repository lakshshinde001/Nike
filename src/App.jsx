import Hero from '../src/sections/Hero'
import PopularProducts from './sections/PopularProducts'
import SuperQuality from './sections/SuperQuality'
import Services from './sections/Services'
import SpecialOffers from './sections/SpecialOffers'
import CustomerReviews from './sections/CustomerReviews'
import Subscribe from './sections/Subscribe'
import Footer from './sections/Footer'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <main className='relative'>
      <NavBar/>
      <section className='xl:padding-1 wide:padding-r padding-b'>
       <Hero/>
      </section>
      <section className='padding '>
        <PopularProducts/>
      </section>
      <section className='padding px- '>
        <SuperQuality/>
      </section>
      <section className='padding-x py-10 '>
        <Services/>
      </section>
      <section className='padding '>
        <SpecialOffers/>
      </section>
      <section className='bg-pale-blue padding '>
        <CustomerReviews/>
      </section>
      <section className='padding padding-x sm:py-32 py-16 w-full'>
        <Subscribe/>
      </section>
      <section className='padding bg-black padding-x padding-t pb-8'>
        <Footer/>
      </section>
    </main>
  )
}

export default App