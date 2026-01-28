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
import CoursesCurriculum from "./pages/Academics/CourseCurriculum"; // Ensure this matches your actual filename (CourseCurriculum.jsx)
import Faculty from "./pages/Academics/Faculty";
import Results from "./pages/Academics/Results";

//Admissions Pages
import AdmissionProcessPage from "./pages/Admission/AdmissionProcessPage";
import FeeStructure from "./pages/Admission/FeeStructure";
import Scholarships from "./pages/Admission/Scholarships";

//Campus Life Pages
import ActivitiesEvents from "./pages/CampusLife/ActivitiesEvents";
import GalleryPage from "./pages/CampusLife/GalleryPage";
import TestimonialsPage from "./pages/CampusLife/TestimonialsPage";

//Admin Pages
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";

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
          {/* --- FIX: Changed path to "/curriculum" to match the links in Courses.jsx --- */}
          <Route path="/curriculum" element={<CoursesCurriculum />} />
          
          <Route path="/academics/faculty" element={<Faculty />} />
          <Route path="/academics/results" element={<Results />} />

          {/* Admissions Dropdown Pages */}
          <Route path="/admissions/process" element={<AdmissionProcessPage />} />
          <Route path="/admissions/fees" element={<FeeStructure />} />
          <Route path="/admissions/scholarships" element={<Scholarships />} />  
          
          {/* Campus Life Dropdown Pages */}
          <Route path="/campus-life/activities-events" element={<ActivitiesEvents />} />
          <Route path="/campus-life/gallery" element={<GalleryPage />} />
          <Route path="/campus-life/testimonials" element={<TestimonialsPage />} />
          
          {/* Admin Pages */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>

        {/* Footer stays persistent across all pages */}
        <Footer />
      </div>
    </Router>
  );
}