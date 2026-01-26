import React from 'react';
import Navbar from '../components/Navbar';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { Heart, Shield, Users, Lightbulb, Target, HandHeart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { socialTranslations } from '../translations/social';

function SocialResponsibility() {
  const { language } = useLanguage();
  const t = socialTranslations[language];

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
                {t['hero.title']}
              </span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll animation="fade" delay={200}>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                {t['hero.tagline']}
              </p>
              <p className="text-lg leading-relaxed">
                {t['hero.subtitle']}
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <RevealOnScroll animation="fade-up">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Heart className="w-8 h-8 text-primary" />
                  <h2 className="text-4xl font-bold text-text-primary">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                      {t['impact.title']}
                    </span>
                  </h2>
                </div>
                <p className="text-lg leading-relaxed">
                  {t['impact.description']}
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fade" delay={200}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80"
                  alt="Community Impact"
                  className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Ethical Standards Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll animation="fade-up">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                {t['ethics.title']}
              </span>
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-primary" />,
                title: t['ethics.integrity.title'],
                description: t['ethics.integrity.description']
              },
              {
                icon: <Target className="w-12 h-12 text-primary" />,
                title: t['ethics.principles.title'],
                description: t['ethics.principles.description']
              },
              {
                icon: <HandHeart className="w-12 h-12 text-primary" />,
                title: t['ethics.care.title'],
                description: t['ethics.care.description']
              }
            ].map((item, index) => (
              <RevealOnScroll key={index} animation="fade-up" delay={index * 200}>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    {item.icon}
                    <h3 className="text-2xl font-bold mt-4 mb-2">{item.title}</h3>
                    <p className="text-lg">{item.description}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Entrepreneurial Spirit Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <RevealOnScroll animation="fade" delay={200}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                  alt="Innovation and Partnership"
                  className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-up">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Lightbulb className="w-8 h-8 text-primary" />
                  <h2 className="text-4xl font-bold text-text-primary">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                      {t['spirit.title']}
                    </span>
                  </h2>
                </div>
                <p className="text-lg leading-relaxed">
                  {t['spirit.description']}
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Patient Focus Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <RevealOnScroll animation="fade-up">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Users className="w-8 h-8 text-primary" />
                  <h2 className="text-4xl font-bold text-text-primary">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                      {t['patient.title']}
                    </span>
                  </h2>
                </div>
                <p className="text-lg leading-relaxed">
                  {t['patient.description']}
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fade" delay={200}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=800&q=80"
                  alt="Patient Care"
                  className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                />
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
              <h3 className="text-lg font-semibold mb-4 text-primary">{t['footer.address']}</h3>
              <div className="space-y-2">
                <p>Aurora2222 d.o.o.</p>
                <p>Republic of Serbia</p>
                <p>Koce Kapetana 16 Street,</p>
                <p>11000 Belgrade</p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">{t['footer.contact']}</h3>
              <div className="space-y-2">
                <p>Email: office@aurora2222.com</p>
                <p>Tel: +381 11 3440 313</p>
                <p>Fax: +381 11 3442 679</p>
              </div>
            </div>

            {/* Warehouse Location */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">{t['footer.warehouse']}</h3>
              <div className="space-y-2">
                <p>Aurora2222 d.o.o.</p>
                <p>Ulica Viline Vode b.b,</p>
                <p>11000 Belgrade</p>
                <p>Republic of Serbia</p>
              </div>
            </div>

            {/* Medical Enquiries */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">{t['footer.medical']}</h3>
              <div className="space-y-2">
                <p className="break-words">Email: medicalinformation@aurora2222.com</p>
                <p className="mt-4">{t['footer.adverse']}</p>
                <p className="break-words">pharmacovigilance@aurora2222.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default SocialResponsibility;