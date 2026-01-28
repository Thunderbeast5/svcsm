import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

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
import JuniorAdmissionForm from "./pages/Admission/AdmissionForm";

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

const RequireAdminAuth = ({ children }) => {
  const [status, setStatus] = useState({ loading: true, user: null });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setStatus({ loading: false, user });
    });
    return unsubscribe;
  }, []);

  if (status.loading) return null;
  if (!status.user) return <Navigate to="/admin/login" replace />;
  return children;
};

// Main Layout Component to handle Conditional Rendering
const Layout = () => {
  const location = useLocation();
  
  // Check if the current route is an Admin route
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="relative font-sans antialiased text-gray-900 bg-white">
      <ScrollToTop />

      {/* HIDE Navbar on Admin Pages.
        Only show Navbar if isAdminRoute is false.
      */}
      {!isAdminRoute && <Navbar />}
      
      <Routes>
        {/* Main Landing Page */}
        <Route path="/" element={<HomePage />} />
        
        {/* About Us */}
        <Route path="/about/svcms" element={<AboutSVCMS />} />
        <Route path="/about/vision" element={<VisionMission />} />
        <Route path="/about/leadership" element={<Leadership />} />

        {/* Academics */}
        <Route path="/curriculum" element={<CoursesCurriculum />} />
        <Route path="/academics/faculty" element={<Faculty />} />
        <Route path="/academics/results" element={<Results />} />

        {/* Admissions */}
        <Route path="/admissions/process" element={<AdmissionProcessPage />} />
        <Route path="/admissions/fees" element={<FeeStructure />} />
        <Route path="/admissions/scholarships" element={<Scholarships />} />  
        <Route path="/admissions/form" element={<JuniorAdmissionForm />} />
        
        {/* Campus Life */}
        <Route path="/campus-life/activities-events" element={<ActivitiesEvents />} />
        <Route path="/campus-life/gallery" element={<GalleryPage />} />
        <Route path="/campus-life/testimonials" element={<TestimonialsPage />} />

        {/* --- ADMIN ROUTES --- */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <RequireAdminAuth>
              <AdminDashboard />
            </RequireAdminAuth>
          }
        />
      </Routes>

      {/* HIDE Footer on Admin Pages */}
      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}