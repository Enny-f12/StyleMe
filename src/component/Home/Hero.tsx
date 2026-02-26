"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, LucideSparkle, PlayCircle } from 'lucide-react';
import Button from '../ui/Button';
import GlassCard from '../ui/GlassCard';
import Link from 'next/link';

const Hero = () => {
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer: Variants = {
        visible: { transition: { staggerChildren: 0.2 } }
    };

    return (
        <section className=" relative w-full min-h-[90vh] flex flex-col lg:flex-row items-center justify-between mt-10 lg:mt-30 px-6 lg:px-20 py-12 lg:py-0 gap-12 bg-background overflow-hidden">

            {/* Left Content: Centered on mobile, Left-aligned on Desktop */}
            <motion.div
                className="flex-1 space-y-6 md:space-y-8 z-10 text-center lg:text-left mt-10 lg:mt-0"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                {/* Badge */}
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-2 bg-primary/30 rounded-full border border-white/10">
                    <LucideSparkle size={14} className="text-[#854D0E]" />
                    <span className="text-[10px] font-montserrat font-bold uppercase tracking-widest text-[#854D0E]">
                        New Era of Fashion
                    </span>
                </motion.div>

                {/* Hero Text: Dynamic font sizes */}
                <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-7xl  leading-[1.1] max-w-150 mx-auto lg:mx-0 text-secondary">
                    Your Entire Wardrobe, <br />
                    <span className="text-primary italic">Digitized</span> in 60 Seconds
                </motion.h1>

                <motion.p variants={fadeInUp} className="text-muted-foreground max-w-112.5 mx-auto lg:mx-0 leading-relaxed font-sans text-sm md:text-base">
                    The frictionless AI ecosystem that plans your look so you don&rsquo;t have to stress.
                    Real-time visual recognition, instant styling, and pro connectivity.
                </motion.p>

                {/* Buttons: Stacked on tiny screens, Row on tablet+ */}
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                    <Link href="/waitlist">
                        <Button variant="primary" className="group relative text-![#854D0E] w-full sm:w-auto inline-flex flex-row items-center justify-center gap-2">

                            Start Your Closet <ArrowRight size={18} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />

                        </Button>
                    </Link>

                    <Button variant="secondary" className="w-full sm:w-auto">
                        Watch Demo <PlayCircle size={18} />
                    </Button>
                </motion.div>
            </motion.div>

            {/* Right Image: Perfectly Scaled */}
            <motion.div
                className="flex-1 relative group w-full max-w-125 lg:max-w-150"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <div className="relative w-full aspect-4/5 lg:aspect-square overflow-hidden rounded-sm shadow-2xl">
                    <Image
                        src="https://i.pinimg.com/736x/ea/c5/9f/eac59f03047a3d49282af65fb9c54dac.jpg"
                        alt="Wardrobe Selection"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                        className="object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-700"
                    />
                </div>

                {/* Glass Card: Adjusted position for mobile */}
                <motion.div
                    className="absolute -bottom-4 md:bottom-8 -left-2 md:-left-8 lg:-left-12 right-6 md:right-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
                    <GlassCard label="Linen Shirts" imageSrc="https://i.pinimg.com/736x/ea/c5/9f/eac59f03047a3d49282af65fb9c54dac.jpg" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;