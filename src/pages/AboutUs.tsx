import React from 'react';
import Navbar from '../components/Navbar';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { Building2, Award, Globe2, Heart, Microscope } from 'lucide-react';
import { Timeline } from '../components/Timeline';
import { useLanguage } from '../contexts/LanguageContext';
import { aboutTranslations } from '../translations/about';
import { translations } from '../translations';

function AboutUs() {
  const { language } = useLanguage();
  const t = (key: string) => aboutTranslations[language][key];
  const mainT = (key: string) => translations[language][key];

  return (
    <>
      <div className="rotating-background background-loaded"></div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 sm:pb-14 md:pb-16 relative px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll animation="fade-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 sm:mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                {t('hero.title')}
              </span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll animation="fade" delay={200}>
            <p className="text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed px-4">
              {t('hero.subtitle')}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16 sm:py-20 md:py-24 relative px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            {/* Left column with text */}
            <RevealOnScroll animation="fade-up">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                    {t('overview.title')}
                  </span>
                </h2>
                <p className="text-base sm:text-lg leading-relaxed">
                  {t('overview.description1')}
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  {t('overview.description2')}
                </p>
              </div>
            </RevealOnScroll>

            {/* Right column with overlapping images */}
            <RevealOnScroll animation="fade" delay={200}>
              <div className="relative mt-8 md:mt-0">
                {/* Main image - Parliament building */}
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
                  <div className="rounded-2xl sm:rounded-[32px] overflow-hidden h-full">
                    <img
                      src="https://www.dropbox.com/scl/fi/n0sri6x6d2gvjardqlmtu/skupstina.jpg?rlkey=vw722fbjaiiwg9gohvrv0sk9s&raw=1"
                      alt="Belgrade Parliament Building"
                      className="w-full h-full object-cover"
                      loading='lazy'
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl sm:rounded-[32px]"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                      <h2 className="text-xl sm:text-2xl font-bold mb-2">{t('overview.location.belgrade')}</h2>
                      <p className="text-sm sm:text-base text-white">{t('overview.location.established')}</p>
                    </div>
                  </div>
                  
                  {/* Overlapping Saint Sava Church image */}
                  <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -right-4 sm:-right-6 md:-right-8 w-[200px] sm:w-[250px] md:w-[300px] h-[150px] sm:h-[175px] md:h-[200px]">
                    <div className="rounded-xl sm:rounded-[16px] overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 h-full">
                      <img
                        src="https://www.dropbox.com/scl/fi/z32fzek7pn7365kubyuta/belgrade-night.jpg?rlkey=qddunpsowi10ggydj2xbt2hxp&raw=1"
                        alt="Saint Sava Church at Night"
                        className="w-full h-full object-cover"
                        loading='lazy'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-20 md:py-24 relative px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            {/* Mission */}
            <RevealOnScroll animation="fade-up">
              <div className="backdrop-blur-md bg-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20">
                <div className="flex items-center mb-4 sm:mb-6">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary mr-3 sm:mr-4" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">{t('mission.title')}</h2>
                </div>
                <p className="text-base sm:text-lg leading-relaxed">
                  {t('mission.description')}
                </p>
              </div>
            </RevealOnScroll>

            {/* Vision */}
            <RevealOnScroll animation="fade-up" delay={200}>
              <div className="backdrop-blur-md bg-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20">
                <div className="flex items-center mb-4 sm:mb-6">
                  <Globe2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary mr-3 sm:mr-4" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">{t('vision.title')}</h2>
                </div>
                <p className="text-base sm:text-lg leading-relaxed">
                  {t('vision.description')}
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-transparent to-white/5 relative px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll animation="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                {t('values.title')}
              </span>
            </h2>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Excellence */}
            <RevealOnScroll animation="fade-up" delay={0}>
              <div className="backdrop-blur-md bg-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 hover:shadow-xl transition-shadow duration-300">
                <Award className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 sm:mb-4">{t('values.excellence.title')}</h3>
                <p className="text-base sm:text-lg leading-relaxed">
                  {t('values.excellence.description')}
                </p>
              </div>
            </RevealOnScroll>

            {/* Innovation */}
            <RevealOnScroll animation="fade-up" delay={200}>
              <div className="backdrop-blur-md bg-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 hover:shadow-xl transition-shadow duration-300">
                <Microscope className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 sm:mb-4">{t('values.innovation.title')}</h3>
                <p className="text-base sm:text-lg leading-relaxed">
                  {t('values.innovation.description')}
                </p>
              </div>
            </RevealOnScroll>

            {/* Integrity */}
            <RevealOnScroll animation="fade-up" delay={400}>
              <div className="backdrop-blur-md bg-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 hover:shadow-xl transition-shadow duration-300 sm:col-span-2 md:col-span-1">
                <Building2 className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 sm:mb-4">{t('values.integrity.title')}</h3>
                <p className="text-base sm:text-lg leading-relaxed">
                  {t('values.integrity.description')}
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-20 md:py-24 relative px-4 sm:px-6" >
        <div className="max-w-7xl mx-auto" id='timeline'>
          <RevealOnScroll animation="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                {t('journey.title')}
              </span>
            </h2>
          </RevealOnScroll>

          <Timeline />
          <br></br>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer w-full text-white py-12 sm:py-16 relative px-4 sm:px-6">
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            {/* Logo Column */}
            <div>
              <img
                src="https://www.dropbox.com/scl/fi/rngw5tjwo0s4g13zp5oa2/aurora-white.png?rlkey=kh5yom49ff57rkyeniqhmi1m8&raw=1"
                alt="Aurora2222"
                className="h-24 sm:h-30 w-auto mb-6"
              />
            </div>

            {/* Company Address */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-primary">{mainT('footer.address')}</h3>
              <div className="space-y-1 sm:space-y-2">
                <p className="text-sm sm:text-base">Aurora2222 d.o.o.</p>
                <p className="text-sm sm:text-base">Republic of Serbia</p>
                <p className="text-sm sm:text-base">Koce Kapetana 16 Street,</p>
                <p className="text-sm sm:text-base">11000 Belgrade</p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-primary">{mainT('footer.contact')}</h3>
              <div className="space-y-1 sm:space-y-2">
                <p className="text-sm sm:text-base">Email: office@aurora2222.com</p>
                <p className="text-sm sm:text-base">Tel: +381 11 3440 313</p>
                <p className="text-sm sm:text-base">Fax: +381 11 3442 679</p>
              </div>
            </div>

            {/* Warehouse Location */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-primary">{mainT('footer.warehouse')}</h3>
              <div className="space-y-1 sm:space-y-2">
                <p className="text-sm sm:text-base">Aurora2222 d.o.o.</p>
                <p className="text-sm sm:text-base">Ulica Viline Vode b.b,</p>
                <p className="text-sm sm:text-base">11000 Belgrade</p>
                <p className="text-sm sm:text-base">Republic of Serbia</p>
              </div>
            </div>

            {/* Medical Enquiries */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-primary">{mainT('footer.medical')}</h3>
              <div className="space-y-1 sm:space-y-2">
                <p className="text-sm sm:text-base break-words">Email: medicalinformation@aurora2222.com</p>
                <p className="text-sm sm:text-base mt-4">{mainT('footer.adverse')}</p>
                <p className="text-sm sm:text-base break-words">pharmacovigilance@aurora2222.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default AboutUs;