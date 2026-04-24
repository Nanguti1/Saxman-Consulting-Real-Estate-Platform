'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Share2, Camera, Link2 } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Quick Links',
      links: ['Home', 'Properties', 'About Us', 'Contact']
    },
    {
      title: 'Services',
      links: ['Property Sales', 'Property Management', 'Land Investment', 'Leasing']
    },
    {
      title: 'Locations',
      links: ['Kileleshwa', 'Lavington', 'Kilimani', 'Westlands', 'Riverside']
    }
  ];

  const socialLinks = [
    { icon: MessageCircle, href: '#', label: 'Facebook' },
    { icon: Share2, href: '#', label: 'Twitter' },
    { icon: Camera, href: '#', label: 'Instagram' },
    { icon: Link2, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4">
              Saxman Consulting
            </h3>
            <p className="text-white/60 mb-6 leading-relaxed">
              Your trusted partner in Kenya's premium real estate market. 
              We deliver exceptional property solutions with integrity and expertise.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+254 722 177343</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>info@saxmanconsulting.co.ke</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>104 Riverside Dr, Nairobi, Kenya</span>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-4 text-white/60 text-sm">
              <p className="font-semibold text-white/80 mb-1">Office Hours:</p>
              <p>Mon–Fri: 7:30 AM – 6:30 PM</p>
              <p>Sat: 9:00 AM – 2:00 PM</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-white/60 hover:text-blue-400 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Saxman Consulting. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
