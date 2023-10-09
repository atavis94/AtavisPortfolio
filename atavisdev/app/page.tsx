

import ContactForm from "./contactForm";
import About from "./about";
import Qualifications from "./qualifications";
import Banner from "./banner";
import Showcase from "./showcase";

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

      <section id="showcase">
        <Showcase />
      </section>

      <section id="contact">
        <ContactForm />
      </section>
      <div className="bg-zinc-950">
        <h3 className="text-sm text-center mb-4 mt-4">Built by Aiden Forbes using Next.JS, Tailwind CSS, and hosted on Vercel. Copyright 2023.</h3>

      </div>
    </main>
  );
}

