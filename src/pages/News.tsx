import Navbar from '../components/Navbar';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { newsTranslations } from '../translations/news';

function News() {
  const { language } = useLanguage();
  const t = (key: string) => {
    const langTranslations = newsTranslations[language];
    return (langTranslations as any)[key] || key;
  };

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

      {/* Featured Post - New (Hypoparathyroidism) */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll animation="fade-up">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl overflow-hidden border border-white/20 hover:shadow-2xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-[400px] md:h-auto">
                  <img
                    src="https://www.dropbox.com/scl/fi/h193oou88hbxqy91urqj8/1-Venue-Mesto-odr-avaja.jpeg?rlkey=bv0ei06fseo0nwib1thy8bapi&raw=1"
                    alt={t('featured.title')}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/90 text-white text-sm font-medium">
                      <Tag className="w-4 h-4 mr-2" />
                      {t('featured.category')}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center text-primary mb-4">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{t('featured.date')}</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{t('featured.title')}</h2>
                  <p className="text-lg mb-8">{t('featured.excerpt')}</p>
                  <Link 
                    to="/news/hypoparathyroidism-symposium"
                    className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-light transition-colors duration-200 shadow-lg hover:shadow-xl group w-fit"
                  >
                    {t('featured.readMore')}
                    <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Previous Featured Post (Neuroblastoma) */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll animation="fade-up" delay={200}>
            <div className="backdrop-blur-md bg-white/10 rounded-3xl overflow-hidden border border-white/20 hover:shadow-2xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-[400px] md:h-auto">
                  <img
                    src="https://www.dropbox.com/scl/fi/1vmomq16ftdggqs2wwfc5/image1.png?rlkey=gg2bnor495ttszg3wcid1oidc&raw=1"
                    alt={t('previous.title')}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/90 text-white text-sm font-medium">
                      <Tag className="w-4 h-4 mr-2" />
                      {t('previous.category')}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center text-primary mb-4">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{t('previous.date')}</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{t('previous.title')}</h2>
                  <p className="text-lg mb-8">{t('previous.excerpt')}</p>
                  <Link 
                    to="/news/expert-meeting-neuroblastoma"
                    className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-light transition-colors duration-200 shadow-lg hover:shadow-xl group w-fit"
                  >
                    {t('previous.readMore')}
                    <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Recent Posts Grid */}
      

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

export default News;