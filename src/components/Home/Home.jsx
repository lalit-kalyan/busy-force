import React from "react";
import Hero from "../Hero/Hero";
import Program from "../Programs/Program";
import Reasons from "../Reasons/Reasons";
import Plans from "../Plans/Plans";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";

function Home() {
  return (
    <div>
      <Hero />
      <Program />
      <Reasons />
      <Plans />
      <Gallery/>
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
