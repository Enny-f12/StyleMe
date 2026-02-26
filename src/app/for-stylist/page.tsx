import React from 'react';
import Image from 'next/image';
import { ArrowRight, Users, Sparkles, Quote } from 'lucide-react';
import Link from 'next/link';
const StylistProSection = () => { 
  return (
    <div className="bg-background text-foreground flex flex-col">
      {/* Hero */}
      <section className="px-6 py-16 mt-20 md:px-12 lg:px-24 max-w-5xl mx-auto text-center md:text-left">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary-foreground px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8 border border-primary/20">
          <span>✨ For Professional Stylists</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-montserrat font-bold leading-tight mb-8">
          Scale Your <span className="text-primary italic">Styling Business</span>
        </h1>
        <p className="text-xl text-foreground/60 leading-relaxed mb-12 max-w-2xl">
          Empower your expertise with AI. Manage 10x more clients with automated closet digitizing and intelligent lookbooks.
        </p>
        <div className="flex flex-col md:flex-row gap-4  ">
          <Link href="/waitlist">
          <button className="bg-primary text-primary-foreground w-full px-8 font-bold py-5 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
            GET STARTED FREE <ArrowRight size={18} />
          </button>
          </Link>
          <Link href="/waitlist">
          <button className="bg-transparent border w-full px-8 border-foreground/10 font-bold py-5 rounded-2xl">
            VIEW PRO FEATURES
          </button>
          </Link>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="px-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto mb-20 w-full">
        <div className="bg-white p-8 rounded-4xl border border-foreground/5 text-center shadow-sm">
          <span className="text-4xl font-bold text-primary block mb-2">10X</span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-foreground/40">Efficiency</span>
        </div>
        <div className="bg-white p-8 rounded-4xl border border-foreground/5 text-center shadow-sm">
          <span className="text-4xl font-bold text-primary block mb-2">60s</span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-foreground/40">Auto-Digitizing</span>
        </div>
      </section>

      {/* Built for Professionals */}
      <section className="px-6 py-20 bg-white">
        <h2 className="text-3xl font-bold font-montserrat text-center mb-16">Built for Professionals</h2>
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Feature 1 - Client Management */}
<div className="bg-background p-4 py-8 md:p-8 rounded-[2.5rem] border border-foreground/5 h-full flex flex-col">
  <div className="flex justify-between items-start mb-6">
    <Users className="text-primary" size={32} />
    <div className="bg-primary/10 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
      Pro Suite
    </div>
  </div>

  <h3 className="text-2xl font-bold mb-4 font-montserrat tracking-tight">Enterprise Client Management</h3>
  
  <p className="text-foreground/60 mb-6 leading-relaxed">
    Scale your styling business without the manual overhead. Manage unlimited client wardrobes, track body measurements, and maintain detailed style profiles from one unified command center. 
  </p>

  <ul className="space-y-3 mb-8">
    {[
      "Cross-client inventory search",
      "Measurement & fit history tracking",
      "Private white-label client portals"
    ].map((item, i) => (
      <li key={i} className="flex items-center gap-2 text-base font-medium text-foreground/80">
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        {item}
      </li>
    ))}
  </ul>

  <div className="relative aspect-8/6 rounded-2xl overflow-hidden mt-auto group">
    <Image 
      src="https://i.pinimg.com/736x/65/f9/04/65f904caf433c45ec85f47cceb6f971d.jpg" 
      alt="Stylist Dashboard" 
      fill 
      className="object-cover transition-transform duration-500 group-hover:scale-105" 
    />
    {/* Overlay tag to show "Pro" activity */}
    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md text-white text-[9px] px-2 py-1 rounded-md border border-white/10">
      Live: 12 Active Clients
    </div>
  </div>
</div>

         {/* Feature 2 - AI-Assisted Lookbooks */}
<div className="bg-background p-4 py-8 md:p-8 rounded-[2.5rem] border border-foreground/5 h-full flex flex-col">
  <div className="flex justify-between items-start mb-6">
    <Sparkles className="text-primary" size={32} />
    <div className="bg-secondary/10 text-secondary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
      Smart Curation
    </div>
  </div>

  <h3 className="text-2xl font-bold mb-4 font-montserrat tracking-tight">AI-Assisted Lookbooks</h3>
  
  <p className="text-foreground/60 mb-6 leading-relaxed">
    Generate data-backed style directions in seconds. Our engine analyzes your client&#39;s unique body geometry, seasonal color palette, and historical preferences to suggest high-conversion pairings that resonate with their personal brand.
  </p>

  <ul className="grid grid-cols-2 gap-y-3 mb-8">
    {[
      "Body-type optimization",
      "Seasonal color matching",
      "Trend-affinity analysis",
      "One-click PDF exports"
    ].map((item, i) => (
      <li key={i} className="flex items-center gap-2 text-base font-bold text-foreground/50 ">
        <Sparkles size={10} className="text-primary" />
        {item}
      </li>
    ))}
  </ul>

  {/* Circular Lookbook Frame */}
  <div className="relative aspect-square max-w-70 mx-auto rounded-full overflow-hidden border-8 border-white shadow-2xl group mt-auto">
    <Image 
      src="/image/lookbook-preview.png" 
      alt="AI Lookbook" 
      fill 
      className="object-cover transition-transform duration-1000 group-hover:scale-110" 
    />
    <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/40 flex items-end justify-center pb-8">
       <span className="text-white text-[10px] font-bold uppercase tracking-widest bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
         View Spring Collection
       </span>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-6 bg-secondary text-secondary-foreground">
        <div className="max-w-2xl mx-auto text-center">
          
          <div className="relative w-20 h-20 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary">
            <Image src="/image/Ellipse 7.png" alt="Stylist" fill className="object-cover" />
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