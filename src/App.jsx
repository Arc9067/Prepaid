import React, { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Mics from "./Components/Mics";
import Map from "./Components/Map";
import Footer from "./Components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      easing: "linear",
    });
  }, []);
  return (
    <div className="relative min-h-screen w-full bg-lime-700 font-irishGrover text-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Mics />

      {/* <Map /> */}
      <Footer />
    </div>
  );
};

export default App;
