import Background from './components/Background';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import Services from './sections/Services';
import Work from './sections/Work';
import Showcase from './sections/Showcase';
import Process from './sections/Process';
import Testimonial from './sections/Testimonial';
import Pricing from './sections/Pricing';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

export default function Home() {
  return (
    <>
      <Background />
      <div className="gradient-blur"></div>
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Stats />
        <Services />
        <Work />
        <Showcase />
        <Process />
        <Testimonial />
        <Pricing />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
