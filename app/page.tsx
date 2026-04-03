'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Featured from '@/components/Featured';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal';
import { fetchProperties } from '@/lib/api';
import { Property } from '@/types';

export default function Home() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: propertiesData, isLoading, error } = useQuery({
    queryKey: ['properties'],
    queryFn: fetchProperties,
  });

  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProperty(null), 300);
  };

  // Page load animation
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-blue-950 flex items-center justify-center">
        <motion.div
          className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-950 text-blue-100 overflow-x-hidden">
      <Header />
      
      <main>
        <Hero />
        
        {/* Stats Section */}
        <section className="px-6 py-6" style={{ paddingTop: '1.5rem', paddingBottom: '0.5rem' }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-4 gap-px glass border border-white/10 rounded-2xl overflow-hidden">
              <div className="glass p-6 text-center transition-colors duration-250 hover:bg-white/8">
                <span className="block font-bold text-2xl mb-0.5" style={{ fontFamily: 'Syne, sans-serif', background: 'linear-gradient(135deg, #60a5fa, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>
                  1,200+
                </span>
                <span className="block text-xs font-light tracking-wide" style={{ color: 'rgba(150,185,220,0.55)', marginTop: '0.2rem' }}>
                  Active Listings
                </span>
              </div>
              <div className="glass p-6 text-center transition-colors duration-250 hover:bg-white/8">
                <span className="block font-bold text-2xl mb-0.5" style={{ fontFamily: 'Syne, sans-serif', background: 'linear-gradient(135deg, #60a5fa, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>
                  850+
                </span>
                <span className="block text-xs font-light tracking-wide" style={{ color: 'rgba(150,185,220,0.55)', marginTop: '0.2rem' }}>
                  Happy Clients
                </span>
              </div>
              <div className="glass p-6 text-center transition-colors duration-250 hover:bg-white/8">
                <span className="block font-bold text-2xl mb-0.5" style={{ fontFamily: 'Syne, sans-serif', background: 'linear-gradient(135deg, #60a5fa, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>
                  47
                </span>
                <span className="block text-xs font-light tracking-wide" style={{ color: 'rgba(150,185,220,0.55)', marginTop: '0.2rem' }}>
                  Cities Covered
                </span>
              </div>
              <div className="glass p-6 text-center transition-colors duration-250 hover:bg-white/8">
                <span className="block font-bold text-2xl mb-0.5" style={{ fontFamily: 'Syne, sans-serif', background: 'linear-gradient(135deg, #60a5fa, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>
                  12 Yrs
                </span>
                <span className="block text-xs font-light tracking-wide" style={{ color: 'rgba(150,185,220,0.55)', marginTop: '0.2rem' }}>
                  Of Excellence
                </span>
              </div>
            </div>
          </div>
        </section>
        
        {isLoading ? (
          <section className="py-20 px-6 flex items-center justify-center">
            <motion.div
              className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </section>
        ) : error ? (
          <section className="py-20 px-6 text-center">
            <p className="text-red-400">Failed to load properties. Please try again.</p>
          </section>
        ) : (
          <Featured 
            properties={propertiesData?.data || []} 
            onPropertyClick={handlePropertyClick}
          />
        )}
        
        <WhyChooseUs />
        <CTA />
      </main>

      <Footer />

      {/* Property Modal */}
      <Modal
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Floating gradient orbs for ambient effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(37,99,235,0.05), transparent 65%)',
            top: '25%',
            left: '25%',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(16,185,129,0.05), transparent 65%)',
            bottom: '25%',
            right: '25%',
          }}
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
}
