// import Image from 'next/image'
// import styles from '../styles/index.module.css';
// import Navbar from '../components/navbar'
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ChamadaCursos from "../components/chamada-cursos";
import Championchips from "@/components/championchips"


export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />

      <Championchips />

      <ChamadaCursos />

      <Footer />
    </main>
  );
}
