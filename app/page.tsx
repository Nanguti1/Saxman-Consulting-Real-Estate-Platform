'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { fetchProperties } from '@/lib/api';
import { Property } from '@/types';
import Hero from '@/components/Hero';
import Featured from '@/components/Featured';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTA from '@/components/CTA';
import Modal from '@/components/Modal';

export default function Home() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

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
      <main>
        <Hero />
        
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
};
