import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import "./style.css";

function App() {
  return (
    <div className="App">
      <Header />

      <Home />
      <br />
      <About />
      <br />
      <Projects />
      <br />
      <Work />
      <br />
      <Skills />
      <br />
      <Contact />
      <br />
    </div>
  );
}

export default App;
