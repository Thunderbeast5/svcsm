import Navbar from "./components/Navbar";
import Hero from "./components/Home/Hero";
import About from "./components/Home/About";
import Courses from "./components/Home/Courses";
import Stats from "./components/Home/Stats"
import AdmissionProcess from "./components/Home/AdmissionProcess";
import CampusLife from "./components/Home/CampusLife";
import Footer from "./components/Footer"; 

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Stats />
      <AdmissionProcess />
      <CampusLife />
      <Footer />
      {/* <main className="min-h-screen bg-sv-blue">
      </main> */}
    </div>
  );
}