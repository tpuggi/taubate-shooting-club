// import Image from 'next/image'
// import styles from '../styles/index.module.css';
// import Navbar from '../components/navbar'
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AboutUs from "../components/aboutus";
import Carousel from "../components/bigcarousel";
import ChamadaCursos from "../components/chamada-cursos";
import OurServices from "../components/ourservices";
import OurHistory from "@/components/ourhistory";


export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />

      <Carousel />

      <AboutUs/>

      <OurHistory/>

      <OurServices />

      <ChamadaCursos />

      <Footer />
    </main>
  );
}
