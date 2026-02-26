"use client";

import React from 'react';
import FeatureCard from '../ui/Card';
import { Smile, CloudRain, Calendar } from 'lucide-react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const OutfitSection = () => {
    // Animation Variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };

    return (
        <section className="px-6 lg:px-20 py-16 md:py-24 bg-secondary overflow-hidden">
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Header Block */}
                <motion.div variants={itemVariants} className="mb-10 md:mb-16">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                        AI Styling Engine
                    </span>
                    <h2 className="text-4xl lg:text-6xl font-syne mt-4 text-secondary-foreground">
                        Outfits for Every Occasion
                    </h2>
                    <p className="mt-4 text-sm md:text-base opacity-70 leading-relaxed text-white font-inter">
                        Beyond simple matching, Style Me understands the context of your life - weather, occasion, and current vibe
                    </p>
                </motion.div>

                {/* Row 1 / Card 1 */}
                <motion.div variants={itemVariants} className="p-0 md:p-8 h-120">
                    <FeatureCard
                        isDark
                        icon={Smile}
                        title="Mood-Based Outfits"
                        description="Feeling powerful? Effortless? Romantic? Tell us your vibe and watch the AI assemble the perfect ensemble."
                    />
                </motion.div>

                {/* Image 1 */}
                <motion.div variants={itemVariants} className="overflow-hidden rounded-sm group shadow-md">
                    <Image
                        src="https://i.pinimg.com/736x/51/20/ea/5120eaa08a00499bc1c5c11ee91c6b0a.jpg"
                        alt="Weather Outfit"
                        width={600}
                        height={500}
                        className="w-full h-120 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </motion.div>

                {/* Row 2 / Card 2 */}
                <motion.div variants={itemVariants} className="p-0 md:p-8 h-120">
                    <FeatureCard
                        isDark
                        icon={CloudRain}
                        title="Weather Integration"
                        description="Never get caught in the rain again. We check the local forecast to ensure your look is as functional as it is fly."
                    />
                </motion.div>

                {/* Image 2 */}
                <motion.div variants={itemVariants} className="overflow-hidden rounded-sm group shadow-md">
                    <Image
                        src="https://i.pinimg.com/736x/88/69/50/8869501c68f51afed6127609ce548a4e.jpg"
                        alt="Weather Outfit"
                        width={600}
                        height={500}
                        className="w-full h-120 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </motion.div>

                {/* Row 2 / Card 3 */}
                <motion.div variants={itemVariants} className="p-0 md:p-8 h-120">
                    <FeatureCard
                        isDark
                        icon={Calendar}
                        title="Event Planning"
                        description="Link your calendar for board meetings or date nights. We've planned your outfits for the next two weeks."
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default OutfitSection;