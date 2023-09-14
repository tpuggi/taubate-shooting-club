// import Image from 'next/image'
// import styles from '../styles/index.module.css';
// import Navbar from '../components/navbar'
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ChamadaCursos from "../components/chamada-cursos";
import Faq from "@/components/faq";

export default function Camps() {
  return (
    <main className="bg-black">
      <Navbar />
      <Faq />

      <ChamadaCursos />

      <Footer />
    </main>
  );
}