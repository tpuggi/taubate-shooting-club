import CalendarPage from "@/components/calendar";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />

      <CalendarPage />

      <Footer />
    </main>
  );
}
