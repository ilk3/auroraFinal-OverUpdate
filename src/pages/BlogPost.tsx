import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { Calendar, Tag, Users, Share2, ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageGallery } from '../components/ImageGallery';
import { blogPostTranslations } from '../translations/blogPost';
import { blogPostHypoparathyroidismTranslations } from '../translations/blogPostHypoparathyroidism';
import { useLanguage } from '../contexts/LanguageContext';

function BlogPost() {
  const { language } = useLanguage();
  const location = useLocation();
  const isHypoparathyroidism = location.pathname.includes('hypoparathyroidism');
  const translations = isHypoparathyroidism 
    ? blogPostHypoparathyroidismTranslations 
    : blogPostTranslations;
  const t = translations[language as keyof typeof translations];
  const [shareSuccess, setShareSuccess] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    const title = t['article.title'];
    const text = t['content.paragraph1'].substring(0, 100) + '...';

    // Try Web Share API first (works on mobile and some desktop browsers)
    if (typeof navigator.share === 'function') {
      try {
        await navigator.share({
          title: title,
          text: text,
          url: url,
        });
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 2000);
      } catch (err) {
        // User cancelled or error occurred
        console.log('Share cancelled or failed');
      }
    } else {
      // Fallback: Copy URL to clipboard
      try {
        await navigator.clipboard.writeText(url);
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 2000);
      } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = url;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          setShareSuccess(true);
          setTimeout(() => setShareSuccess(false), 2000);
        } catch (err) {
          console.error('Failed to copy URL');
        }
        document.body.removeChild(textArea);
      }
    }
  };

  const galleryImages = isHypoparathyroidism ? [
    {
      url: 'https://www.dropbox.com/scl/fi/h193oou88hbxqy91urqj8/1-Venue-Mesto-odr-avaja.jpeg?rlkey=bv0ei06fseo0nwib1thy8bapi&raw=1',
      alt: t['gallery.image1Alt']
    },
    {
      url: 'https://www.dropbox.com/scl/fi/qzun80et8v9ch1h84di5m/2-Session-Sesija.jpeg?rlkey=ipktd4eeen0j174d1u3kbgwwv&raw=1',
      alt: t['gallery.image2Alt']
    },
    {
      url: 'https://www.dropbox.com/scl/fi/gm698dm6gk7b3svdzu5in/3-Doc-dr-Marko-Stojanovi.jpeg?rlkey=dldpur87gagma0gxybyok7yo9&raw=1',
      alt: t['gallery.image3Alt']
    },
    {
      url: 'https://www.dropbox.com/scl/fi/nex1z394062weif52yfhi/4-Doc-dr-Marko-Buta.jpeg?rlkey=e2ndmpia2okt1kcq81m9mmukb&raw=1',
      alt: t['gallery.image4Alt']
    },
    {
      url: 'https://www.dropbox.com/scl/fi/wropv11w4cv7bddhkj5p0/5-Prof-dr-Maja-or-evi.jpeg?rlkey=aeg05fletvr6bcmonyi16npa7&raw=1',
      alt: t['gallery.image5Alt']
    },
    {
      url: 'https://www.dropbox.com/scl/fi/r2v1she64mrzu499y6ns3/6-Expert-lecturers-Predava-i.jpeg?rlkey=t9l60c4p5y0pd8qxk6b3s1e89&raw=1',
      alt: t['gallery.image6Alt']
    }
  ] : [
    {
      url: 'https://www.dropbox.com/scl/fi/1vmomq16ftdggqs2wwfc5/image1.png?rlkey=gg2bnor495ttszg3wcid1oidc&raw=1',
      alt: t['gallery.image1Alt']
    },
    {
      url: 'https://www.dropbox.com/scl/fi/lfv6554l7n8cwbizfcw34/image2.png?rlkey=loz77zooni9pxvft25g5jjkuo&raw=1',
      alt: t['gallery.image2Alt']
    },
    {
      url: 'https://www.dropbox.com/scl/fi/vxhv47iv6y24ffpoino9x/image3.png?rlkey=98dzckc4jrzm3ep87bpiyk6pk&raw=1',
      alt: t['gallery.image3Alt']
    },
    {
      url: 'https://www.dropbox.com/scl/fi/vxxm1mae2bcbugyd7jzd0/image4.png?rlkey=ew0wzhtekyo8ekf4ywelm89rz&raw=1',
      alt: t['gallery.image4Alt']
    },
    {
      url: 'https://www.dropbox.com/scl/fi/ama43l8x714isyboezk0y/image5.png?rlkey=3d3zdrtnz4140u62zagd39p3u&raw=1',
      alt: t['gallery.image5Alt']
    }
  ];

  return (
    <>
      <div className="rotating-background background-loaded"></div>
      <Navbar />
      
      <section className="pt-32 relative">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll animation="fade">
            <Link 
              to="/news" 
              className="inline-flex items-center text-primary hover:text-primary-light transition-colors duration-200 mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" />
              {t['nav.backToNews']}
            </Link>
          </RevealOnScroll>

          <RevealOnScroll animation="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/90 text-white text-sm font-medium">
                <Tag className="w-4 h-4 mr-2" />
                {t['meta.category']}
              </span>
              <div className="flex items-center text-primary">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{t['meta.date']}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                {t['article.title']}
              </span>
            </h1>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll animation="fade">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={isHypoparathyroidism 
                  ? "https://www.dropbox.com/scl/fi/h193oou88hbxqy91urqj8/1-Venue-Mesto-odr-avaja.jpeg?rlkey=bv0ei06fseo0nwib1thy8bapi&raw=1"
                  : "https://www.dropbox.com/scl/fi/zduz7k6uqixnsh5x09hxt/lode.jpg?rlkey=v7ltsordg6pdtyt4aun4tuuda&raw=1"
                }
                alt={t['article.title']}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center text-white gap-4">
                  <Users className="w-5 h-5" />
                  <span>{t['meta.experts']}</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4">
          <RevealOnScroll animation="fade-up">
            <div className="prose prose-lg">
              <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20">
                <p className="text-lg leading-relaxed mb-6">
                  {t['content.paragraph1']}
                </p>

                {t['content.paragraph2'] && (
                  <p className="text-lg leading-relaxed mb-6">
                    {t['content.paragraph2']}
                  </p>
                )}

                <div className="my-8 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                  <h2 className="text-2xl font-bold mb-4 text-primary">{t['keyFocus.title']}</h2>
                  <p className="text-lg leading-relaxed">
                    {t['keyFocus.content']}
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="fade-up" delay={200}>
            <div className="mt-12 relative z-50">
              <h2 className="text-3xl font-bold mb-8 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                  {t['gallery.title']}
                </span>
              </h2>
              <div className="relative isolate">
                <ImageGallery images={galleryImages} />
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="fade" delay={200}>
            <div className="mt-12 text-center">
              <button 
                onClick={handleShare}
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-light transition-colors duration-200 shadow-lg hover:shadow-xl group"
              >
                {shareSuccess ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    {typeof navigator.share === 'function' ? 'Shared!' : 'Link Copied!'}
                  </>
                ) : (
                  <>
                    <Share2 className="w-5 h-5 mr-2" />
                    {t['share.button']}
                  </>
                )}
              </button>
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="fade-up" delay={400}>
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                  {t['related.title']}
                </span>
              </h2>
              <div className="flex justify-center max-w-4xl mx-auto">
                <div className="backdrop-blur-md bg-white/10 rounded-2xl overflow-hidden border border-white/20 hover-card max-w-md w-full">
                  <div className="flex justify-center">
                    <img
                      src={isHypoparathyroidism 
                        ? "https://www.dropbox.com/scl/fi/zduz7k6uqixnsh5x09hxt/lode.jpg?rlkey=v7ltsordg6pdtyt4aun4tuuda&raw=1"
                        : "https://www.dropbox.com/scl/fi/1vmomq16ftdggqs2wwfc5/image1.png?rlkey=gg2bnor495ttszg3wcid1oidc&raw=1"
                      }
                      alt={t['related.article.title']}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{t['related.article.title']}</h3>
                    <p className="text-sm text-text-secondary mb-4">{t['related.article.date']}</p>
                    <Link 
                      to={isHypoparathyroidism ? "/news/expert-meeting-neuroblastoma" : "/news/hypoparathyroidism-symposium"} 
                      className="text-primary hover:text-primary-light transition-colors duration-200"
                    >
                      {t['related.readMore']}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}

export default BlogPost;