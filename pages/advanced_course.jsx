import ACourse from "@/components/advanced_course";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <main className="bg-black">
      < Navbar/>

      <ACourse/>

      <Footer/>
    </main>
  );
}
