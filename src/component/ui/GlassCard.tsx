import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

interface GlassCardProps {
  label: string;
  imageSrc: string; // New prop for the image path
}

const GlassCard = ({ label, imageSrc }: GlassCardProps) => {
  return (
    <div className="backdrop-blur-xl bg-white/30 border border-white/20 p-6 rounded-md flex justify-between items-center shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="flex items-center gap-4">
        {/* Thumbnail Container */}
        <div className="w-12 h-12 bg-secondary/10 rounded-sm overflow-hidden border border-white/40 relative">
          <Image 
            src={imageSrc} 
            alt={label} 
            fill 
            sizes="48px"
            className="object-cover" 
          />
        </div>
        
        <div>
          <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Your Collection</p>
          <p className="font-syne text-xl">{label}</p>
        </div>
      </div>

      <div className="bg-primary rounded-full shadow-lg">
        <CheckCircle2 size={24} className="text-primary-foreground" />
      </div>
    </div>
  );
};

export default GlassCard;