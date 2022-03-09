import "./App.css";
import Header from "./components/header/Header";

import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonial/Testimonial";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />

      <About />
      <Experience />
      <Services />

      <Projects />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
