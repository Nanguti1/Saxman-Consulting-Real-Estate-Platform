'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Property } from '@/types';
import { fetchPropertyById } from '@/lib/api';
import { ArrowLeft, Bed, Bath, Square, MapPin, Phone, Mail, Calendar, Share2, Heart } from 'lucide-react';

const PropertyDetailPage = () => {
  const params = useParams();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProperty = async () => {
      if (params.id) {
        try {
          const response = await fetchPropertyById(params.id as string);
          if (response.success && response.data.length > 0) {
            setProperty(response.data[0]);
          }
        } catch (error) {
          console.error('Failed to fetch property:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    loadProperty();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-blue-950 text-blue-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-blue-300">Loading property details...</p>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-blue-950 text-blue-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
          <p className="text-blue-300 mb-6">The property you're looking for doesn't exist.</p>
          <button 
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-950 text-blue-100">
      {/* Back Button */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Properties
          </button>
        </div>
      </section>

      {/* Property Header */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                {property.title}
              </span>
            </h1>
            <div className="flex items-center gap-4 text-blue-300 mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {property.location}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Listed {new Date().toLocaleDateString()}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Property Image */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            
            {/* Action Buttons */}
            <div className="absolute bottom-6 right-6 flex gap-3">
              <button className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Property Details */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              className="glass border border-white/10 rounded-2xl p-8 backdrop-blur-xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                Property Description
              </h2>
              <p className="text-blue-200 leading-relaxed mb-8">
                {property.description}
              </p>

              <h3 className="text-xl font-semibold mb-4">Property Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Bed className="w-8 h-8 text-blue-400" />
                  </div>
                  <p className="text-2xl font-bold">{property.bedrooms}</p>
                  <p className="text-blue-300 text-sm">Bedrooms</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Bath className="w-8 h-8 text-blue-400" />
                  </div>
                  <p className="text-2xl font-bold">{property.bathrooms}</p>
                  <p className="text-blue-300 text-sm">Bathrooms</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Square className="w-8 h-8 text-blue-400" />
                  </div>
                  <p className="text-2xl font-bold">{property.area}</p>
                  <p className="text-blue-300 text-sm">Sq Meters</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-8 h-8 text-blue-400" />
                  </div>
                  <p className="text-2xl font-bold capitalize">{property.type}</p>
                  <p className="text-blue-300 text-sm">Property Type</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div>
            <motion.div
              className="glass border border-white/10 rounded-2xl p-8 backdrop-blur-xl sticky top-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-center mb-8">
                <p className="text-blue-300 mb-2">Price</p>
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  KES {property.price.toLocaleString()}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300">
                  Schedule Viewing
                </button>
                <button className="w-full py-4 bg-white/10 border border-white/20 text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-300">
                  Contact Agent
                </button>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h3 className="font-semibold mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-blue-300">
                    <Phone className="w-5 h-5" />
                    <span>+254 700 123 456</span>
                  </div>
                  <div className="flex items-center gap-3 text-blue-300">
                    <Mail className="w-5 h-5" />
                    <span>info@saxman.co.ke</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetailPage;
