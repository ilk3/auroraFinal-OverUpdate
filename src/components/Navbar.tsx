import React, { useState } from 'react';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <>
      <div className="fixed top-0 left-0 right-0 p-6 z-50">
        <nav className="max-w-7xl mx-auto rounded-[2rem] bg-white/30 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.17)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.25)] transition-shadow duration-300">
          <div className="px-8">
            <div className="flex items-center justify-between h-16">

              {/* Left navigation items */}
              <div className="hidden md:flex items-center space-x-8 nav-underline">
                <Link to="/" className="text-text-primary hover:text-primary transition-colors duration-200">
                  {t('nav.home')}
                </Link>

                <div className="relative group">
                  <button
                    className="flex items-center space-x-1 text-text-primary hover:text-primary transition-colors duration-200"
                    onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                  >
                    <span>{t('nav.company')}</span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  {isCompanyOpen && (
                    <div className="absolute top-full left-0 w-48 mt-2 rounded-2xl bg-white/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] border border-white/40">
                      <div className="py-2">
                        <Link
                          to="/about"
                          className="block px-4 py-2 text-text-primary hover:bg-white/40 transition-colors duration-200"
                          onClick={() => setIsCompanyOpen(false)}
                        >
                          {t('nav.about')}
                        </Link>

                        {/* ✅ Timeline link */}
                        <Link
                          to="/about#timeline"
                          className="block px-4 py-2 text-text-primary hover:bg-white/40 transition-colors duration-200"
                          onClick={(e) => {
                            setIsCompanyOpen(false);
                            // If already on /about page, scroll manually
                            if (window.location.pathname === '/about') {
                              e.preventDefault();
                              const element = document.getElementById('timeline');
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              }
                            }
                          }}
                        >
                          Timeline
                        </Link>

                        <Link
                          to="/certification"
                          className="block px-4 py-2 text-text-primary hover:bg-white/40 transition-colors duration-200"
                          onClick={() => setIsCompanyOpen(false)}
                        >
                          {t('nav.certification')}
                        </Link>
                        <Link
                          to="/covid"
                          className="block px-4 py-2 text-text-primary hover:bg-white/40 transition-colors duration-200"
                          onClick={() => setIsCompanyOpen(false)}
                        >
                          {t('nav.covid')}
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-8">
                  <Link to="/services" className="text-text-primary hover:text-primary transition-colors duration-200">
                    {t('nav.services')}
                  </Link>

                  <div className="relative">
                    <button
                      className="flex items-center space-x-2 text-text-primary hover:text-primary transition-colors duration-200"
                      onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                    >
                      <Globe className="w-5 h-5" />
                      <span>{language.toUpperCase()}</span>
                    </button>

                    {isLanguageOpen && (
                      <div className="absolute top-full right-0 w-32 mt-2 rounded-2xl bg-white/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] border border-white/40">
                        <div className="py-2">
                          <button
                            onClick={() => {
                              setLanguage('en');
                              setIsLanguageOpen(false);
                            }}
                            className="block w-full px-4 py-2 text-left text-text-primary hover:bg-white/40 transition-colors duration-200"
                          >
                            English
                          </button>
                          <button
                            onClick={() => {
                              setLanguage('sr');
                              setIsLanguageOpen(false);
                            }}
                            className="block w-full px-4 py-2 text-left text-text-primary hover:bg-white/40 transition-colors duration-200"
                          >
                            Serbian
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Logo */}
              <div className="flex-shrink-0">
                <Link to="/">
                  <img
                    src="https://www.dropbox.com/scl/fi/g07jd3vfcfcvnkbv87m1k/logo-aurora.png?rlkey=224oni5ir17f0eu9z11n3yt2m&raw=1"
                    alt="Aurora2222"
                    className="h-16 w-auto"
                  />
                </Link>
              </div>

              {/* Right navigation items */}
              <div className="hidden md:flex items-center space-x-8 nav-underline">
                <Link to="/news" className="text-text-primary hover:text-primary transition-colors duration-200">
                  {t('nav.news')}
                </Link>
                <Link to="/social-responsibility" className="text-text-primary hover:text-primary transition-colors duration-200">
                  {t('nav.social')}
                </Link>
                <Link to="/contact" className="text-text-primary hover:text-primary transition-colors duration-200">
                  {t('nav.contact')}
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6 text-text-primary" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img
                src="https://www.dropbox.com/scl/fi/g07jd3vfcfcvnkbv87m1k/logo-aurora.png?rlkey=224oni5ir17f0eu9z11n3yt2m&raw=1"
                alt="Aurora2222"
                className="h-16 w-auto"
              />
            </Link>
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-6 h-6 text-text-primary" />
            </button>
          </div>

          <div className="space-y-6">
            <Link to="/" className="block text-xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              {t('nav.home')}
            </Link>

            <div className="space-y-4">
              <p className="text-xl font-medium">{t('nav.company')}</p>
              <div className="pl-4 space-y-4">
                <Link to="/about" className="block text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                  {t('nav.about')}
                </Link>

                {/* ✅ Timeline link (mobile) */}
                <Link
                  to="/about#timeline"
                  className="block text-lg"
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    // If already on /about page, scroll manually
                    if (window.location.pathname === '/about') {
                      e.preventDefault();
                      const element = document.getElementById('timeline');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }
                  }}
                >
                  Timeline
                </Link>

                <Link to="/certification" className="block text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                  {t('nav.certification')}
                </Link>
                <Link to="/covid" className="block text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                  {t('nav.covid')}
                </Link>
              </div>
            </div>

            <Link to="/services" className="block text-xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              {t('nav.services')}
            </Link>
            <Link to="/news" className="block text-xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              {t('nav.news')}
            </Link>
            <Link to="/social-responsibility" className="block text-xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              {t('nav.social')}
            </Link>
            <Link to="/contact" className="block text-xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              {t('nav.contact')}
            </Link>

            <div className="pt-4 border-t flex items-center space-x-4">
              <Globe className="w-5 h-5" />
              <button onClick={() => { setLanguage('en'); setIsMobileMenuOpen(false); }}>English</button>
              <span>|</span>
              <button onClick={() => { setLanguage('sr'); setIsMobileMenuOpen(false); }}>Serbian</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
