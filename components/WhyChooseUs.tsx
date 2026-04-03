'use client';

import { motion, Variants } from 'framer-motion';

const WhyChooseUs = () => {
  const features = [
    {
      icon: '🏆',
      title: 'Trusted Agents',
      description: 'Our agents are rigorously vetted, fully licensed, and trained to navigate Kenya\'s real estate market with precision and integrity.',
      number: '01'
    },
    {
      icon: '💎',
      title: 'Premium Listings',
      description: 'Every property on our platform meets our quality standard — no inflated prices, no hidden surprises, only genuine premium homes.',
      number: '02'
    },
    {
      icon: '✅',
      title: 'Verified Properties',
      description: 'All listings are independently verified against land registry records, ensuring clean title deeds and peaceful ownership.',
      number: '03'
    },
    {
      icon: '🌍',
      title: 'Local Expertise',
      description: '12 years navigating Nairobi, Mombasa, Kisumu and wider Kenyan market. We know every neighbourhood, regulation, and opportunity.',
      number: '04'
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="why" className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-green-950/20">
      {/* Background Orb */}
      <div 
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(16,185,129,0.07), transparent 65%)',
          right: '-200px',
          top: '-150px',
        }}
      />

      <div className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '560px', margin: '0 auto 3rem' }}
          >
            <p className="text-green-400 text-xs font-medium tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
              <span className="inline-block w-5 h-px bg-green-400" />
              Why Saxman
            </p>
            <h2 
              className="font-bold leading-tight tracking-tight"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                letterSpacing: '-0.03em',
                lineHeight: '1.15',
                marginBottom: '1rem',
              }}
            >
              Built on Trust,<br />
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Driven by Excellence
              </span>
            </h2>
            <p 
              className="font-light mb-12"
              style={{
                fontSize: '1rem',
                color: 'rgba(200,220,255,0.75)',
                fontWeight: 300,
                lineHeight: 1.7,
                maxWidth: '100%',
              }}
            >
              We combine local expertise with modern technology to deliver a property experience unlike any other.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="glass border border-white/10 rounded-2xl p-7 relative overflow-hidden transition-all duration-350 hover:border-green-400/25 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  transitionDelay: `${index * 0.1}s`,
                }}
                variants={itemVariants}
                whileHover={{
                  borderColor: 'rgba(52,211,153,0.25)',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)',
                  y: -4,
                }}
              >
                {/* Bottom border animation */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-500 transform scale-x-0 transition-transform duration-400 origin-left"
                  style={{ transformOrigin: 'left' }}
                />

                {/* Number */}
                <span 
                  className="absolute top-6 right-7 font-bold"
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'rgba(96,165,250,0.06)',
                    lineHeight: 1,
                  }}
                >
                  {feature.number}
                </span>

                {/* Icon */}
                <div 
                  className="w-13 h-13 bg-gradient-to-br from-blue-600/20 to-green-500/10 border border-blue-400/20 rounded-3xl flex items-center justify-center text-2xl mb-5 transition-all duration-300"
                >
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 
                  className="font-bold mb-2"
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#f0f6ff',
                  }}
                >
                  {feature.title}
                </h3>

                <p 
                  className="text-sm leading-relaxed"
                  style={{
                    color: 'rgba(200,220,255,0.75)',
                    fontWeight: 300,
                    lineHeight: 1.65,
                  }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
