'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const mouseEnter = () => setCursorVariant('hover');
    const mouseLeave = () => setCursorVariant('default');

    window.addEventListener('mousemove', mouseMove);
    
    // Add listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"], input, select, textarea');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', mouseEnter);
      element.addEventListener('mouseleave', mouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', mouseEnter);
        element.removeEventListener('mouseleave', mouseLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      opacity: 0.6,
      transition: {
        type: 'spring',
        mass: 0.2,
        stiffness: 100,
        damping: 25,
      }
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      opacity: 0.8,
      transition: {
        type: 'spring',
        mass: 0.2,
        stiffness: 100,
        damping: 25,
      }
    }
  };

  // Hide cursor on mobile devices
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Custom cursor styles */}
      <style jsx>{`
        * {
          cursor: none !important;
        }
      `}</style>
      
      {/* Cursor Glow */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-screen"
        variants={variants}
        animate={cursorVariant}
      >
        <div className="w-full h-full bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full blur-md" />
      </motion.div>

      {/* Trailing cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          transition: {
            type: 'spring',
            mass: 0.5,
            stiffness: 50,
            damping: 20,
          }
        }}
      >
        <div className="w-full h-full bg-white rounded-full opacity-50" />
      </motion.div>
    </>
  );
};

export default CursorGlow;
