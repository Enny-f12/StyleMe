import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Heart } from 'lucide-react';
import Link from 'next/link';

const StylingProcess = () => {
  const steps = [
    {
      number: "1",
      title: "Snap or Search",
      description: "Point your camera to digitize your existing closet in 60 seconds, or search our global database to find and add similar items to your virtual wardrobe.",
      image: "https://i.pinimg.com/736x/b0/c0/c7/b0c0c7fdb34bc1493bb102549817f104.jpg"
    },
    {
      number: "2",
      title: "AI Digitizes Everything",
      description: "Our vision engine identifies fabric, cut, and color instantly. Your wardrobe is now organized in the cloud.",
      image: "https://i.pinimg.com/736x/41/d7/34/41d73492b811efd83abdf4f3d0ea4cb1.jpg",
      isStepTwo: true
    },
    {
      number: "3",
      title: "Get Styled Daily",
      description: "Receive personalized outfit recommendations based on weather, occasion, and your personal mood.",
      image: "https://i.pinimg.com/736x/92/24/eb/9224eb869902b64ca066f5b62b682e2f.jpg",
      isStepThree: true
    }
  ];

  return (
    <div className="bg-background py-16 px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-16 text-left mt-20">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary-foreground px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-primary/20">
          <span>✨ The Styling Process</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-montserrat font-bold leading-tight text-foreground">
          Effortless Style in <span className="text-primary italic">3 Simple Steps</span>
        </h2>
        <p className="mt-6 text-xl text-foreground/60 max-w-3xl leading-relaxed">
          The frictionless AI ecosystem that plans your look so you don&apos;t have to stress.
        </p>
      </div>

      {/* Steps Container */}
      <div className="max-w-5xl mx-auto space-y-24 relative">
        {/* Connecting Line (Desktop) */}
        <div className="absolute left-6 top-10 bottom-10 w-0.5 bg-primary/10 hidden md:block" />

        {steps.map((step, idx) => (
          <div key={idx} className="relative flex flex-col md:flex-row gap-8 md:pl-20">
            {/* Step Number Badge */}
            <div className="md:absolute md:left-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg shadow-primary/20 z-10">
              {step.number}
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold font-montserrat mb-4 text-foreground">{step.title}</h3>
              <p className="text-foreground/60 mb-8 leading-relaxed max-w-3xl">{step.description}</p>

              <div className="relative rounded-4xl overflow-hidden border border-foreground/5 bg-white shadow-xl">
                <div className="relative aspect-8/6 w-full">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Overlays for Step 2 */}
                {step.isStepTwo && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-white/40 backdrop-blur-sm">
                    <div className="bg-white p-6 rounded-3xl shadow-2xl border border-foreground/5 w-full max-w-70">
                      <div className="flex gap-2 flex-wrap mb-4">
                        <span className="bg-primary/20 text-primary-foreground text-[8px] px-2 py-1 rounded font-bold uppercase">Fabric: Linen</span>
                        <span className="bg-primary/20 text-primary-foreground text-[8px] px-2 py-1 rounded font-bold uppercase">Fit: Oversized</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-100 rounded-xl relative overflow-hidden aspect-8/6">
                          <Image src="/image/Rectangle 7.png" alt="item" fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-bold text-foreground">Lightweight Blazer</p>
                          <p className="text-[10px] text-foreground/40 italic">Processing complete...</p>
                        </div>
                        <CheckCircle2 className="text-green-500" size={18} />
                      </div>
                    </div>
                  </div>
                )}

                {/* Overlays for Step 3 */}
                {step.isStepThree && (
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black text-white p-4 rounded-2xl flex items-center justify-between shadow-2xl">
                      <div>
                        <p className="text-[8px] text-primary font-bold uppercase tracking-widest mb-1">Suggested for Today</p>
                        <p className="text-sm font-bold">Minimalist Professional</p>
                      </div>
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                        <Heart size={18} fill="currentColor" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="mt-32 rounded-[3rem] bg-blue-50/50 border border-blue-100/50 py-20 px-6 text-center max-w-4xl mx-auto">
        <div className="flex justify-center -space-x-3 mb-8">
          {[
            "https://i.pinimg.com/736x/92/24/eb/9224eb869902b64ca066f5b62b682e2f.jpg", // User 1
            "https://i.pinimg.com/736x/b0/c0/c7/b0c0c7fdb34bc1493bb102549817f104.jpg", // User 2
            "https://i.pinimg.com/736x/ce/49/39/ce4939e9d698ecc881e50241a83a2fb9.jpg"  // User 3
          ].map((src, i) => (
            <div key={i} className="relative w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate-200 shadow-sm">
              <Image
                src={src}
                alt={`User ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
          <div className="w-12 h-12 rounded-full border-4 border-white bg-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground z-10 shadow-sm">
            +10k
          </div>
        </div>

        <h3 className="text-3xl font-bold font-montserrat mb-4 text-foreground tracking-tight">
          Ready to Snap, Search, and Style?
        </h3>
        <p className="text-foreground/50 mb-10 max-w-sm mx-auto leading-relaxed">
          Join thousands of stylists and fashion enthusiasts revolutionizing how they manage their collections.
        </p>

        <div className="flex flex-col gap-4 max-w-xs mx-auto">
          <Link href="/waitlist">
            <button className="bg-primary text-primary-foreground font-bold py-5 w-full rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all duration-300 group">
              START YOUR CLOSET <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link href="/waitlist">
            <button className="bg-white border border-foreground/10 text-foreground font-bold py-5 w-full rounded-2xl hover:bg-foreground/5 hover:border-foreground/20 transition-all duration-300">
              TALK TO AN AI STYLIST
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StylingProcess;