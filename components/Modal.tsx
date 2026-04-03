'use client';

import { Property } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bed, Bath, Square, MapPin } from 'lucide-react';

interface ModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ property, isOpen, onClose }: ModalProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (!property) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Image Section */}
            <div className="relative h-64 md:h-96 overflow-hidden rounded-t-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-emerald-600/30 flex items-center justify-center">
                <div className="text-white/30 text-8xl font-bold">
                  {property.type.charAt(0).toUpperCase()}
                </div>
              </div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Property Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {property.title}
                    </h2>
                    <div className="flex items-center text-white/80">
                      <MapPin className="w-5 h-5 mr-2" />
                      {property.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                      {formatPrice(property.price)}
                    </div>
                    <div className="text-white/60 text-sm">Total Price</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8">
              {/* Features Grid */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                  <Bed className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-semibold text-white">{property.bedrooms}</div>
                  <div className="text-white/60 text-sm">Bedrooms</div>
                </div>
                <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                  <Bath className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <div className="text-2xl font-semibold text-white">{property.bathrooms}</div>
                  <div className="text-white/60 text-sm">Bathrooms</div>
                </div>
                <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                  <Square className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-semibold text-white">{property.area}</div>
                  <div className="text-white/60 text-sm">Square Meters</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Description</h3>
                <p className="text-white/70 leading-relaxed">
                  {property.description || 'Experience luxury living in this exceptional property located in one of Kenya\'s most prestigious areas. This stunning residence offers the perfect blend of sophistication, comfort, and modern amenities.'}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule Viewing
                </motion.button>
                <motion.button
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Agent
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
