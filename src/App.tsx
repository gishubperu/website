import { useEffect } from 'react'
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import Team from './components/Team';
import Services from './components/Services';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <Header />
      <Hero />
      <About />
      <Vision />
      <Team />
      <Services />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
}
export default App
