import React from 'react';
import Image from 'next/image';
import { ArrowRight, Users, Sparkles, Quote, ShoppingBag, Clock } from 'lucide-react';

const StylistProSection = () => {
  return (
    <div className="bg-background text-foreground flex flex-col">
      {/* Hero Section */}
      <section className="px-6 py-16 md:px-12 lg:px-24 max-w-4xl mx-auto text-center md:text-left">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary-foreground px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8 border border-primary/20">
          <span>✨ For Professional Stylists</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-montserrat font-bold leading-tight mb-8">
          Scale Your <span className="text-primary italic">Styling Business</span>
        </h1>
        <p className="text-xl text-foreground/60 leading-relaxed mb-12 max-w-2xl">
          Empower your expertise with AI. Manage 10x more clients with automated closet digitizing and intelligent lookbooks.
        </p>
        <div className="flex flex-col gap-4 max-w-sm">
          {/* CTA now leads to Waitlist */}
          <button className="bg-primary text-primary-foreground font-bold py-5 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02] active:scale-95">
            JOIN THE PRO WAITLIST <ArrowRight size={18} />
          </button>
          <button className="bg-transparent border border-foreground/10 font-bold py-5 rounded-2xl hover:bg-foreground/5 transition-colors">
            VIEW PRO FEATURES
          </button>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="px-6 grid grid-cols-2 gap-4 max-w-4xl mx-auto mb-20 w-full">
        <div className="bg-white p-8 rounded-4xl border border-foreground/5 text-center shadow-sm">
          <span className="text-4xl font-bold text-primary block mb-2">10X</span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-foreground/40">Efficiency</span>
        </div>
        <div className="bg-white p-8 rounded-4xl border border-foreground/5 text-center shadow-sm">
          <span className="text-4xl font-bold text-primary block mb-2">60s</span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-foreground/40">Auto-Digitizing</span>
        </div>
      </section>

      {/* Built for Professionals Grid */}
      <section className="px-6 py-20 bg-white">
        <h2 className="text-3xl font-bold font-montserrat text-center mb-16">Built for Professionals</h2>
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Feature 1: Client Management */}
          <div className="bg-background p-8 rounded-[2.5rem] border border-foreground/5">
            <Users className="text-primary mb-6" size={32} />
            <h3 className="text-2xl font-bold mb-4 font-montserrat">Client Management</h3>
            <p className="text-foreground/60 mb-8 leading-relaxed">Manage unlimited client wardrobes and style profiles from one unified dashboard.</p>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner">
              <Image src="/image/Rectangle 7.png" alt="Dashboard Preview" fill className="object-cover" />
            </div>
          </div>

          {/* Feature 2: AI-Assisted Lookbooks */}
          <div className="bg-background p-8 rounded-[2.5rem] border border-foreground/5">
            <Sparkles className="text-primary mb-6" size={32} />
            <h3 className="text-2xl font-bold mb-4 font-montserrat">AI-Assisted Lookbooks</h3>
            <p className="text-foreground/60 mb-8 leading-relaxed">Let our engine suggest base pairings based on your client&apos;s body type and preferences.</p>
            <div className="relative aspect-square max-w-md mx-auto rounded-full overflow-hidden border-8 border-white shadow-xl">
              <Image src="/image/Rectangle 7.png" alt="AI Lookbook Preview" fill className="object-cover" />
            </div>
          </div>

          {/* Feature 3: Marketplace (Coming Soon) */}
          <div className="bg-background p-8 rounded-[2.5rem] border border-primary/10 relative overflow-hidden group">
            {/* "Coming Soon" Badge */}
            <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter flex items-center gap-1 shadow-sm animate-pulse z-20">
              <Clock size={12} /> Coming Soon
            </div>

            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <ShoppingBag className="text-primary" size={32} />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 font-montserrat">Stylist Marketplace</h3>
            <p className="text-foreground/60 mb-8 leading-relaxed">
              Monetize your expertise. Connect with users looking for professional styling sessions and curated shopping lists directly in the app.
            </p>
            <div className="relative aspect-video rounded-2xl overflow-hidden opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500">
              <Image src="/image/Rectangle 7.png" alt="Marketplace Preview" fill className="object-cover" />
              <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px]" />
            </div>
          </div>

        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-6 bg-secondary text-secondary-foreground">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative w-20 h-20 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary">
            <Image src="/image/Rectangle 7.png" alt="Sarah Jenkins Stylist" fill className="object-cover" />
          </div>
          <Quote className="text-primary/40 mx-auto mb-6" size={40} />
          <p className="text-2xl italic font-light leading-relaxed mb-8">
            &quot;StyleMe transformed my boutique agency. I can now handle triple the clients while maintaining a high-touch personal experience.&quot;
          </p>
          <p className="font-bold text-primary">Sarah Jenkins</p>
          <p className="text-xs uppercase tracking-widest opacity-60">Founder, SJ Styling NY</p>
        </div>
      </section>
    </div>
  );
};

export default StylistProSection;