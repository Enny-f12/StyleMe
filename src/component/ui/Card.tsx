import React from 'react'
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  isDark?: boolean;
}

const FeatureCard = ({ title, description, icon: Icon, isDark = false }: FeatureCardProps) => {
  return (
    <div className={`
      group relative overflow-hidden transition-all duration-500 h-full flex flex-col 
      rounded-2xl p-5 md:p-8 lg:p-10
      ${isDark 
        ? 'bg-[#292516] text-secondary-foreground border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-primary/30' 
        : 'bg-white text-[#231E0F] border border-[#231E0F]/10 shadow-sm hover:shadow-md'
      }
    `}>
      
      {/* Icon Section - Uses your Yellow (#FACC15) */}
      {Icon && (
        <div className="mb-8 md:mb-8 ">
          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-[#854D0E]">
            <Icon size={28} strokeWidth={1.5} />
          </div>
        </div>
      )}

      {/* Content Area */}
      <div className="mt-auto space-y-5">
        <h3 className=" text-2xl lg:text-3xl tracking-tight leading-tight">
          {title}
        </h3>
        <p className="font-inter text-base lg:text-lg opacity-70 leading-relaxed font-light max-w-75">
          {description}
        </p>
      </div>
      
      {/* Subtle Bottom Glow on Hover */}
      <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/10 transition-all duration-500" />
    </div>
  );
};

export default FeatureCard;