import React from 'react';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';

const StyleMeProblemSolution = () => {
  return (
    <div className="flex flex-col bg-background">
      {/* 1. Problem Introduction Section */}
      <section className="px-6 py-16 md:px-12 lg:px-24 flex gap-6 max-w-6xl mx-auto">
        <div>
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary-foreground px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8 border border-primary/20">
          <span>✨ The Wardrobe Dilemma</span>
        </div>

        <h2 className="text-5xl md:text-7xl leading-[1.1] mb-8 text-foreground">
          Your Closet is <span className="italic font-light">Full</span>, Yet You Have <span className="text-primary underline decoration-2 underline-offset-8">Nothing</span> to Wear.
        </h2>

        <p className="text-xl text-foreground/60 leading-relaxed mb-12 max-w-2xl">
          The modern professional spends over 15 minutes a day deciding what to wear. 
          That&apos;s 91 hours a year lost to decision fatigue and &quot;closet paralysis.&quot;
        </p>
      </div>
        {/* Testimonial Image Card */}
        <div className="relative rounded-[2.5rem] overflow-hidden aspect-3/4 md:aspect-video shadow-2xl group">
          <Image 
            src="/image/Rectangle 1.png" 
            alt="Organized luxury closet" 
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
          
          <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl">
            <p className="text-white text-lg md:text-xl italic mb-6 leading-snug">
              &quot;I have a closet full of clothes and yet I find myself reaching for the same three items every single week.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs">
                SJ
              </div>
              <p className="text-white/80 font-bold text-xs uppercase tracking-widest">
                Sarah J., Early Adopter
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section (Dark Theme) */}
      <section className="bg-secondary text-secondary-foreground py-24 px-6 md:px-12 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-20">
          The Hidden Cost of <br />
          <span className="text-primary">Cluttered Living</span>
        </h3>

        <div className="grid gap-20 max-w-4xl mx-auto">
          {[
            { label: "30%", title: "Inventory Ignorance", desc: "Most people only wear 30% of what they own regularly. The rest is literally gathering dust and wasting capital." },
            { label: "15m", title: "Decision Fatigue", desc: "Every morning spent searching for an outfit depletes your cognitive energy before your workday even begins." },
            { label: "Zero", title: "Digital Connection", desc: "Your wardrobe is one of the last analog parts of your life. It&apos;s disconnected from your calendar, the weather, and your style goals." }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-6xl md:text-8xl font-bold text-primary/20 mb-4">{stat.label}</span>
              <h4 className="text-xl font-bold mb-4">{stat.title}</h4>
              <p className="text-secondary-foreground/60 max-w-md leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Pain Points List */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-16">Why &quot;Good Enough&quot; <br />Isn&apos;t Good Enough</h3>
        
        <div className="space-y-16">
          {[
            { h: "The Fog of Choice", p: "Browsing a physical closet is inefficient. You can't filter by color, you can't search by material, and you certainly can't see how things look together without the hassle of trying them on." },
            { h: "Disconnected Data", p: "Your closet doesn't know you have a board meeting at 9 AM or that it's going to rain at 2 PM. You're left to bridge that gap manually every single day." },
            { h: "The Manual Burden", p: "The \"solution\" used to be taking photos of every single item. Who has 10 hours to spend on a weekend cataloging shirts? No one. That's the barrier we're breaking." }
          ].map((item, i) => (
            <div key={i} className="relative pl-8 border-l-2 border-primary">
              <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-primary" />
              <h4 className="text-xl font-bold mb-4">{item.h}</h4>
              <p className="text-foreground/60 leading-relaxed">{item.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Visual Grid */}
      <section className="px-6 md:px-12 lg:px-24 mb-32">
        <div className="grid grid-cols-2 gap-4 h-150">
          <div className="grid gap-4 relative">
             <div className="relative w-full h-full"><Image src="/image/Rectangle 6.png" fill className="object-cover rounded-3xl" alt="closet detail" /></div>
             <div className="relative w-full h-full"><Image src="/image/Rectangle 7.png" fill className="object-cover rounded-3xl" alt="outfit shot" /></div>
          </div>
          <div className="grid gap-4 relative">
             <div className="relative w-full h-full"><Image src="/image/Rectangle 7.png" fill className="object-cover rounded-3xl" alt="texture detail" /></div>
             <div className="relative w-full h-full"><Image src="/image/Rectangle 7.png" fill className="object-cover rounded-3xl" alt="interior design" /></div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-24 px-6 text-center bg-white/50 border-t border-foreground/5">
        <h3 className="text-4xl font-bold mb-4">Ready to Digitize?</h3>
        <p className="text-foreground/50 mb-12">We&apos;ve built the engine to turn this chaos into <br /> a curated, digital experience in under 60 seconds.</p>
        
        <div className="flex flex-col gap-4 max-w-sm mx-auto">
          <button className="bg-primary text-primary-foreground font-bold py-5 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
            START YOUR CLOSET <ArrowRight size={18} />
          </button>
          <button className="bg-transparent border border-foreground/10 font-bold py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-foreground/5 transition-colors">
            WATCH DEMO <Play size={18} fill="currentColor" />
          </button>
        </div>
      </section>

    </div>
  );
};

export default StyleMeProblemSolution;