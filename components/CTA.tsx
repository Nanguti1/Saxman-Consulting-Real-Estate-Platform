'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';

const CTA = () => {
  return (
    <section id="cta" className="relative py-24 px-6 bg-blue-950 overflow-hidden">
      {/* Background Glow */}
      <div 
        className="absolute w-96 h-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(ellipse, rgba(37,99,235,0.18) 0%, rgba(16,185,129,0.1) 40%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8, 
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        {/* CTA Box */}
        <div className="glass border border-blue-400/20 rounded-3xl p-16 relative overflow-hidden">
          {/* Background Gradient */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(37,99,235,0.06), rgba(16,185,129,0.04))',
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Label */}
            <p className="text-green-400 text-xs font-medium tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
              Take The Next Step
            </p>

            {/* Title */}
            <h2 
              className="font-bold leading-tight tracking-tight mb-4"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                letterSpacing: '-0.03em',
                lineHeight: '1.15',
              }}
            >
              Ready to Find Your<br />
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Dream Property?
              </span>
            </h2>

            {/* Text */}
            <p 
              className="font-light mb-8"
              style={{
                fontSize: '1rem',
                color: 'rgba(200,220,255,0.75)',
                fontWeight: 300,
                lineHeight: 1.7,
              }}
            >
              Let our expert team guide you through every step — from search to keys in hand. Your future home is waiting.
            </p>

            {/* CTA Button */}
            <motion.a
              href="#properties"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-full px-8 py-3.5 font-medium transition-all duration-350"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '1rem',
                fontWeight: 500,
                letterSpacing: '0.01em',
                textDecoration: 'none',
              }}
              whileHover={{ 
                y: -2,
                scale: 1.03,
                boxShadow: "0 10px 40px rgba(37,99,235,0.5), 0 0 30px rgba(16,185,129,0.25)"
              }}
              transition={{ duration: 0.35 }}
            >
              Get Started
              <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center transition-transform duration-250">
                <ArrowRight className="w-3 h-3 text-white" />
              </span>
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-sm">
            <Phone className="w-5 h-5 text-blue-300" />
          </div>
          <div className="text-blue-100">
            <div className="text-sm text-blue-300/55 font-light mb-0.5">Call Us</div>
            <div className="font-semibold">+254 700 123 456</div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-sm">
            <Mail className="w-5 h-5 text-blue-300" />
          </div>
          <div className="text-blue-100">
            <div className="text-sm text-blue-300/55 font-light mb-0.5">Email Us</div>
            <div className="font-semibold">hello@saxmanconsulting.co.ke</div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-sm">
            <MapPin className="w-5 h-5 text-blue-300" />
          </div>
          <div className="text-blue-100">
            <div className="text-sm text-blue-300/55 font-light mb-0.5">Visit Us</div>
            <div className="font-semibold">Upper Hill, Nairobi, Kenya</div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-sm">
            <Clock className="w-5 h-5 text-blue-300" />
          </div>
          <div className="text-blue-100">
            <div className="text-sm text-blue-300/55 font-light mb-0.5">Hours</div>
            <div className="font-semibold">Mon–Sat: 8am – 6pm EAT</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
