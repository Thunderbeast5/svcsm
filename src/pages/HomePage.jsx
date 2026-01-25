// src/pages/Home.jsx
import React from 'react';
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Courses from "../components/Home/Courses";
import Stats from "../components/Home/Stats";
import AdmissionProcess from "../components/Home/AdmissionProcess";
import CampusLife from "../components/Home/CampusLife";
import Testimonials from "../components/Home/Testimonials";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <Stats />
      <AdmissionProcess />
      <CampusLife />
      <Testimonials />
    </>
  );
};

export default HomePage;