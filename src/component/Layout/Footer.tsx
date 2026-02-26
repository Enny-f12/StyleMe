import React from 'react';
import Link from 'next/link';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="  bg-secondary text-secondary-foreground pt-24 pb-12 px-6 lg:px-20 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        
        {/* Brand Column */}
        <div className="md:col-span-1 space-y-8">
          <Link href="/" className="flex items-center gap-2 group">
             {/* Recreating your minimalist star logo from the navbar */}
            <div className="flex flex-col items-center gap-0.5">
               <div className="flex gap-1 items-end">
                 <div className="w-1 h-1 bg-primary rotate-45" />
                 <div className="w-1.5 h-1.5 bg-primary rotate-45 mb-0.5" />
                 <div className="w-1 h-1 bg-primary rotate-45" />
               </div>
            </div>
            <span className="font-syne text-2xl tracking-tight font-bold">StyleMe</span>
          </Link>
          <p className="text-base opacity-60 leading-relaxed max-w-xs">
            The AI-powered wardrobe consultant helping you digitize, organize, and elevate your personal style in seconds.
          </p>
          <div className="flex gap-5 text-primary">
            <Link href="#" className="hover:scale-110 transition-transform"><Instagram size={20} /></Link>
            <Link href="#" className="hover:scale-110 transition-transform"><Twitter size={20} /></Link>
            <Link href="#" className="hover:scale-110 transition-transform"><Linkedin size={20} /></Link>
          </div>
        </div>

        {/* Links Columns - Using Syne for Headers */}
        <div>
          <h4 className="font-syne text-lg mb-8  tracking-wider">Product</h4>
          <ul className="space-y-4 text-base font-montserrat opacity-60 ">
            <li><Link href="/how-it-works" className="hover:text-primary transition-colors">How it Works</Link></li>
            <li><Link href="/feature" className="hover:text-primary transition-colors">Features</Link></li>
            <li><Link href="/coming-soon" className="hover:text-primary transition-colors">Marketplace</Link></li>
            <li><Link href="/coming-soon" className="hover:text-primary transition-colors">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-syne text-lg mb-8  tracking-wider">Company</h4>
          <ul className="space-y-4 text-base font-montserrat opacity-60  ">
            <li><Link href="/about" className="hover:text-primary transition-colors">About StyleMe</Link></li>
            <li><Link href="/coming-soon" className="hover:text-primary transition-colors">Careers</Link></li>
            <li><Link href="/coming-soon" className="hover:text-primary transition-colors">Blog</Link></li>
            <li><Link href="/coming-soon" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-8">
          <h4 className="font-syne text-lg uppercase tracking-wider text-primary">Stay in Style</h4>
          <p className="text-base opacity-60 leading-relaxed">Get curation tips and product updates directly in your inbox.</p>
          <div className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/5 border border-white/10 px-4 py-4 text-sm rounded-sm focus:outline-none focus:border-primary transition-colors text-white placeholder:opacity-30"
            />
            <button className="bg-primary text-[#854D0E] py-4 font-montserrat font-bold uppercase tracking-[0.2em] text-[10px] hover:brightness-110 transition-all shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-montserrat uppercase tracking-[0.3em] font-bold opacity-30">
        <p className="text-center md:text-left">&copy; {currentYear} STYLE ME. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-10">
          <Link href="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
          <Link href="/terms" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;