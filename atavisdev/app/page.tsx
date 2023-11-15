import ContactForm from "./contactForm";
import About from "./about";
import Qualifications from "./qualifications";
import Banner from "./banner";
import Projects from "./projects";


export default function Home() {
  return (
    <main className="justify-center mt-24 flex flex-col text-white font-semibold">
      <Banner />
      <section id="about">
        <About />
      </section>
      <section id="qualifications">
        <Qualifications />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
    </main>
  );
}

