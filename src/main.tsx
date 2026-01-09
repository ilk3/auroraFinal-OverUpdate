import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import App from './App.tsx';
import AboutUs from './pages/AboutUs.tsx';
import Certification from './pages/Certification.tsx';
import SocialResponsibility from './pages/SocialResponsibility.tsx';
import Services from './pages/Services.tsx';
import News from './pages/News.tsx';
import BlogPost from './pages/BlogPost.tsx';
import Contact from './pages/Contact.tsx';
import Covid from './pages/Covid.tsx';
import { ScrollToTop } from './components/ScrollToTop';
import { LanguageProvider } from './contexts/LanguageContext';
import './index.css';

// Create Lenis instance with modified configuration
const lenis = new Lenis({
  duration: 50.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  smoothTouch: false,
  touchMultiplier: 2,
  wheelMultiplier: 1,
  lerp: 0.1,
  infinite: false
});

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/social-responsibility" element={<SocialResponsibility />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/expert-meeting-neuroblastoma" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/covid" element={<Covid />} />
        </Routes>
      </Router>
    </LanguageProvider>
  </StrictMode>
);