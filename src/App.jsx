import "./App.css";
import "aos/dist/aos.css";
import { Header } from "./Components/Header/Header";
import { ThemeContext } from "./Context/Theme";
import Aos from "aos";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { ScrollToTop } from "./Components/ScrollToTop/ScrollToTop";
import { useContext, useEffect } from "react";
import { Techstacks } from "./Components/Techstacks/Techstacks";
import { Introduction } from "./Components/Introduction/Introduction";
import { About } from "./Components/About/About";
import { Timeline } from "./Components/Timeline/Timeline";
import { ClientProjects } from "./Components/ClientProjects/ClientProjects";

function App() {
  const [{ themename }] = useContext(ThemeContext);
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div id="top" className={`${themename} app`}>
      <section id="#home">
        <Header />
        <Introduction />
      </section>
      <main>
        <section id="#about">
          <About />
        </section>
        <section id="#timeline">
          <Timeline />
        </section>
        <section id="#skills">
          <Techstacks />
        </section>
        <section id="#client_projects">
          <ClientProjects />
        </section>
        <section id="#projects">
          <Projects />
        </section>
        <section id="#contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
