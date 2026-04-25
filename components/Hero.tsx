'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';

const Hero = () => {
  const [searchData, setSearchData] = useState({
    location: '',
    type: 'Any Type',
    budget: 'Any Budget'
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search data:', searchData);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 pt-20 md:pt-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2360a5fa' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.15), transparent 70%)',
          top: '-150px',
          right: '-100px',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(16,185,129,0.12), transparent 70%)',
          bottom: '-50px',
          left: '-80px',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-300 text-sm font-medium tracking-widest uppercase">
                Kenya's Premier Real Estate Platform
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h1 
                className="font-bold leading-tight mb-4"
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  letterSpacing: '-0.03em',
                  lineHeight: '1.1',
                }}
              >
                Find Your
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  Future Home
                </span>
                <br />
                in Kenya
              </h1>
              
              <p 
                className="text-blue-200/80 font-light text-lg leading-relaxed"
                style={{
                  maxWidth: '500px',
                }}
              >
                Discover curated premium properties across Nairobi, Mombasa, Kisumu and beyond — verified listings, trusted agents, exceptional living.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Background Glow */}
              <div 
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.2), transparent 70%)',
                  filter: 'blur(40px)',
                }}
              />
              
              {/* Main Image Container */}
              <div className="relative glass rounded-2xl overflow-hidden border border-white/10">
                <div className="relative h-96">
                  {/* Background Image */}
                  <img 
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                    alt="Luxury Property"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay for better text readability */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(3,11,26,0.4) 0%, rgba(3,11,26,0.2) 50%, rgba(3,11,26,0.4) 100%)'
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Search Bar - Full Width */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <form onSubmit={handleSearch} className="glass border border-white/10 rounded-2xl p-2 backdrop-blur-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
              {/* Location Field */}
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300/60" />
                <input
                  type="text"
                  placeholder="Location"
                  value={searchData.location}
                  onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 bg-transparent border-none outline-none text-blue-100 placeholder-blue-300/40"
                />
              </div>
              
              {/* Property Type Field */}
              <div className="relative">
                <Home className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300/60" />
                <select
                  value={searchData.type}
                  onChange={(e) => setSearchData({ ...searchData, type: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 bg-transparent border-none outline-none text-blue-100 appearance-none cursor-pointer"
                >
                  <option value="Any Type" className="bg-blue-950">Any Type</option>
                  <option value="Apartment" className="bg-blue-950">Apartment</option>
                  <option value="Villa" className="bg-blue-950">Villa</option>
                  <option value="Townhouse" className="bg-blue-950">Townhouse</option>
                  <option value="Land" className="bg-blue-950">Land</option>
                  <option value="Commercial" className="bg-blue-950">Commercial</option>
                </select>
              </div>
              
              {/* Budget Field */}
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300/60" />
                <select
                  value={searchData.budget}
                  onChange={(e) => setSearchData({ ...searchData, budget: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 bg-transparent border-none outline-none text-blue-100 appearance-none cursor-pointer"
                >
                  <option value="Any Budget" className="bg-blue-950">Any Budget</option>
                  <option value="Under KES 5M" className="bg-blue-950">Under KES 5M</option>
                  <option value="KES 5M – 15M" className="bg-blue-950">KES 5M – 15M</option>
                  <option value="KES 15M – 40M" className="bg-blue-950">KES 15M – 40M</option>
                  <option value="KES 40M+" className="bg-blue-950">KES 40M+</option>
                </select>
              </div>
              
              {/* Search Button */}
              <motion.button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-xl px-8 py-4 font-medium flex items-center justify-center gap-2 transition-all duration-300"
                whileHover={{ 
                  y: -2,
                  boxShadow: "0 8px 30px rgba(37,99,235,0.4), 0 0 20px rgba(16,185,129,0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <Search className="w-5 h-5" />
                Search
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
