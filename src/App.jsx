import Navbar from "./components/Navbar";
import Hero from "./components/home-comp/Hero";
import About from "./components/home-comp/About";
import Courses from "./components/home-comp/Courses";
import Stats from "./components/home-comp/Stats"

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Stats />
      {/* <main className="min-h-screen bg-sv-blue">
      </main> */}
    </div>
  );
}