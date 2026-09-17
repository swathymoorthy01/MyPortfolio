import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import CommerceStories from "../components/CommerceStories";
import Dashboard from "../components/Dashboard";
import MarketplaceNetwork from "../components/MarketplaceNetwork";
import Skills from "../components/Skills";
import ResumeSection from "../components/ResumeSection";
import ContactFooter from "../components/ContactFooter";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen bg-mesh-canvas selection:bg-[#5B41C1]/20 selection:text-[#5B41C1]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <CommerceStories />
      <Dashboard />
      <MarketplaceNetwork />
      <Skills />
      <ResumeSection />
      <ContactFooter />
    </main>
  );
}
