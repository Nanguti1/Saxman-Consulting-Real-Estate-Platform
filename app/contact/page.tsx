'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+254 722 177343'],
      action: 'Call us'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['saxmangroup@gmail.com'],
      action: 'Send email'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['104 Riverside Drive, Nairobi, Kenya'],
      action: 'Get directions'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon - Fri: 8:00 AM - 5:30 PM', 'Sat: 9:00 AM - 2:00 PM', 'Sunday: Closed'],
      action: 'Schedule visit'
    }
  ];

  return (
    <div className="min-h-screen bg-blue-950 text-blue-100">
      {/* Hero Section */}
      <section
        className="border-b border-slate-200 bg-cover bg-center px-6"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.88), rgba(239, 246, 255, 0.88)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')"
        }}
      >
        <div className="mx-auto flex h-[140px] max-w-screen-2xl items-end pb-7">
          <motion.h1
            className="text-2xl md:text-3xl font-bold text-slate-900"
            style={{ fontFamily: 'Syne, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="glass border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-xl space-y-8">
            <div>
              <p className="text-sm uppercase tracking-widest text-blue-300 mb-2">Contact Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                Get in Touch with Saxman Consulting
              </h2>
              <p className="text-blue-200 leading-relaxed">
                Whether you&apos;re looking to buy, rent, or manage a property, our team is ready to assist you. Visit our office or reach out via the details below:
              </p>
            </div>

            <div className="space-y-2 text-blue-200">
              <p><strong>Physical Address:</strong> 104 Riverside Drive, Nairobi, Kenya.</p>
              <p><strong>Phone Number:</strong> +254 722 177343.</p>
              <p><strong>Email Address:</strong> saxmangroup@gmail.com.</p>
              <p><strong>Official Website:</strong> www.saxmanconsulting.co.ke.</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Office Operating Hours</h3>
              <ul className="space-y-2 text-blue-200 list-disc list-inside">
                <li>Monday – Friday: 8:00 AM – 5:30 PM</li>
                <li>Saturday: 9:00 AM – 2:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Connect With Us Online</h3>
              <p className="text-blue-200 mb-3">Follow us for the latest property listings and market updates:</p>
              <ul className="space-y-2 text-blue-200 list-disc list-inside">
                <li>
                  Facebook:{' '}
                  <a href="https://web.facebook.com/saxmanconsulting/" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-200 underline">
                    Saxman Consulting Nairobi
                  </a>
                </li>
                <li>
                  BuyRentKenya:{' '}
                  <a href="https://www.buyrentkenya.com/estate-agent/saxman-group" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-200 underline">
                    View Our Latest Listings
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="glass border border-white/10 rounded-2xl p-6 text-center backdrop-blur-xl hover:bg-white/5 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-blue-300 text-sm">{detail}</p>
                  ))}
                </div>
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300">
                  {info.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
                <h2 
                  className="text-3xl font-bold mb-6"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    Send us a Message
                  </span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-blue-300 mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-blue-300 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-blue-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="+254 700 123 456"
                    />
                  </div>

                  <div>
                    <label className="block text-blue-300 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Map Placeholder */}
              <div className="glass border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl h-96">
                <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-green-900/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                    <p className="text-blue-300 mb-2">Interactive Map</p>
                    <p className="text-blue-400 text-sm">Westlands, Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="glass border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
                <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                  <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    Quick Response
                  </span>
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                    <MessageSquare className="w-6 h-6 text-blue-400 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Live Chat Available</p>
                      <p className="text-blue-300 text-sm">Chat with our agents in real-time</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                    <Clock className="w-6 h-6 text-blue-400 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Average Response Time</p>
                      <p className="text-blue-300 text-sm">Within 2 hours during business hours</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                  <p className="text-blue-300 text-sm">
                    <strong>Emergency?</strong> For urgent property matters, call our hotline: 
                    <span className="text-blue-400 font-medium"> +254 700 123 456</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
