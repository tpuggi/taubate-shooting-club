import Navbar from '../components/navbar'

import Carousel from '../components/bigcarousel'
import ChamadaCursos from '../components/chamada-cursos'


export default function Home() {
  return (
    <main className='bg-black'>
       <Navbar/>

      <Carousel/>

      <ChamadaCursos/>

      {/* <AboutUs /> */}

      {/* <OurServices /> */}

      {/* <CTA /> */}

      {/* <Footer /> */}

    </main>
  )
}
