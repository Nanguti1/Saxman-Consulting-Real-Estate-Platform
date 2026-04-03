'use client';

import { Property } from '@/types';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  onClick: (property: Property) => void;
  index: number;
}

const PropertyCard = ({ property, onClick, index }: PropertyCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      className="glass border border-white/10 rounded-2xl overflow-hidden cursor-pointer relative opacity-0 translate-y-6 transition-all duration-400 hover:-translate-y-6 hover:scale-[1.01] hover:border-blue-400/30"
      style={{
        transitionDelay: `${index * 0.07}s`,
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -6,
        scale: 1.01,
        borderColor: 'rgba(96,165,250,0.3)',
        boxShadow: `
          0 20px 60px rgba(0,0,0,0.4),
          0 0 0 1px rgba(96,165,250,0.15),
          inset 0 1px 0 rgba(255,255,255,0.08)
        `
      }}
      onClick={() => onClick(property)}
    >
      {/* Glow Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-400"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(37,99,235,0.06), transparent 60%)'
        }}
      />

      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        glareColor="#60a5fa"
        glarePosition="all"
        scale={1.02}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        transitionSpeed={2000}
      >
        <div className="relative">
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-green-500/10 flex items-center justify-center">
              <div className="text-white/10 text-6xl font-bold">
                {property.type.charAt(0).toUpperCase()}
              </div>
            </div>
            
            {/* Overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, transparent 40%, rgba(3,11,26,0.8) 100%)'
              }}
            />
            
            {/* Badge */}
            <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-green-500 text-white text-xs font-medium tracking-widest uppercase px-2.5 py-1 rounded-full">
              {property.type}
            </div>
            
            {/* Favorite Button */}
            <button className="absolute top-3 right-3 w-8 h-8 glass border border-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-sm cursor-pointer transition-all duration-200 hover:bg-red-500/20 hover:border-red-500/40">
              <Heart className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <div className="p-5 p-6">
            {/* Price */}
            <div 
              className="text-2xl font-bold mb-1"
              style={{
                fontFamily: 'Syne, sans-serif',
                background: 'linear-gradient(135deg, #60a5fa, #34d399)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {formatPrice(property.price)}
            </div>

            {/* Title */}
            <h3 
              className="text-lg font-semibold mb-1 leading-tight"
              style={{
                fontFamily: 'Syne, sans-serif',
                color: '#f0f6ff',
              }}
            >
              {property.title}
            </h3>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-xs mb-3" style={{ color: 'rgba(150,185,220,0.55)' }}>
              <div 
                className="w-3 h-3 bg-green-400"
                style={{
                  borderRadius: '50% 50% 50% 0',
                  transform: 'rotate(-45deg)',
                  flexShrink: 0,
                }}
              />
              {property.location}
            </div>

            {/* Description */}
            <p 
              className="text-sm mb-4 leading-relaxed"
              style={{
                color: 'rgba(200,220,255,0.75)',
                fontWeight: 300,
              }}
            >
              {property.description || 'Experience luxury living in this exceptional property located in one of Kenya\'s most prestigious areas.'}
            </p>

            {/* Meta */}
            <div className="flex gap-4 pt-3.5 border-t border-white/10">
              <div className="flex items-center gap-1.5 text-sm" style={{ color: 'rgba(150,185,220,0.55)' }}>
                <Bed className="w-4 h-4" />
                <strong style={{ color: 'rgba(200,220,255,0.75)', fontWeight: 500 }}>
                  {property.bedrooms}
                </strong>
                beds
              </div>
              <div className="flex items-center gap-1.5 text-sm" style={{ color: 'rgba(150,185,220,0.55)' }}>
                <Bath className="w-4 h-4" />
                <strong style={{ color: 'rgba(200,220,255,0.75)', fontWeight: 500 }}>
                  {property.bathrooms}
                </strong>
                baths
              </div>
              <div className="flex items-center gap-1.5 text-sm" style={{ color: 'rgba(150,185,220,0.55)' }}>
                <Square className="w-4 h-4" />
                <strong style={{ color: 'rgba(200,220,255,0.75)', fontWeight: 500 }}>
                  {property.area.toLocaleString()}
                </strong>
                m²
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default PropertyCard;
