import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ChamadaCursos from "../components/chamada-cursos";
import SociateComponent from "../components/sociate.jsx";

export default function Sociate() {
  return (
    <main className="bg-black">
      <Navbar />

      <SociateComponent id="seja_socio" />

      <ChamadaCursos id="cursos" />

      <Footer />
    </main>
  );
}
