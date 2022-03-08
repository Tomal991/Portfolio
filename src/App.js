import "./App.css";
import Header from "./components/header/Header";

import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
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
      {/* <Footer />
      <Services /> */}
      {/* <Projects />
      <Contact />
     
      <Testimonials /> */}
    </div>
  );
}

export default App;
