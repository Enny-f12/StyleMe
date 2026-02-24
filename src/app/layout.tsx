import type { Metadata } from "next";
import { Inter, Montserrat, Syne } from 'next/font/google'; // Added Syne and Montserrat
import "./globals.css";
import Footer from "@/component/Layout/Footer";
import Navbar from "@/component/Layout/Navbar";

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-sans' 
});

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable: '--font-montserrat' // For your styling/buttons
});

const syne = Syne({ 
  subsets: ['latin'], 
  variable: '--font-syne' // For high-fashion headings
});

export const metadata: Metadata = {
  title: 'StyleMe | Your Entire Wardrobe, Digitized in 60 Seconds',
  description: 'The frictionless AI ecosystem that plans your look so you don\'t have to stress. Real-time visual recognition and instant styling.',
  openGraph: {
    title: 'StyleMe - AI Wardrobe Digitization',
    description: 'Digitize your closet in seconds with our AI styling engine.',
    url: 'https://styleme.ai',
    siteName: 'StyleMe',
    locale: 'en_US',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Inject all three font variables into the body */}
      <body className={`${inter.variable} ${montserrat.variable} ${syne.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}