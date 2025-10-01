import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Hero />
      <main className="relative z-10">
        <Features />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
