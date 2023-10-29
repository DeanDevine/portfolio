import Navbar from "./components/NavBar/navbar";
// import Skills from "./components/Skills/skills";
import Intro from "./components/Intro/intro";
// import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Projects from "./components/Projects/projects";
import About from "./components/About/about";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <About/>
     {/* <Skills/> */}
     {/* <Works/> */}
     <Projects/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
