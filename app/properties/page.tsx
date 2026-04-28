'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Property } from '@/types';
import PropertyCard from '@/components/PropertyCard';
import { fetchProperties } from '@/lib/api';
import { Search, Filter } from 'lucide-react';

const PropertiesPage = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('price-asc');

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const response = await fetchProperties();
        if (response.success) {
          setProperties(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch properties:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, []);

  const filteredProperties = properties
    .filter(property => {
      const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           property.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === 'all' || property.type === selectedType;
      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });

  const handlePropertyClick = (property: Property) => {
    window.location.href = `/properties/${property.id}`;
  };

  return (
    <div className="min-h-screen bg-blue-950 text-blue-100">
      {/* Hero Section */}
      <section
        className="border-b border-slate-200 bg-cover bg-center px-6"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.88), rgba(239, 246, 255, 0.88)), url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80')"
        }}
      >
        <div className="mx-auto max-w-screen-2xl py-10">
          <motion.h1
            className="text-2xl md:text-3xl font-bold text-slate-900"
            style={{ fontFamily: 'Syne, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Property Portfolio
          </motion.h1>
        </div>
      </section>

      {/* Filters Section */}
      <section id="properties-filters" className="px-6 py-8" style={{ minHeight: '35vh' }}>
        <div className="max-w-7xl mx-auto">
          <div className="glass border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300" />
                <input
                  type="text"
                  placeholder="Search properties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>

              {/* Property Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-colors"
              >
                <option value="all">All Types</option>
                <option value="apartment">Apartments</option>
                <option value="villa">Villas</option>
                <option value="penthouse">Penthouses</option>
                <option value="townhouse">Townhouses</option>
                <option value="estate">Estates</option>
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-colors"
              >
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>

              {/* Filter Button */}
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300">
                <Filter className="w-5 h-5" />
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-blue-300">Loading properties...</p>
            </div>
          ) : filteredProperties.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-blue-300 text-lg">No properties found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <PropertyCard
                    property={property}
                    onClick={() => handlePropertyClick(property)}
                    index={index}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PropertiesPage;
