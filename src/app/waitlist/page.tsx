import React from 'react';
import Image from 'next/image';
import { ArrowRight, Scan, Calendar } from 'lucide-react';

const StyleMeLanding = () => {
  return (
    <main className="min-h-screen bg-background px-6 py-12 md:px-12 lg:px-24">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center md:text-left mt-20">
        <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
          <span>⚡ New Era of Fashion</span>
        </div>

        <h1 className="text-5xl md:text-7xl leading-tight mb-6 text-foreground">
          Join the <span className="text-primary italic">Future</span> of Fashion
        </h1>

        <p className="text-lg text-foreground/70 mb-10 leading-relaxed max-w-5xl">
          Experience the world&#39;s first AI stylist that lives in your pocket.
          Digitizing your wardrobe in seconds and curating looks for every vibe.
        </p>

        {/* Featured Image / Card */}
        <div className="relative rounded-3xl overflow-hidden aspect-8/6 md:aspect-video mb-12 shadow-2xl">
          <Image
            src="https://i.pinimg.com/736x/46/31/c5/4631c5e94eb5ae95a91b6f78b394cffc.jpg"
            alt="Minimalist wardrobe"
            className="object-cover w-full h-full"
            fill
            priority
          />
          {/* Glassmorphism Overlay Card */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2 md:p-6 rounded-2xl flex justify-between items-center">
            <div>
              <p className=" text-[5px] md:text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold mb-1 text-left">Your Collection</p>
              <h3 className=" text-base md:text-xl text-white font-semibold">Summer Essentials</h3>
            </div>
            <div className="bg-primary p-2 rounded-full">
              <svg className=" w-3 h-3 md:w-6 md:h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Waitlist Form */}
        <div className="max-w-5xl mx-auto md:mx-0">
          <div className="flex flex-col md:flex-row gap-3 mb-6">
            <input
              type="email"
              placeholder="Enter your email address"
              className=" w-full md:w-3/4 px-6 py-4 rounded-xl border border-foreground/10 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <button className="w-full md:w-1/4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95">
              Get Early Access <ArrowRight size={20} />
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex -space-x-3 items-center">
              {[
                "https://i.pinimg.com/736x/92/24/eb/9224eb869902b64ca066f5b62b682e2f.jpg",
                "https://i.pinimg.com/736x/b0/c0/c7/b0c0c7fdb34bc1493bb102549817f104.jpg",
                "https://i.pinimg.com/736x/ce/49/39/ce4939e9d698ecc881e50241a83a2fb9.jpg"
              ].map((src, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-background bg-slate-100 overflow-hidden shadow-sm"
                >
                  <Image
                    src={src}
                    alt={`User ${i + 1}`}
                    width={40}
                    height={40}
                    className="object-cover h-full w-full"
                  />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[10px] font-black text-primary-foreground shadow-sm z-10">
                +5K
              </div>
            </div>

            <p className="text-sm text-foreground/60 leading-relaxed">
              Join <span className="font-bold text-foreground">5,000+ stylists & creators</span> <br className="hidden md:block" />
              securing their spot in the fashion revolution.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-32 max-w-5xl mx-auto text-center mb-32">
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