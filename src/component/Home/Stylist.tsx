"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import Button from '../ui/Button';

const stylists = [
  { id: 1, src: '/image/Ellipse 5 (1).png', alt: 'Expert Stylist 1' },
  { id: 2, src: '/image/Ellipse 7.png', alt: 'Expert Stylist 2' },
  { id: 3, src: '/image/Ellipse 6.png', alt: 'Expert Stylist 3' },
];

export default function ExpertiseSection() {
  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const avatarContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const avatarItem: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 260, damping: 20 } }
  };

  return (
    <section className=" bg-background py-16 md:py-32 px-6 text-center overflow-hidden flex flex-col items-center justify-center">
      
      {/* Avatar Stack with Spring Animation */}
      <motion.div 
        className="flex justify-center -space-x-3 md:-space-x-4 mb-8 md:mb-10"
        variants={avatarContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stylists.map((stylist) => (
          <motion.div 
            key={stylist.id} 
            variants={avatarItem}
            className="relative w-12 h-12 md:w-16 md:h-16 rounded-full border-2 md:border-4 border-background overflow-hidden shadow-xl transition-transform hover:scale-110 hover:z-10 cursor-pointer"
          >
            <Image
              src={stylist.src}
              alt={stylist.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 48px, 64px"
            />
          </motion.div>
        ))}
        
        {/* The "+10" Badge */}
        <motion.div 
          variants={avatarItem}
          className="relative w-12 h-12 md:w-16 md:h-16 rounded-full border-2 md:border-4 border-background bg-primary flex items-center justify-center shadow-xl"
        >
          <span className="font-montserrat font-bold text-[#854D0E] text-xs md:text-sm">+10</span>
        </motion.div>
      </motion.div>
      
      {/* Text Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-3xl md:text-4xl lg:text-6xl font-syne mb-6 md:mb-8 leading-tight text-[#231E0F]"
        >
          Human Expertise meets <br className="hidden md:block" />
          <span className="text-primary italic md:not-italic">Artificial Intelligence</span>
        </motion.h2>
        
        <motion.p 
          variants={fadeInUp}
          className="font-sans text-[#231E0F]/70 max-w-2xl mx-auto mb-10 md:mb-12 text-base md:text-lg lg:text-xl leading-relaxed px-2 md:px-0"
        >
          Experience the Marketplace. Connect with professional stylists for specialized advice, 
          personalized curation, and seasonal shopping lists.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <Button 
            variant="primary" 
            className="mx-auto px-8 md:px-12 py-4 md:py-5 font-montserrat text-[#854D0E]! font-bold tracking-widest md:tracking-[0.2em] w-full sm:w-auto"
          >
            Access Pro Stylist
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}