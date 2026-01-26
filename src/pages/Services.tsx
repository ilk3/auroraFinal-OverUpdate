import React from 'react';
import Navbar from '../components/Navbar';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { Pill, Stethoscope, ClipboardList, Building2, Users, HeartPulse, Microscope, FlaskRound as Flask, Brain, Heart, Syringe, Activity } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { servicesTranslations } from '../translations/services';

function Services() {
  const { language } = useLanguage();
  const t = (key: string) => servicesTranslations[language][key];

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
            <p className="text-xl text-center max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Unlicensed Medicines Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <RevealOnScroll animation="fade-up">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Pill className="w-8 h-8 text-primary" />
                  <h2 className="text-4xl font-bold text-text-primary">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                      {t('unlicensed.title')}
                    </span>
                  </h2>
                </div>
                <p className="text-lg leading-relaxed">
                  {t('unlicensed.description')}
                </p>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
                  <h3 className="text-xl font-semibold mb-4">{t('unlicensed.areas.title')}</h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {t('therapeutic.areas').map((area, index) => (
                      <RevealOnScroll key={index} animation="fade-up" delay={index * 100}>
                        <div className="flex flex-col items-center justify-center text-center text-primary min-h-[5rem] p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200 border border-white/10">
                          {getTherapeuticAreaIcon(index)}
                          <span className="text-xs font-medium leading-tight mt-2">{area.name}</span>
                        </div>
                      </RevealOnScroll>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-left" delay={200}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80"
                  alt="Pharmaceutical Research"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Consulting Services Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll animation="fade-up">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                {t('consulting.title')}
              </span>
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {t('consulting.services').map((service, index) => (
              <RevealOnScroll key={index} animation="fade-up" delay={index * 200}>
                <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 hover-card">
                  <div className="flex flex-col items-center text-center">
                    {getConsultingIcon(index)}
                    <h3 className="text-2xl font-bold mt-6 mb-4">{service.title}</h3>
                    <p className="text-lg">{service.description}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Market Access Programs Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <RevealOnScroll animation="fade-right" delay={200}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                  alt="Market Access"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-up">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Users className="w-8 h-8 text-primary" />
                  <h2 className="text-4xl font-bold text-text-primary">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                      {t('market.title')}
                    </span>
                  </h2>
                </div>
                <p className="text-lg leading-relaxed">
                  {t('market.description')}
                </p>
                
                <div className="space-y-4">
                  {t('market.features').map((feature, index) => (
                    <div key={index} className="backdrop-blur-md bg-white/10 rounded-lg p-6 border border-white/20">
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  ))}
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

// Helper function to get the appropriate icon for therapeutic areas
function getTherapeuticAreaIcon(index: number) {
  const icons = [
    <Microscope className="w-8 h-8" />,
    <HeartPulse className="w-8 h-8" />,
    <Flask className="w-8 h-8" />,
    <Heart className="w-8 h-8" />,
    <Syringe className="w-8 h-8" />,
    <Brain className="w-8 h-8" />,
    <Activity className="w-8 h-8" />,
    <Pill className="w-8 h-8" />
  ];
  return icons[index];
}

// Helper function to get the appropriate icon for consulting services
function getConsultingIcon(index: number) {
  const icons = [
    <ClipboardList className="w-12 h-12 text-primary" />,
    <Building2 className="w-12 h-12 text-primary" />,
    <Stethoscope className="w-12 h-12 text-primary" />
  ];
  return icons[index];
}

export default Services;