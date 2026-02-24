import Hero from "@/component/Home/Hero";
import OutfitSection from "@/component/Home/Outfit";
import SearchSection from "@/component/Home/Search";
import ExpertiseSection from "@/component/Home/Stylist";



export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation could go here or in layout.tsx */}
      
      <Hero />
      <SearchSection />
      <OutfitSection />
      <ExpertiseSection />

      {/* Placeholder for the next sections */}
      <section className="py-20">
        {/* We will build the "Can't Snap? Search" section next */}
      </section>
      
    </main>
  );
}
