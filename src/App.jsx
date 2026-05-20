
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-primary-500/30 selection:text-white">
      {/* Background ambient radial gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary-950/20 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent-950/20 blur-[120px] animate-pulse-slow" style={{ animationDelay: '-5s' }} />
      </div>

      {/* Main Structural Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Sticky Header */}
        <Navbar />

        {/* Section Flows */}
        <main className="flex-grow">
          <Hero />
          <About />
          <Services />
          <WhyChooseUs />
          <Projects />
          <Testimonials />
          <Careers />
          <Contact />
        </main>

        {/* Corporate Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
