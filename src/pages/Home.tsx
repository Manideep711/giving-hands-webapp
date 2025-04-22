
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { useState } from "react";

const Home = () => {
  // Simulate login state - in a real app this would come from auth context
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Hero />
      <HowItWorks />
      <Stats />
      <Footer />
    </div>
  );
};

export default Home;
