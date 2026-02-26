"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
const featureData = [
  {
    title: "The Global Closet",
    description: "Instantly link your purchases from thousands of luxury and fast-fashion retailers.",
    image: "https://i.pinimg.com/1200x/62/9f/32/629f321fa5db27c5e1be84aa9c71f946.jpg",
  },
  {
    title: "Fabric Recognition",
    description: "Our AI vision engine understands fabric, cut, and texture automatically.",
    image: "https://i.pinimg.com/1200x/24/f1/e4/24f1e473d818023fae300c2039bb8570.jpg",
  },
  {
    title: "Instant Sync",
    description: "Your closet is ready across all devices instantly. Get ready to slay.",
    image: "https://i.pinimg.com/1200x/7f/4b/d2/7f4bd267e6f4093a1867dc8388f7b5e3.jpg",
  }
];

export default function SearchSection() {
  // Animation for the container (staggering)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  // Animation for individual items
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className=" px-6 lg:px-20 py-20 md:py-32 bg-background">
      {/* Header Row: Column on mobile, Row on Tablet+ */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-syne leading-tight text-secondary">
            Can&apos;t Snap? <span className="text-primary italic">Search</span>
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed text-sm md:text-base">
            Our massive stock library allows you to build your digital closet in seconds.
            No manual photography required.
          </p>
        </motion.div>

        <Link href="/how-it-works">
          <motion.button
            className="flex items-center text-primary-foreground gap-2 text-xs font-bold uppercase tracking-widest border-b-2 border-primary pb-1 hover:text-primary transition-all group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >

            Learn the process
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />

          </motion.button>
        </Link>
      </div>

      {/* Features Grid: 1 col on mobile, 2 on small tablet, 3 on desktop */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {featureData.map((feature, index) => (
          <motion.div
            key={index}
            className="group cursor-pointer"
            variants={itemVariants}
          >
            {/* Image Container: Aspect ratio adjusted for mobile */}
            <div className="relative aspect-4/3 sm:aspect-square lg:aspect-4/3 mb-6 overflow-hidden rounded-sm bg-secondary/5">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Text Content */}
            <h3 className="text-xl font-syne mb-3 group-hover:text-primary transition-colors text-secondary">
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}