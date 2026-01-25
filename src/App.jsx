import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Page Components
import HomePage from "./pages/HomePage"; 
import AboutSVCMS from "./pages/AboutUs/AboutSVCSMS"; 
import VisionMission from "./pages/AboutUs/VisionMission"; 
import Leadership from "./pages/AboutUs/LeaderShip"; 

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
        
        {/* Navbar stays persistent across all pages */}
        <Navbar />
        
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<HomePage />} />
          
          {/* About Us Dropdown Pages */}
          <Route path="/about/svcms" element={<AboutSVCMS />} />
          <Route path="/about/vision" element={<VisionMission />} />
          <Route path="/about/leadership" element={<Leadership />} />
          
          
        </Routes>

        {/* Footer stays persistent across all pages */}
        <Footer />
      </div>
    </Router>
  );
}