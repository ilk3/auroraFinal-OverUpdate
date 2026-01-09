import React from 'react';
import Navbar from '../components/Navbar';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { useLanguage } from '../contexts/LanguageContext';
import { covidTranslations } from '../translations/covid';
import { Check } from 'lucide-react';

function Covid() {
  const { language } = useLanguage();
  const t = (key: string) => covidTranslations[language][key];

  return (
    <>
      <div className="rotating-background background-loaded"></div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll animation="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                {t('hero.title')}
              </span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll animation="fade" delay={200}>
            <p className="text-xl text-center max-w-4xl mx-auto leading-relaxed">
              {t('intro.text')}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-32">
            {/* Rapid Antigen Test */}
            <RevealOnScroll animation="fade-up">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-text-primary">
                    {t('antigen.title')}
                  </h2>
                  <p className="text-lg leading-relaxed">
                    {t('antigen.description')}
                  </p>
                  <ul className="space-y-3">
                    {t('antigen.features').map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3 transform hover:translate-x-2 transition-transform duration-300">
                        <Check className="w-5 h-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary-purple/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-500 blur-xl"></div>
                  <div className="relative max-w-md mx-auto transform hover:scale-105 transition-transform duration-500">
                    <img
                      src="https://www.dropbox.com/scl/fi/8umgdmjtvaml6z0rqbc93/Poster-BOSON-1.png?rlkey=ar5ruoi6o13bdq77w6c11bwhv&raw=1"
                      alt="Rapid SARS-CoV-2 Antigen Test"
                      className="w-full rounded-3xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Antibody Test */}
            <RevealOnScroll animation="fade-up">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary-purple/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-500 blur-xl"></div>
                  <div className="relative max-w-md mx-auto transform hover:scale-105 transition-transform duration-500">
                    <img
                      src="https://www.dropbox.com/scl/fi/jv3805hkvffo8r8twbmom/Poster-LOMINA-1.png?rlkey=o4de3w2rg9i7d7vkau1cs2631&raw=1"
                      alt="COVID-19 Antibody Test"
                      className="w-full rounded-3xl shadow-2xl"
                    />
                  </div>
                </div>
                <div className="order-1 md:order-2 space-y-6">
                  <h2 className="text-3xl font-bold text-text-primary">
                    {t('antibody.title')}
                  </h2>
                  <p className="text-lg leading-relaxed">
                    {t('antibody.description')}
                  </p>
                  <ul className="space-y-3">
                    {t('antibody.features').map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3 transform hover:translate-x-2 transition-transform duration-300">
                        <Check className="w-5 h-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealOnScroll>

            {/* Oral Fluid Test */}
            <RevealOnScroll animation="fade-up">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-text-primary">
                    {t('oral.title')}
                  </h2>
                  <p className="text-lg leading-relaxed">
                    {t('oral.description')}
                  </p>
                  <ul className="space-y-3">
                    {t('oral.features').map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3 transform hover:translate-x-2 transition-transform duration-300">
                        <Check className="w-5 h-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary-purple/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-500 blur-xl"></div>
                  <div className="relative max-w-md mx-auto transform hover:scale-105 transition-transform duration-500">
                    <img
                      src="https://www.dropbox.com/scl/fi/wwhl77v6uifky7yenhxza/Poster-JUSCEK-1.png?rlkey=3zd514x8upjvn6oiaawrxmyud&raw=1"
                      alt="COVID-19 Oral Fluid Test"
                      className="w-full rounded-3xl shadow-2xl"
                    />
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
                src="https://raw.githubusercontent.com/ilk3/slike/refs/heads/main/aurora-white.png"
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

export default Covid;