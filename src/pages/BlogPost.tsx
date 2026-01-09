import React from 'react';
import Navbar from '../components/Navbar';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { Calendar, Tag, Users, Share2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageGallery } from '../components/ImageGallery';
import { blogPostTranslations } from '../translations/blogPost';
import { useLanguage } from '../contexts/LanguageContext';

function BlogPost() {
  const { language } = useLanguage();
  const t = blogPostTranslations[language as keyof typeof blogPostTranslations];

  const galleryImages = [
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
    },
    {
      url: 'https://www.dropbox.com/scl/fi/vkomf6wqrukyu94akm4nz/lecture.jpg?rlkey=m62s69r1sn4bll4o2gp2hf5d7&raw=1',
      alt: t['gallery.imageLectureAlt']
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
                src="https://www.dropbox.com/scl/fi/zduz7k6uqixnsh5x09hxt/lode.jpg?rlkey=v7ltsordg6pdtyt4aun4tuuda&raw=1"
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

                <p className="text-lg leading-relaxed mb-6">
                  {t['content.paragraph2']}
                </p>

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
              <button className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-light transition-colors duration-200 shadow-lg hover:shadow-xl group">
                <Share2 className="w-5 h-5 mr-2" />
                {t['share.button']}
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
              <div className="grid md:grid-cols-2 gap-8">
                <div className="backdrop-blur-md bg-white/10 rounded-2xl overflow-hidden border border-white/20 hover-card">
                  <img
                    src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80"
                    alt={t['related.article1.title']}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{t['related.article1.title']}</h3>
                    <p className="text-sm text-text-secondary mb-4">{t['related.article1.date']}</p>
                    <Link to="#" className="text-primary hover:text-primary-light transition-colors duration-200">
                      {t['related.readMore']}
                    </Link>
                  </div>
                </div>
                <div className="backdrop-blur-md bg-white/10 rounded-2xl overflow-hidden border border-white/20 hover-card">
                  <img
                    src="https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=800&q=80"
                    alt={t['related.article2.title']}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{t['related.article2.title']}</h3>
                    <p className="text-sm text-text-secondary mb-4">{t['related.article2.date']}</p>
                    <Link to="#" className="text-primary hover:text-primary-light transition-colors duration-200">
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