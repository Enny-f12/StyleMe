import React from 'react';
import { ShieldCheck, Eye, Lock } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: <Eye size={24} />,
      title: "Data We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, upload photos of your wardrobe, or communicate with us. This includes your email, images of clothing, and styling preferences."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "How We Use Your Data",
      content: "StyleMe uses AI to analyze your wardrobe photos to provide styling recommendations. We do not sell your personal images to third parties. Your data is used solely to improve your personal style experience."
    },
    {
      icon: <Lock size={24} />,
      title: "Security",
      content: "We implement industry-standard security measures to protect your data. Your wardrobe is your private digital space, encrypted and accessible only by you and any stylist you explicitly grant access to."
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-20 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto mt-20">
        <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6">
          Privacy <span className="text-primary italic">Policy</span>
        </h1>
        <p className="text-foreground/60 mb-16 leading-relaxed">
          Last updated: February 26, 2026. Your privacy is at the core of how we build StyleMe.
        </p>

        <div className="space-y-12">
          {sections.map((section, idx) => (
            <section key={idx} className="bg-white p-8 rounded-[2.5rem] border border-foreground/5 shadow-sm">
              <div className="text-primary mb-4">{section.icon}</div>
              <h2 className="text-2xl font-bold mb-4 font-montserrat">{section.title}</h2>
              <p className="text-foreground/60 leading-relaxed">{section.content}</p>
            </section>
          ))}
        </div>


      </div>
    </main>
  );
}