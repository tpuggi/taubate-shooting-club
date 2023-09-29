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

import { useEffect } from "react";
import { useRouter } from "next/router";
import * as Scroll from "react-scroll";
import { redirect } from "react-router-dom";

const { Element: ScrollElement } = Scroll;

export default function Home() {
  const { query } = useRouter();
  const router = useRouter();
  useEffect(() => {
    if (query.id === "targetElement") {
      router.push("/");
      setTimeout(() => {
        Scroll.scroller.scrollTo("targetElement", {
          duration: 300,
          smooth: true,
          offset: -100,
        });
      }, 100);
    }
  }, [query]);

  return (
    <main className="bg-black">
      <Navbar />

      <Carousel />

      <AboutUs />

      <OurHistory />

      <ScrollElement id="targetElement" name="targetElement">
        <OurServices />
      </ScrollElement>

      <ChamadaCursos id="cursos" />

      <Footer />
    </main>
  );
}
