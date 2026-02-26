import React from 'react';
import Image from 'next/image';
import { Camera, Sparkles, Thermometer, Calendar, ArrowRight, ArrowBigDown, Users, Ruler, Search } from 'lucide-react';
import Link from 'next/link';

const StyleMeAIVision = () => {
  return (
    <div className="flex flex-col bg-background text-foreground">
      {/* 1. Hero Section */}
      <section className="px-6 py-16 md:px-12 lg:px-24 max-w-6xl mx-auto mt-20 text-center md:text-left">
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
      <section className="px-6 md:px-12 lg:px-24 pb-24 max-w-6xl mx-auto space-y-6">

        {/* Instant Digitization - Large Card */}
        <div className="bg-white border border-foreground/5 rounded-[2.5rem] p-4 py-8 md:py-12 md:p-12 shadow-sm">
          <div className="flex justify-between items-start mb-8">
            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
              <Camera className="text-primary-foreground" size={28} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">AI Vision</span>
          </div>

          <h3 className="text-3xl font-bold mb-4">Instant Digitization</h3>
          <p className="text-foreground/60 mb-8 max-w-3xl">
            Snap a photo of your closet. Our AI automatically categorizes fabric, cut, and color in under 60 seconds. It builds a high-definition digital twin of your entire collection so you can browse your clothes like a premium storefront.
          </p>

          <div className="relative rounded-3xl overflow-hidden aspect-8/6 group">
            <Image
              src="https://i.pinimg.com/736x/b0/c0/c7/b0c0c7fdb34bc1493bb102549817f104.jpg"
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

        {/* Archetype Styling - Medium Card */}
        <div className="bg-white border border-foreground/5 rounded-[2.5rem] p-4 py-8 md:py-12 md:p-12 shadow-sm">
          <div className="flex justify-between items-start mb-8">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Ruler className="text-primary" size={28} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Body Geometry</span>
          </div>
          <h3 className="text-3xl font-bold mb-4">Bodytype-Based Suggestions</h3>
          <p className="text-foreground/60 leading-relaxed mb-6">
            Whether you fall into female bodytypes like <span className="text-foreground font-semibold italic">Hourglass, Pear, or Apple</span>, or male bodytypes like <span className="text-foreground font-semibold italic">Inverted Triangle, Trapezoid, or Rectangle</span>, our AI suggests cuts that enhance your natural silhouette. No more guessing just perfectly balanced proportions.
          </p>
          <div className="relative rounded-3xl overflow-hidden aspect-8/6 bg-slate-50 border border-foreground/5">
             <Image src="https://i.pinimg.com/736x/6d/e0/9d/6de09d33e7062e1251aa69d12c4d3f72.jpg" alt="archetypes" fill className="object-cover opacity-80" />
             <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40 italic"></p>
             </div>
          </div>
        </div>

        {/* Fabric Intelligence - Medium Card */}
        <div className="bg-white border border-foreground/5 rounded-[2.5rem] p-4 py-8 md:py-12 md:p-12 shadow-sm">
          <div className="flex justify-between items-start mb-8">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Search className="text-primary" size={28} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Fabric ID</span>
          </div>
          <h3 className="text-3xl font-bold mb-4">The &quot;Style This&quot; Lens</h3>
          <p className="text-foreground/60 leading-relaxed mb-8">
            Found a vintage piece with a fabric you don&apos;t recognize? Simply scan the texture. Our AI identifies complex materials—from <span className="text-foreground font-semibold italic">Heavyweight Herringbone</span> to <span className="text-foreground font-semibold italic">Raw Japanese Denim</span>—and provides instant suggestions on how to clean, drape, and pair it with items already in your closet.
          </p>
          
          <div className="relative rounded-3xl overflow-hidden aspect-8/6 bg-slate-50 border border-foreground/5 group">
             <Image 
                src="https://i.pinimg.com/1200x/53/25/4b/53254b30e065e4d450923fc01b6c49c5.jpg" 
                alt="Fabric texture recognition" 
                fill 
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 shadow-xl flex items-center gap-3">
                   <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                   <p className="text-[10px] uppercase tracking-widest font-bold text-foreground">Analyzing...</p>
                </div>
             </div>
          </div>
        </div>

        {/* Aesthetic Discovery - Medium Card */}
        <div className="bg-white border border-foreground/5 rounded-[2.5rem] p-4 py-8 md:py-12 md:p-12 shadow-sm">
          <div className="flex justify-between items-start mb-8">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Sparkles className="text-primary" size={28} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Style DNA</span>
          </div>
          <h3 className="text-3xl font-bold mb-4">Aesthetic Discovery</h3>
          <p className="text-foreground/60 leading-relaxed mb-8">
            Not sure what your &quot;vibe&quot; is called? Use our aesthetic search to explore curated styles. Whether you&apos;re leaning towards the quiet luxury of <span className="text-foreground font-semibold italic">Old Money</span>, the edgy subculture of <span className="text-foreground font-semibold italic">Alte</span>, or the structured clean-lines of <span className="text-foreground font-semibold italic">Streetwear</span>, our AI maps your current wardrobe against these global aesthetics to show you exactly how to pull off the look.
          </p>
          
          {/* Aesthetic Tags Display */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['Old Money', 'Alte', 'Y2K', 'Coquette', 'Minimalist', 'Gorpcore'].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-background border border-foreground/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-foreground/40 hover:border-primary hover:text-primary transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>

          <div className="relative rounded-3xl overflow-hidden aspect-8/6 bg-slate-50 border border-foreground/5">
             <Image 
                src="https://i.pinimg.com/736x/0d/34/48/0d34483a6717ceb6c8aed61ea3979b0f.jpg" 
                alt="Aesthetic style search" 
                fill 
                className="object-cover" 
             />
             <div className="absolute inset-0 bg-linear-to-t from-white/80 to-transparent flex items-end p-6">
                <p className="text-[10px] uppercase tracking-widest font-bold text-foreground">Analyzing closet for: <span className="text-primary italic">Alte Aesthetic</span></p>
             </div>
          </div>
        </div>
         
        {/* Share & Collaborate - Medium Card */}
        <div className=" border border-foreground/5 rounded-[2.5rem] p-4 py-8 md:py-12 md:p-12 shadow-sm">
          <div className="flex justify-between items-start mb-8">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Users className="text-primary" size={28} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Collaboration</span>
          </div>
          <h3 className="text-3xl font-bold mb-4">Closet Sharing</h3>
          <p className="text-foreground/60 leading-relaxed mb-6">
            Styling shouldn&apos;t be a lonely process. Securely share your digital wardrobe with professional stylists for a virtual audit, or with friends to get instant feedback on your weekend looks. Collaboration is just one tap away.
          </p>
          <div className="relative rounded-3xl overflow-hidden aspect-8/6 border border-foreground/5">
             <Image src="https://i.pinimg.com/1200x/3a/c3/43/3ac343457f214681260221bea0e8fb3a.jpg" alt="sharing" fill className="object-cover" />
             <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40 italic"></p>
             </div>
          </div>
        </div>

        {/* Vibe-Based Styling - Medium Card */}
        <div className="bg-white border border-foreground/5 rounded-[2.5rem] p-4 py-8 md:py-12 md:p-12 shadow-sm">
          <div className="flex justify-between items-start mb-8">
            <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center">
              <Sparkles className="text-primary" size={28} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Mood Match</span>
          </div>
          <h3 className="text-3xl font-bold mb-4">Vibe-Based Styling</h3>
          <p className="text-foreground/60 leading-relaxed">
            Feeling bold for a pitch? Relaxed for a Sunday brunch? Just tell us your vibe and watch the AI assemble the perfect ensemble from your existing inventory. It understands context, color theory, and trending silhouettes.
          </p>
        </div>

        {/* Small Cards Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-foreground/5 rounded-[2.5rem] p-4 py-8  md:p-8 shadow-sm">
            <div className="w-12 h-12 bg-foreground/5 rounded-xl flex items-center justify-center mb-6">
              <Thermometer className="text-primary" size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">Weather Sync</h4>
            <p className="text-foreground/50 text-sm">Automated layering suggestions. Never get caught in a sudden rain shower or overheat during your commute again.</p>
          </div>

          <div className="bg-white border border-foreground/5 rounded-[2.5rem] p-4 py-8  md:p-8 shadow-sm">
            <div className="w-12 h-12 bg-foreground/5 rounded-xl flex items-center justify-center mb-6">
              <Calendar className="text-primary" size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">Event Sync</h4>
            <p className="text-foreground/50 text-sm">Synchronize with your calendar. Get outfit prep notifications for high-stakes board meetings, date nights, or weekend getaways.</p>
          </div>
        </div>
      </section>

      {/* 3. Social Proof & Final CTA */}
      <section className="bg-secondary text-secondary-foreground py-24 px-6 text-center">
        <div className="flex justify-center -space-x-3 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative w-12 h-12 rounded-full border-4 border-secondary overflow-hidden">
              <Image src={`/image/Rectangle 7.png`} alt="user" fill className="object-cover" />
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
        <Link href="/waitlist">
          <button className="bg-primary text-primary-foreground  font-bold px-12 py-5 rounded-2xl flex items-center justify-center gap-2 mx-auto shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
            Try it now <ArrowRight size={20} />
          </button>
        </Link>
      </section>
    </div>
  );
};

export default StyleMeAIVision;