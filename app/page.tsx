import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FriendsActivity from "@/components/FriendsActivity";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import HowItWorks from "@/components/HowItWorks";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "var(--color-bg)" }}>
      <Nav />
      <Hero />
      <FriendsActivity />
      <Features />
      <Reviews />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </main>
  );
}
