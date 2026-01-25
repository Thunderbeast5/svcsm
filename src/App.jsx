import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Main Landing Page
import HomePage from "./pages/HomePage"; 

//About Us Pages
import AboutSVCMS from "./pages/AboutUs/AboutSVCSMS"; 
import VisionMission from "./pages/AboutUs/VisionMission"; 
import Leadership from "./pages/AboutUs/LeaderShip"; 

//Academics Pages
import CoursesCurriculum from "./pages/Academics/CourseCurriculum";
import Faculty from "./pages/Academics/Faculty";
import Results from "./pages/Academics/Results";

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <Router>
      <div className="relative font-sans antialiased text-gray-900 bg-white">
        {/* ScrollToTop ensures we start at the top of the page when navigating */}
        <ScrollToTop />

        <Navbar />
        
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<HomePage />} />
          
          {/* About Us Dropdown Pages */}
          <Route path="/about/svcms" element={<AboutSVCMS />} />
          <Route path="/about/vision" element={<VisionMission />} />
          <Route path="/about/leadership" element={<Leadership />} />

          {/* Academics Dropdown Pages */}
          <Route path="/academics/curriculum" element={<CoursesCurriculum />} />
          <Route path="/academics/faculty" element={<Faculty />} />
          <Route path="/academics/results" element={<Results />} />
          
          
        </Routes>

        {/* Footer stays persistent across all pages */}
        <Footer />
      </div>
    </Router>
  );
}