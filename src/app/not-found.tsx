import Link from 'next/link';
import { Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
      {/* Visual Element */}
      <div className="relative mb-8">
        <h1 className="text-[12rem] md:text-[18rem] font-montserrat font-black text-primary/10 leading-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-2xl animate-bounce">
            <Search className="text-primary-foreground" size={40} />
          </div>
        </div>
      </div>

      {/* Text Content */}
      <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-4">
        Style <span className="text-primary italic">Not Found</span>
      </h2>
      <p className="text-foreground/60 max-w-md mb-12 leading-relaxed">
        It looks like this page stepped out of the closet. We couldn&apos;t find the outfit or the URL you were looking for.
      </p>

      {/* Action */}
      <Link 
        href="/"
        className="group flex items-center gap-3 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-2xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95"
      >
        <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
        BACK TO WARDROBE
      </Link>
    </main>
  );
}