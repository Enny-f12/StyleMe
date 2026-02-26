import React from 'react';
import Image from 'next/image';
import { Clock } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';   

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center mt-15 px-6 py-20">
      <div className="max-w-2xl w-full text-center ">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary-foreground px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8 border border-primary/20 animate-pulse">
          <Clock size={14} /> 
          <span>In Production</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-montserrat font-bold leading-tight mb-6">
          The Future is <br />
          <span className="text-primary italic font-light">Style...</span>
        </h1>
        
        <p className="text-xl text-foreground/60 mb-12 leading-relaxed">
          This feature is currently being fitted. We&apos;re connecting the right pieces to give the best jaw dropping results.
        </p>

        {/* Visual Preview */}
        <div className="relative aspect-8/6 rounded-[2.5rem] overflow-hidden border border-foreground/5 shadow-2xl mb-12 group">
          <Image 
            src="/image/Rectangle 7.png" 
            alt="Marketplace Preview" 
            fill 
            className="object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 shadow-xl">
               <p className="font-bold text-sm tracking-widest uppercase">Launching Soon</p>
            </div>
          </div>
        </div>

        {/* Subscription / Waitlist Mini-form */}
        <div className="max-w-55 mx-auto">
          <Link 
        href="/waitlist"
        className="group flex items-center gap-3 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-2xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95"
      >
        <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
        Join the trend
      </Link>
        </div>
      </div>
    </div>
  );
}