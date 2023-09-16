// import Image from 'next/image'
// import styles from '../styles/index.module.css';
// import Navbar from '../components/navbar'
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ChamadaCursos from "../components/chamada-cursos";
import Capacitacao from "@/components/curso-capacitacao";

export default function Camps() {
  return (
    <main className="bg-black">
      <Navbar />

      <Capacitacao />

      <ChamadaCursos />

      <Footer />
    </main>
  );
}
