'use client';

import { motion } from 'framer-motion';
import { Award, Users, Building, TrendingUp, Shield, Clock } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    {
      icon: Building,
      value: '1,200+',
      label: 'Properties Sold'
    },
    {
      icon: Users,
      value: '850+',
      label: 'Happy Clients'
    },
    {
      icon: Award,
      value: '12+',
      label: 'Years Experience'
    },
    {
      icon: TrendingUp,
      value: '98%',
      label: 'Client Satisfaction'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'We build lasting relationships through honest communication and transparent transactions.'
    },
    {
      icon: Users,
      title: 'Client-Centered',
      description: 'Your needs are our priority. We listen, understand, and deliver solutions that exceed expectations.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of professionalism and quality in everything we do.'
    },
    {
      icon: Clock,
      title: 'Timely Service',
      description: 'We respect your time and ensure efficient processes from start to finish.'
    }
  ];

  const team = [
    {
      name: 'James Saxman',
      role: 'Founder & CEO',
      description: 'With over 15 years in real estate, James leads our vision for excellence.'
    },
    {
      name: 'Sarah Kamau',
      role: 'Head of Sales',
      description: 'Sarah brings extensive market knowledge and negotiation expertise to every transaction.'
    },
    {
      name: 'Michael Ochieng',
      role: 'Property Consultant',
      description: 'Michael specializes in luxury properties and investment opportunities.'
    },
    {
      name: 'Grace Wangari',
      role: 'Client Relations',
      description: 'Grace ensures exceptional service and smooth client experiences throughout.'
    }
  ];

  return (
    <div className="min-h-screen bg-blue-950 text-blue-100">
      {/* Hero Section */}
      <section
        className="border-b border-slate-200 bg-cover bg-center px-6"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.88), rgba(239, 246, 255, 0.88)), url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80')"
        }}
      >
        <div className="mx-auto max-w-screen-2xl py-10">
          <motion.h1
            className="text-2xl md:text-3xl font-bold text-slate-900"
            style={{ fontFamily: 'Syne, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About Us
          </motion.h1>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="glass border border-white/10 rounded-2xl p-6 text-center backdrop-blur-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </p>
                <p className="text-blue-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="glass border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-xl space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm uppercase tracking-widest text-blue-300 mb-2">About Us: Saxman Consulting</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                Your Trusted Real Estate Partner in Nairobi, Kenya
              </h2>
              <p className="text-blue-200 leading-relaxed">
                Saxman Consulting is a premier, fast-growing property provider dedicated to delivering high-quality real estate solutions across Kenya. Based in the heart of the capital at 104 Riverside Drive, we bridge the gap between property owners, buyers, and investors by offering transparent, reliable, and customer-centric services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-3">Our Mission &amp; Vision</h3>
              <p className="text-blue-200 leading-relaxed">
                Our mission is to simplify the real estate journey for both individuals and businesses. Whether you are looking for your dream home or seeking to maximize the value of your commercial assets, we provide the market insights and expertise needed to make informed decisions. We pride ourselves on being one of the most ethical and professional agencies in the Nairobi market.
              </p>
            </motion.div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Comprehensive Property Services</h3>
              <ul className="space-y-2 text-blue-200 list-disc list-inside">
                <li><strong>Property Sales &amp; Rentals:</strong> A diverse portfolio featuring modern apartments, luxury houses, and prime commercial spaces.</li>
                <li><strong>Land Investment:</strong> Expert guidance on acquiring land for residential or commercial development.</li>
                <li><strong>Property Management:</strong> Reliable management services to help owners maximize ROI and maintain property value.</li>
                <li><strong>Market Consulting:</strong> Strategic advice on property trends and investment opportunities in Nairobi&apos;s high-growth zones.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Primary Areas of Operation</h3>
              <p className="text-blue-200 mb-3">
                For local SEO, we focus on Nairobi&apos;s most sought-after neighborhoods, ensuring our clients have access to the best listings in:
              </p>
              <ul className="space-y-2 text-blue-200 list-disc list-inside">
                <li>Westlands &amp; Parklands</li>
                <li>Riverside &amp; Lavington</li>
                <li>Kilimani &amp; Kileleshwa</li>
                <li>Loresho &amp; Lower Kabete</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Why Choose Saxman Consulting?</h3>
              <p className="text-blue-200 leading-relaxed">
                With over 220 properties listed in the last year alone, ranging from 10M KSH to 750M KSH, our reach and experience are unmatched. We leverage deep local knowledge to ensure our clients find the right fit, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="glass border border-white/10 rounded-2xl p-6 text-center backdrop-blur-xl hover:bg-white/5 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-blue-300 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              The experienced professionals behind your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="glass border border-white/10 rounded-2xl p-6 text-center backdrop-blur-xl hover:bg-white/5 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-blue-400">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                <p className="text-blue-300 text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
