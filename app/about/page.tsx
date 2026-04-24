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
      <section className="relative py-16 px-6 overflow-hidden min-h-[300px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80"
            alt="About Background"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-emerald-900/85" />
        </div>
        
        <div className="relative max-w-7xl mx-auto min-h-[300px] flex items-center justify-center text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-white">
              Visionary
              <span className="block text-3xl md:text-4xl mt-2 font-light text-blue-200">
                Real Estate Excellence
              </span>
            </span>
          </motion.h1>
          <motion.p
            className="text-lg text-blue-100/90 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Pioneering the future of luxury real estate with innovation, integrity, and unparalleled client experience
          </motion.p>
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

      {/* Our Story */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 
                className="text-4xl font-bold mb-6"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Our Story
                </span>
              </h2>
              <p className="text-blue-200 leading-relaxed mb-6">
                Saxman Consulting is a premier real estate agency in Nairobi, Kenya, specializing in high-end residential and commercial real estate. We provide full-range real estate services including property sales, rentals, land investment, leasing, and property management. Our expertise covers Nairobi's most prestigious suburbs including Kileleshwa, Lavington, Kilimani, Westlands, and Riverside.
              </p>
              <p className="text-blue-200 leading-relaxed mb-6">
                Our property portfolio ranges from apartments starting at 10M KSH for sale to high-end rentals up to 780K KSH. We are committed to delivering exceptional property solutions with integrity, expertise, and unwavering dedication to client success.
              </p>
              <p className="text-blue-200 leading-relaxed">
                Located at 104 Riverside Dr, Nairobi, we serve clients with professional excellence, ensuring that every property transaction is handled with the utmost care and attention to detail.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Building className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Market Leadership</h3>
                      <p className="text-blue-300 text-sm">Recognized as industry leaders in Kenyan real estate</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Client Focus</h3>
                      <p className="text-blue-300 text-sm">Every client receives personalized attention and tailored solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Growth & Innovation</h3>
                      <p className="text-blue-300 text-sm">Continuously evolving to meet market demands and client needs</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
