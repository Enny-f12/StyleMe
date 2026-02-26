"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.2 } }
};

const StyleMeProblemSolution = () => {
  return (
    <div className="flex flex-col bg-background overflow-x-hidden">
      
      {/* 1. Problem Introduction Section */}
      <motion.section 
        {...fadeInUp}
        className="px-6 py-16 md:px-12 lg:px-24 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center"
      > 
        <div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8 border border-primary/20"
          >
            <span>✨ The Wardrobe Dilemma</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl leading-[1.1] mb-8 text-foreground tracking-tight">
            Your Closet is <span className="italic font-light">Full</span>, Yet You Have <span className="text-primary underline decoration-2 underline-offset-8">Nothing</span> to Wear.
          </h2>

          <p className="text-xl text-foreground/60 leading-relaxed mb-12 max-w-3xl">
            The modern professional spends over 15 minutes a day deciding what to wear. 
            That is 91 hours a year lost to decision fatigue and &quot;closet paralysis.&quot;
          </p>
        </div>

        {/* Testimonial Image Card */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="relative rounded-[2.5rem] overflow-hidden aspect-3/4 md:aspect-square lg:aspect-3/4 shadow-2xl group hidden md:flex"
        >
          <Image 
            src="https://i.pinimg.com/736x/8c/73/59/8c735912198aacb8bbd5c25d548e9e1a.jpg" 
            alt="Organized luxury closet" 
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
          
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
        </motion.div>
      </motion.section>

      {/* 2. Stats Section (Dark Theme) */}
      <section className="bg-slate-950 text-white py-32 px-6 md:px-12 text-center">
        <motion.h3 
          {...fadeInUp}
          className="text-3xl md:text-5xl font-bold mb-24"
        >
          The Hidden Cost of <br />
          <span className="text-primary">Cluttered Living</span>
        </motion.h3>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto"
        >
          {[
            { label: "30%", title: "Inventory Ignorance", desc: "Most people only wear 30% of what they own regularly. The rest is literally gathering dust." },
            { label: "15m", title: "Decision Fatigue", desc: "Every morning spent searching for an outfit depletes your cognitive energy before your workday begins." },
            { label: "Zero", title: "Digital Connection", desc: "Your wardrobe is the last analog part of your life. It's disconnected from your calendar and goals." }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
              className="flex flex-col items-center"
            >
              <span className="text-7xl md:text-8xl font-black text-primary/20 mb-6">{stat.label}</span>
              <h4 className="text-2xl font-bold mb-4">{stat.title}</h4>
              <p className="text-white/50 max-w-sm leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. Pain Points List */}
      <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
        <motion.h3 
          {...fadeInUp}
          className="text-3xl lg:text-5xl font-bold mb-20 text-center tracking-tight"
        >
          Why &quot;Good Enough&quot; <br/>Isn&apos;t Good Enough
        </motion.h3>
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24"
        >
          {[
            { h: "The Fog of Choice", p: "Browsing a physical closet is inefficient. You can't filter by color, search by material, or see how items look together without the hassle of trying them on." },
            { h: "Disconnected Data", p: "Your closet doesn't know you have a board meeting at 9 AM or that it's going to rain. You're left to bridge that gap manually every single day." },
            { h: "The Manual Burden", p: "The solution used to be taking photos of every item. Who has 10 hours to spend cataloging shirts? We've broken that barrier with AI scanning." },
            { h: "Style Stagnation", p: "Without a digital overview, you default to the same outfits. You miss out on the potential of your own collection simply because you can't visualize it." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
              className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors duration-500"
            >
              <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
              <h4 className="text-2xl font-bold mb-4 tracking-tight">{item.h}</h4>
              <p className="text-foreground/60 leading-relaxed text-lg">{item.p}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. Visual Grid */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mx-auto px-6 md:px-12 lg:px-24 mb-32 max-w-6xl w-full"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-125 md:h-150">
          <div className="grid gap-4">
              <motion.div whileHover={{ scale: 0.98 }} className="relative w-full h-full"><Image src="https://i.pinimg.com/1200x/3c/4b/9f/3c4b9f216bd9997b3a5c6a29e8b9b35f.jpg" fill className="object-cover rounded-4xl" alt="closet detail" /></motion.div>
              <motion.div whileHover={{ scale: 0.98 }} className="relative w-full h-full"><Image src="https://i.pinimg.com/736x/4b/0e/95/4b0e95b9adb918b8cdd82e5fba70e4a9.jpg" fill className="object-cover rounded-4xl" alt="outfit shot" /></motion.div>
          </div>
          <div className="grid gap-4 pt-12">
              <motion.div whileHover={{ scale: 0.98 }} className="relative w-full h-full"><Image src="https://i.pinimg.com/736x/aa/48/e8/aa48e838627261cd954ea48f816da9f8.jpg" fill className="object-cover rounded-4xl" alt="texture detail" /></motion.div>
              <motion.div whileHover={{ scale: 0.98 }} className="relative w-full h-full"><Image src="https://i.pinimg.com/736x/74/db/de/74dbde438e091f097b36ba4f35453575.jpg" fill className="object-cover rounded-4xl" alt="interior design" /></motion.div>
          </div>
          <div className="hidden md:grid gap-4 pt-24">
              <motion.div whileHover={{ scale: 0.98 }} className="relative w-full h-full"><Image src="https://i.pinimg.com/736x/51/f6/59/51f65912a5963f5f482fc9bb1f499d92.jpg" fill className="object-cover rounded-4xl" alt="texture detail" /></motion.div>
              <motion.div whileHover={{ scale: 0.98 }} className="relative w-full h-full"><Image src="https://i.pinimg.com/736x/ce/49/39/ce4939e9d698ecc881e50241a83a2fb9.jpg" fill className="object-cover rounded-4xl" alt="interior design" /></motion.div>
          </div>
        </div>
      </motion.section>

      {/* 5. Final CTA */}
      <motion.section 
        {...fadeInUp}
        className="py-24 px-6 text-center bg-slate-50 border-t border-foreground/5"
      >
        <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Digitize?</h3>
        <p className="text-foreground/50 mb-12 max-w-md mx-auto text-lg">
          We&apos;ve built the engine to turn this chaos into a curated, digital experience in under 60 seconds.
        </p>
        
        <div className="flex flex-col  gap-4 max-w-md mx-auto">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 bg-primary text-primary-foreground font-bold py-5 rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-primary/20 transition-all"
          >
            START YOUR CLOSET <ArrowRight size={18} />
          </motion.button>
          <motion.button 
            whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
            className="flex-1 bg-transparent border border-foreground/10 font-bold py-5 rounded-2xl flex items-center justify-center gap-2 transition-colors"
          >
            WATCH DEMO <Play size={18} className="fill-current" />
          </motion.button>
        </div>
      </motion.section>

    </div>
  );
};

export default StyleMeProblemSolution;