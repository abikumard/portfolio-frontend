import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import HRForm from "./components/HRForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "./config/api";

function App() {
 useEffect(() => {

    axios.post(
      `${API_BASE_URL}/visitor/save`,
      {
        ipAddress: "127.0.0.1",
        pageName: "HOME"
      }
    ).catch(err => console.log(err));

  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <HRForm />
      <Contact />
      <Footer />
    </>
  )
}

export default App