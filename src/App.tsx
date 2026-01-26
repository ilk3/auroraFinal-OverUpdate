import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import { RevealOnScroll } from './components/RevealOnScroll';
import { ArrowDown, Loader2 } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';

function App() {
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const img = new Image();
    img.src = 'https://www.dropbox.com/scl/fi/uprwkwfu5gf6zvv6f5rkx/brownRed.avif?rlkey=qmxf66a764gydidkasv61db93&raw=1'
    ;

    img.onload = () => {
      setIsBackgroundLoaded(true);
      setTimeout(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setShowSpinner(true);
          setTimeout(() => {
            setShowSpinner(false);
            setTimeout(() => {
              setShowButton(true);
            }, 300);
          }, 2500);
        }, 2500);
      }, 500);
    };
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('company-info');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div className={`rotating-background ${isBackgroundLoaded ? 'background-loaded' : ''}`}></div>
      <Navbar />
      <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
        <div className="hero-section relative z-10 w-full max-w-8xl mx-auto px-4 text-center">
          <span className={`hero-text hero-part block text-[2.5rem] md:text-[3.5rem] leading-[1.2] tracking-tight font-light ${isAnimating ? 'animate-hero' : ''}`} id="part1">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple font-normal">
              {t('hero.specialty')}
            </span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple font-normal">
              {t('hero.pharmaceutical')}
            </span>{' '}
            {t('hero.focused')}
          </span>
          <span className={`hero-text hero-part block text-[2.5rem] md:text-[3.5rem] leading-[1.2] tracking-tight font-light mt-4 ${isAnimating ? 'animate-hero' : ''}`} id="part2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple font-normal">
              {t('hero.commercialisation')}
            </span>{' '}
            {t('hero.unlicensed')}{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple font-normal">
              {t('hero.orphan')}
            </span>
          </span>
          <span className={`hero-text hero-part inline text-[2.5rem] md:text-[3.5rem] leading-[1.2] tracking-tight font-light ${isAnimating ? 'animate-hero' : ''}`} id="part3">
            {t('hero.and')}
          </span>{' '}
          <span className={`hero-text hero-part inline text-[2.5rem] md:text-[3.5rem] leading-[1.2] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple font-normal ${isAnimating ? 'animate-hero' : ''}`} id="part4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple font-normal">
              {t('hero.therapeutics')}
            </span>
          </span>
        </div>

        {/* Responsive Find Out More Button */}
        <div className="absolute bottom-10 right-10 z-20 hidden md:block">
          {showSpinner && (
            <div className="flex items-center justify-center w-16 h-16 animate-fade-in">
              <Loader2 className="w-30 h-30 text-primary animate-spin-twice" />
            </div>
          )}
          {showButton && (
            <div className={`find-out-button transition-all duration-500 ease-in-out ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'}`}>
              <a 
                href="#company-info"
                onClick={handleSmoothScroll}
                className="glossy-button inline-flex items-center px-6 py-4 text-text-primary rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                <ArrowDown className="mr-3 w-5 h-5 bg-clip-text bg-gradient-to-r from-primary to-secondary-purple transform group-hover:translate-y-1 transition-transform duration-300" />
                <span className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                  {t('hero.findMore')}
                </span>
              </a>
            </div>
          )}
        </div>
      </div>


      {/* Probity section */}
      <section id="company-info" className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <RevealOnScroll animation="fade-up" delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                {t('probity.title')}
              </span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll animation="fade" delay={200}>
            <p className="text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
              {t('probity.description')}
            </p>
          </RevealOnScroll>
          <RevealOnScroll animation="fade-up" delay={400}>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-text-white bg-primary hover:bg-primary-light transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 rounded-full"
            >
              {t('probity.contact')}
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* Video section */}
      <section className="relative overflow-hidden min-h-[80vh]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://www.dropbox.com/scl/fi/0zx9a5qsoco44nev6d1bf/cells.mp4?rlkey=c380jn8k2yb30k0qyeqvmtoks&raw=1" type="video/mp4" />
        </video>

        <div className="relative z-20 min-h-[80vh] flex items-center justify-center">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <RevealOnScroll animation="fade-up">
              <h2 className="text-4xl font-bold text-text-white mb-8 drop-shadow-lg">
                {t('video.title')}
              </h2>
            </RevealOnScroll>
            <RevealOnScroll animation="fade" delay={200}>
              <p className="text-lg mb-12 leading-relaxed drop-shadow-lg text-white">
                {t('video.description')}
              </p>

              <div className="space-y-4 mb-12">
                <div className="flex items-center space-x-4 justify-center">
                  <div className="w-2 h-2 bg-accent-gold rounded-full shadow-lg"></div>
                  <p className="text-lg drop-shadow-lg text-white">{t('video.import')}</p>
                </div>
                <div className="flex items-center space-x-4 justify-center">
                  <div className="w-2 h-2 bg-accent-gold rounded-full shadow-lg"></div>
                  <p className="text-lg drop-shadow-lg text-white">{t('video.registration')}</p>
                </div>
                <div className="flex items-center space-x-4 justify-center">
                  <div className="w-2 h-2 bg-accent-gold rounded-full shadow-lg"></div>
                  <p className="text-lg drop-shadow-lg text-white">{t('video.managed')}</p>
                </div>
              </div>

              {/* Services Button */}
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-text-white bg-primary/90 backdrop-blur-sm hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 rounded-full"
              >
                {t('nav.services')}
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Registration section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          {/* Mobile layout: heading → image → text → button (all centered) */}
          <div className="md:hidden space-y-8 text-center">
            <RevealOnScroll animation="fade-up">
              <h2 className="text-3xl font-bold text-text-primary">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                  {t('registration.title')}
                </span>
              </h2>
            </RevealOnScroll>
            
            <RevealOnScroll animation="fade" delay={200}>
              <div className="relative w-3/4 mx-auto">
                {/* Decorative outer rings */}
                <div className="absolute inset-0 rounded-full border border-primary/50 -m-2"></div>
                <div className="absolute inset-0 rounded-full border border-primary/30 -m-4"></div>
                {/* Main image container */}
                <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="https://www.dropbox.com/scl/fi/6rvw2x8ypsm4kyq0mdmpe/registration.jpg?rlkey=fi71csummzklie0mwqgakkn6z&raw=1"
                    alt="Medical Registration Services"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll animation="fade-up" delay={300}>
              <p className="text-lg leading-relaxed">
                {t('registration.description')}
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll animation="fade-up" delay={400}>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-text-white bg-primary hover:bg-primary-light transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 rounded-full"
              >
                {t('registration.learnMore')}
              </Link>
            </RevealOnScroll>
          </div>

          {/* Desktop layout: side-by-side (unchanged) */}
          <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
            {/* Left column with content */}
            <div className="space-y-8 text-left">
              <RevealOnScroll animation="fade-up">
                <h2 className="text-4xl font-bold text-text-primary">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                    {t('registration.title')}
                  </span>
                </h2>
                <p className="text-lg leading-relaxed">
                  {t('registration.description')}
                </p>
                
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-text-white bg-primary hover:bg-primary-light transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 rounded-full"
                >
                  {t('registration.learnMore')}
                </Link>
              </RevealOnScroll>
            </div>

            {/* Right column with large circular image */}
            <RevealOnScroll animation="fade" delay={200}>
              <div className="relative w-3/4 mx-auto">
                {/* Decorative outer rings */}
                <div className="absolute inset-0 rounded-full border border-primary/50 -m-2"></div>
                <div className="absolute inset-0 rounded-full border border-primary/30 -m-4"></div>
                {/* Main image container */}
                <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="https://www.dropbox.com/scl/fi/6rvw2x8ypsm4kyq0mdmpe/registration.jpg?rlkey=fi71csummzklie0mwqgakkn6z&raw=1"
                    alt="Medical Registration Services"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Unlicensed medicines section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          {/* Mobile layout: heading → image → text → button (all centered) */}
          <div className="md:hidden space-y-8 text-center">
            <RevealOnScroll animation="fade-up">
              <h2 className="text-3xl font-bold text-text-primary">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                  {t('unlicensed.title')}
                </span>
              </h2>
            </RevealOnScroll>
            
            <RevealOnScroll animation="fade" delay={200}>
              <div className="relative w-3/4 mx-auto">
                {/* Decorative outer rings */}
                <div className="absolute inset-0 rounded-full border border-primary/50 -m-2"></div>
                <div className="absolute inset-0 rounded-full border border-primary/30 -m-4"></div>
                {/* Main image container */}
                <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="https://www.dropbox.com/scl/fi/kbbowvun7k3e5kfqoittu/provider.jpg?rlkey=svbix202drl0v4rs0xtd5ou4a&raw=1"
                    alt="Healthcare Innovation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll animation="fade-up" delay={300}>
              <p className="text-lg leading-relaxed">
                {t('unlicensed.description')}
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll animation="fade-up" delay={400}>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-text-white bg-primary hover:bg-primary-light transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 rounded-full"
              >
                {t('unlicensed.learnMore')}
              </Link>
            </RevealOnScroll>
          </div>

          {/* Desktop layout: side-by-side (unchanged) */}
          <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
            {/* Left column with large circular image */}
            <RevealOnScroll animation="fade">
              <div className="relative w-3/4 mx-auto">
                {/* Decorative outer rings */}
                <div className="absolute inset-0 rounded-full border border-primary/50 -m-2"></div>
                <div className="absolute inset-0 rounded-full border border-primary/30 -m-4"></div>
                {/* Main image container */}
                <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="https://www.dropbox.com/scl/fi/kbbowvun7k3e5kfqoittu/provider.jpg?rlkey=svbix202drl0v4rs0xtd5ou4a&raw=1"
                    alt="Healthcare Innovation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </RevealOnScroll>

            {/* Right column with content */}
            <div className="space-y-8 text-left">
              <RevealOnScroll animation="fade-up" delay={200}>
                <h2 className="text-4xl font-bold text-text-primary">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                    {t('unlicensed.title')}
                  </span>
                </h2>
                <p className="text-lg leading-relaxed">
                  {t('unlicensed.description')}
                </p>
                
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-text-white bg-primary hover:bg-primary-light transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 rounded-full"
                >
                  {t('unlicensed.learnMore')}
                </Link>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Market Access Programs section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          {/* Mobile layout: heading → image → text → button (all centered) */}
          <div className="md:hidden space-y-8 text-center">
            <RevealOnScroll animation="fade-up">
              <h2 className="text-3xl font-bold text-text-primary">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                  {t('market.title')}
                </span>
              </h2>
            </RevealOnScroll>
            
            <RevealOnScroll animation="fade" delay={200}>
              <div className="relative w-3/4 mx-auto">
                {/* Decorative outer rings */}
                <div className="absolute inset-0 rounded-full border border-primary/50 -m-2"></div>
                <div className="absolute inset-0 rounded-full border border-primary/30 -m-4"></div>
                {/* Main image container */}
                <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="https://www.dropbox.com/scl/fi/51ij9609scgtg74253c88/access.jpg?rlkey=1mywy4p16w1qqp1qn1iz0timo&raw=1"
                    alt="Market Access Programs"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll animation="fade-up" delay={300}>
              <p className="text-lg leading-relaxed">
                {t('market.description')}
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll animation="fade-up" delay={400}>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-text-white bg-primary hover:bg-primary-light transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 rounded-full"
              >
                {t('market.learnMore')}
              </Link>
            </RevealOnScroll>
          </div>

          {/* Desktop layout: side-by-side (unchanged) */}
          <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
            {/* Left column with content */}
            <div className="space-y-8 text-left">
              <RevealOnScroll animation="fade-up">
                <h2 className="text-4xl font-bold text-text-primary">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                    {t('market.title')}
                  </span>
                </h2>
                <p className="text-lg leading-relaxed">
                  {t('market.description')}
                </p>
                
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-text-white bg-primary hover:bg-primary-light transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 rounded-full"
                >
                  {t('market.learnMore')}
                </Link>
              </RevealOnScroll>
            </div>

            {/* Right column with large circular image */}
            <RevealOnScroll animation="fade" delay={200}>
              <div className="relative w-3/4 mx-auto">
                {/* Decorative outer rings */}
                <div className="absolute inset-0 rounded-full border border-primary/50 -m-2"></div>
                <div className="absolute inset-0 rounded-full border border-primary/30 -m-4"></div>
                {/* Main image container */}
                <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="https://www.dropbox.com/scl/fi/51ij9609scgtg74253c88/access.jpg?rlkey=1mywy4p16w1qqp1qn1iz0timo&raw=1"
                    alt="Market Access Programs"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <RevealOnScroll animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                  {t('news.title')}
                </span>
              </h2>
            </RevealOnScroll>
          </div>

          <div className="max-w-4xl mx-auto">
            <RevealOnScroll animation="fade" delay={200}>
              <div className="backdrop-blur-md bg-white/10 rounded-3xl overflow-hidden border border-white/20 hover:shadow-2xl transition-shadow duration-300">
                <div className="grid md:grid-cols-2">
                  {/* Image side */}
                  <div className="relative h-64 md:h-auto">
                    <img
                      src="https://www.dropbox.com/scl/fi/1vmomq16ftdggqs2wwfc5/image1.png?rlkey=gg2bnor495ttszg3wcid1oidc&raw=1"
                      alt="Expert Meeting on Neuroblastoma"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content side */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-text-primary mb-4">
                        {t('news.expertMeeting')}
                      </h3>
                      <p className="text-lg leading-relaxed">
                        {t('news.expertDescription')}
                      </p>
                    </div>
                    
                    <div className="mt-8">
                      <Link 
                        to="/news" 
                        className="inline-flex items-center text-primary hover:text-primary-light transition-colors duration-200 group"
                      >
                        {t('news.viewAll')}
                        <ArrowDown className="ml-2 w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer w-full text-white py-16 relative">
        <div className="w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo Column */}
            <div>
              <img
                src="https://www.dropbox.com/scl/fi/rngw5tjwo0s4g13zp5oa2/aurora-white.png?rlkey=kh5yom49ff57rkyeniqhmi1m8&raw=1"
                alt="Aurora2222"
                className="h-30 w-auto mb-6"
              />
            </div>

            {/* Company Address */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">{t('footer.address')}</h3>
              <div className="space-y-2">
                <p>Aurora2222 d.o.o.</p>
                <p>Republic of Serbia</p>
                <p>Koce Kapetana 16 Street,</p>
                <p>11000 Belgrade</p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">{t('footer.contact')}</h3>
              <div className="space-y-2">
                <p>Email: office@aurora2222.com</p>
                <p>Tel: +381 11 3440 313</p>
                <p>Fax: +381 11 3442 679</p>
              </div>
            </div>

            {/* Warehouse Location */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">{t('footer.warehouse')}</h3>
              <div className="space-y-2">
                <p>Aurora2222 d.o.o.</p>
                <p>Ulica Viline Vode b.b,</p>
                <p>11000 Belgrade</p>
                <p>Republic of Serbia</p>
              </div>
            </div>

            {/* Medical Enquiries */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">{t('footer.medical')}</h3>
              <div className="space-y-2">
                <p className="break-words">Email: medicalinformation@aurora2222.com</p>
                <p className="mt-4">{t('footer.adverse')}</p>
                <p className="break-words">pharmacovigilance@aurora2222.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;