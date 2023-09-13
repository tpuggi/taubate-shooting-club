import Course from "@/components/basic_course";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <main className="bg-black">
      < Navbar/>

      <Course/>

      <Footer/>
    </main>
  );
}
