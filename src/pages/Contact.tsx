import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Map } from '../components/Map';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { useLanguage } from '../contexts/LanguageContext';
import { contactTranslations } from '../translations/contact';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language } = useLanguage();
  const t = contactTranslations[language as keyof typeof contactTranslations] || contactTranslations.en;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_egtfx9m',
        'template_znhwnj7',
        {
          to_email: 'ilicfilip28@gmail.com',
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message
        },
        'm9B8YxO-fCZ1QI5-x'
      );

      toast.success(t.form.success);
      setFormData({ firstName: '', lastName: '', phone: '', email: '', message: '' });
    } catch (error) {
      toast.error(t.form.error);
      console.error('Email error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="rotating-background background-loaded" />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll animation="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                {t.hero.title}
              </span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll animation="fade" delay={200}>
            <p className="text-xl text-center max-w-3xl mx-auto leading-relaxed">{t.hero.subtitle}</p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <RevealOnScroll animation="fade-up">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 text-center">
              <MapPin className="w-12 h-12 text-primary mb-6 mx-auto" />
              <h3 className="text-2xl font-bold mb-4">{t.info.address.title}</h3>
              <p>{t.info.address.line1}</p>
              <p>{t.info.address.line2}</p>
              <p>{t.info.address.line3}</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll animation="fade-up" delay={200}>
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 text-center">
              <Phone className="w-12 h-12 text-primary mb-6 mx-auto" />
              <h3 className="text-2xl font-bold mb-4">{t.info.phone.title}</h3>
              <p>{t.info.phone.tel}</p>
              <p>{t.info.phone.fax}</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll animation="fade-up" delay={400}>
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 text-center">
              <Mail className="w-12 h-12 text-primary mb-6 mx-auto" />
              <h3 className="text-2xl font-bold mb-4">{t.info.email.title}</h3>
              <p>{t.info.email.main}</p>
              <p>{t.info.email.medical}</p>
              <p>{t.info.email.pharma}</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          <RevealOnScroll animation="fade-up">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                  {t.form.title}
                </span>
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      {t.form.firstName}
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      {t.form.lastName}
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    {t.form.phone}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t.form.email}
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t.form.message}
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center px-6 py-3 bg-primary text-white rounded-full transition-all duration-200 shadow-lg ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-light'
                  }`}
                >
                  {isSubmitting ? t.form.sending : t.form.submit}
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="fade" delay={200}>
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 h-full">
              <h2 className="text-3xl font-bold mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                  {t.map.title}
                </span>
              </h2>
              <Map center={[44.81878, 20.45684]} popupText="Aurora2222 Office - Koce Kapetana 16" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Warehouse Location */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll animation="fade-up">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-8 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                  {t.warehouse.title}
                </span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold">Aurora2222 d.o.o.</h3>
                  <p>{t.warehouse.address1}</p>
                  <p>{t.warehouse.city}</p>
                  <p>{t.warehouse.country}</p>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Map center={[44.8218531, 20.4844335]} popupText="Aurora2222 Warehouse - Viline Vode" height="300px" />
                </div>
              </div>
            </div>
          </RevealOnScroll>
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
              <h3 className="text-lg font-semibold mb-4 text-primary">Company Address</h3>
              <div className="space-y-2">
                <p>Aurora2222 d.o.o.</p>
                <p>Republic of Serbia</p>
                <p>Koce Kapetana 16 Street,</p>
                <p>11000 Belgrade</p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Contact Information</h3>
              <div className="space-y-2">
                <p>Email: office@aurora2222.com</p>
                <p>Tel: +381 11 3440 313</p>
                <p>Fax: +381 11 3442 679</p>
              </div>
            </div>

            {/* Warehouse Location */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Warehouse Location</h3>
              <div className="space-y-2">
                <p>Aurora2222 d.o.o.</p>
                <p>Ulica Viline Vode b.b,</p>
                <p>11000 Belgrade</p>
                <p>Republic of Serbia</p>
              </div>
            </div>

            {/* Medical Enquiries */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Medical Enquiries</h3>
              <div className="space-y-2">
                <p className="break-words">Email: medicalinformation@aurora2222.com</p>
                <p className="mt-4">Adverse reaction reporting:</p>
                <p className="break-words">pharmacovigilance@aurora2222.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Toast notifications */}
      <Toaster position="top-right" />
    </>
  );
}

export default Contact;
