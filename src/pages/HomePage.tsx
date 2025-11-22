import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import MissionVisionValues from '../components/MissionVisionValues';
import TechnicalCapabilities from '../components/TechnicalCapabilities';
import ClientsPartners from '../components/ClientsPartners';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';

export default function HomePage() {

  return (
    <main>
      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="mission">
        <MissionVisionValues />
      </section>

      <section id="capabilities">
        <TechnicalCapabilities />
      </section>

      <section id="clients">
        <ClientsPartners />
      </section>

      <section id="why-choose-us">
        <WhyChooseUs />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
