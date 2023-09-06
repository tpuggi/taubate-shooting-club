import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ChamadaCursos from "../components/chamada-cursos";
import sejaSocio from "../components/sejaSocio.jsx";

export default function Sociate() {
return (
    <main className="bg-black">
    <Navbar />

    <sejaSocio />

    <ChamadaCursos id="cursos" />

    <Footer />
    </main>
);
}