import React from 'react';
import Image from 'next/image';
import { ArrowRight, Scan, Calendar } from 'lucide-react';

const StyleMeLanding = () => {
  return (
    <main className="min-h-screen bg-background px-6 py-12 md:px-12 lg:px-24">
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto text-center md:text-left mt-20">
        <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
          <span>⚡ New Era of Fashion</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl leading-tight mb-6 text-foreground">
          Join the <span className="text-primary italic">Future</span> of Fashion
        </h1>
        
        <p className="text-lg text-foreground/70 mb-10 leading-relaxed max-w-xl">
          Experience the world&#39;s first AI stylist that lives in your pocket. 
          Digitizing your wardrobe in seconds and curating looks for every vibe.
        </p>

        {/* Featured Image / Card */}
        <div className="relative rounded-3xl overflow-hidden aspect-4/3 md:aspect-video mb-12 shadow-2xl">
          <Image 
            src="/image/Rectangle 1.png" 
            alt="Minimalist wardrobe" 
            className="object-cover w-full h-full"
            fill
            priority
          />
          {/* Glassmorphism Overlay Card */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex justify-between items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold mb-1">Your Collection</p>
              <h3 className="text-xl text-white font-semibold">Summer Essentials</h3>
            </div>
            <div className="bg-primary p-2 rounded-full">
              <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Waitlist Form */}
        <div className="max-w-5xl mx-auto md:mx-0">
          <div className="flex flex-row gap-3 mb-6">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="w-3/4 px-6 py-4 rounded-xl border border-foreground/10 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <button className="w-1/4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95">
              Get Early Access <ArrowRight size={20} />
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-slate-200 overflow-hidden">
                  <Image src={`/image/Rectangle 7.png${i}`} alt="user" width={40} height={40} />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                +5k
              </div>
            </div>
            <p className="text-sm text-foreground/60">
              Join <span className="font-bold text-foreground">5,000+ others</span> waiting for the future.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-32 max-w-4xl mx-auto text-center mb-32">
        <h2 className="text-3xl font-bold mb-4">Beyond Search</h2>
        <p className="text-foreground/50 mb-12">Everything you need to master your style</p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Feature Card 1 */}
          <div className="bg-white p-8 rounded-4xl text-left border border-foreground/5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Scan className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Visual Recognition</h3>
            <p className="text-foreground/60 leading-relaxed">
              Our AI identifies fabrics, cuts, and textures from a single photo.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white p-8 rounded-4xl text-left border border-foreground/5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Calendar className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Event Planning</h3>
            <p className="text-foreground/60 leading-relaxed">
              Synced to your calendar to prep outfits for meetings or date nights.
            </p>
          </div>
        </div>
      </section>


    </main>
  );
};

export default StyleMeLanding;