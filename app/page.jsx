import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BrandTicker from '../components/BrandTicker';
import Services from '../components/Services';
import Calculator from '../components/Calculator';
import WhyUs from '../components/WhyUs';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import WhatsAppFloating from '../components/WhatsAppFloating';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandTicker />
        <Services />
        <Calculator />
        <WhyUs />
        <Process />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  );
}
