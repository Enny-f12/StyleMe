import React from 'react';
import Image from 'next/image';
import { Camera, Sparkles, Thermometer, Calendar, ArrowRight } from 'lucide-react';

const StyleMeAIVision = () => {
  return (
    <div className="flex flex-col bg-background text-foreground">
      {/* 1. Hero Section */}
      <section className="px-6 py-16 md:px-12 lg:px-24 max-w-4xl mx-auto text-center md:text-left">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary-foreground px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8 border border-primary/20">
          <span>⚡ Next Gen Styling</span>
        </div>

        <h1 className="text-5xl md:text-7xl leading-[1.1] mb-8">
          Redefine Your <span className="text-primary italic font-light">Style</span> <br />
          With AI Vision
        </h1>

        <p className="text-xl text-foreground/60 leading-relaxed mb-12 max-w-2xl">
          StyleMe uses proprietary computer vision to organize your wardrobe and suggest outfits 
          based on your vibe, weather, and schedule.
        </p>
      </section>

      {/* 2. Feature Cards Grid */}
      <section className="px-6 md:px-12 lg:px-24 pb-24 max-w-5xl mx-auto space-y-6">
        
        {/* Instant Digitization - Large Card */}
        <div className="bg-white border border-foreground/5 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
          <div className="flex justify-between items-start mb-8">
            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
              <Camera className="text-primary-foreground" size={28} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">AI Vision</span>
          </div>
          
          <h3 className="text-3xl font-bold mb-4">Instant Digitization</h3>
          <p className="text-foreground/60 mb-8 max-w-md">
            Snap a photo of your closet. Our AI automatically categorizes fabric, cut, and color in under 60 seconds.
          </p>
          
          <div className="relative rounded-3xl overflow-hidden aspect-video group">
            <Image 
              src="/api/placeholder/800/450" 
              alt="AI scanning wardrobe" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 border border-primary/20 shadow-xl">
              <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-primary-foreground rounded-full" />
              </div>
              <span className="text-xs font-bold text-foreground">Cotton Shirt Recognized</span>
            </div>
          </div>
        </div>

        {/* Vibe-Based Styling - Medium Card */}
        <div className="bg-white border border-foreground/5 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
          <div className="flex justify-between items-start mb-8">
            <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center">
              <Sparkles className="text-primary" size={28} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Mood Match</span>
          </div>
          <h3 className="text-3xl font-bold mb-4">Vibe-Based Styling</h3>
          <p className="text-foreground/60 leading-relaxed">
            Feeling bold? Relaxed? Professional? Just tell us your vibe and watch the AI assemble the perfect ensemble.
          </p>
        </div>

        {/* Small Cards Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-foreground/5 rounded-[2.5rem] p-8 shadow-sm">
            <div className="w-12 h-12 bg-foreground/5 rounded-xl flex items-center justify-center mb-6">
              <Thermometer className="text-primary" size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">Weather Sync</h4>
            <p className="text-foreground/50 text-sm">Never get caught in the rain or overheat again.</p>
          </div>
          
          <div className="bg-white border border-foreground/5 rounded-[2.5rem] p-8 shadow-sm">
            <div className="w-12 h-12 bg-foreground/5 rounded-xl flex items-center justify-center mb-6">
              <Calendar className="text-primary" size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">Event Sync</h4>
            <p className="text-foreground/50 text-sm">Outfits planned for every meeting &amp; date night.</p>
          </div>
        </div>
      </section>

      {/* 3. Social Proof & Final CTA */}
      <section className="bg-secondary text-secondary-foreground py-24 px-6 text-center">
        <div className="flex justify-center -space-x-3 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative w-12 h-12 rounded-full border-4 border-secondary overflow-hidden">
               <Image src={`/image/Rectangle 7.png${i}`} alt="user" fill className="object-cover" />
            </div>
          ))}
          <div className="w-12 h-12 rounded-full border-4 border-secondary bg-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground">
            +10k
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-4">Loved by Fashionistas</h2>
        <p className="text-secondary-foreground/60 mb-12 max-w-md mx-auto">
          Experience the marketplace where human expertise meets AI.
        </p>

        <button className="bg-primary text-primary-foreground font-bold px-12 py-5 rounded-2xl flex items-center justify-center gap-2 mx-auto shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
          Try it now <ArrowRight size={20} />
        </button>
      </section>

    
    </div>
  );
};

export default StyleMeAIVision;