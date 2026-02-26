"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import { Menu, X } from 'lucide-react'; // Added X for close icon
import { motion, AnimatePresence } from 'framer-motion'; // Added for animation

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '/feature' },
    { name: 'How it Works', href: '/how-it-works' },
    { name: 'For Stylist', href: '/for-stylist' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 lg:px-20 py-5 ${
        isScrolled ? 'bg-secondary/95 backdrop-blur-md border-b border-white/5 py-4' : 'bg-secondary'
      }`}>
        <div className="max-w-360 mx-auto flex justify-between items-center">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center">
              <div className="flex flex-col items-center gap-0.5">
                 <div className="flex gap-1 items-end">
                   <div className="w-1 h-1 bg-primary rotate-45" />
                   <div className="w-1.5 h-1.5 bg-primary rotate-45 mb-0.5" />
                   <div className="w-1 h-1 bg-primary rotate-45" />
                 </div>
              </div>
            </div>
            <span className="font-syne text-2xl tracking-tight text-secondary-foreground">
              StyleMe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-[10px] uppercase font-syne tracking-[0.25em] font-bold text-secondary-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/waitlist">
              <Button variant="primary" className="py-2.5 px-8 text-[12px]! tracking-widest! font-bold text-[#854D0E]!">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className="md:hidden text-secondary-foreground z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-secondary border-b border-white/5 flex flex-col items-left py-10 pl-8 gap-8 md:hidden shadow-2xl"
            >
              {navLinks.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                  className="text-xs uppercase font-syne tracking-[0.3em] font-bold text-secondary-foreground hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/waitlist" onClick={() => setIsMenuOpen(false)}>
              <Button 
                variant="primary" 
                className="py-4 px-10 text-[12px]! w-[80%] text-[#854D0E]!"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;