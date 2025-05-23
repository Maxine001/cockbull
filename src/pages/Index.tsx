
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PriceChart from "@/components/PriceChart";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const Index = () => {
  const [mascotVisible, setMascotVisible] = useState(false);
  
  // Initialize floating coins animation
  useEffect(() => {
    const createCoin = () => {
      const coin = document.createElement("div");
      coin.classList.add("coin");
      
      const size = Math.random() * 30 + 10;
      coin.style.width = `${size}px`;
      coin.style.height = `${size}px`;
      
      coin.style.left = `${Math.random() * 100}%`;
      coin.style.top = `-${size}px`;
      
      const duration = Math.random() * 10 + 10;
      coin.style.animation = `float ${duration}s linear infinite`;
      
      document.body.appendChild(coin);
      
      setTimeout(() => {
        coin.remove();
      }, duration * 1000);
    };
    
    // Create initial coins
    for (let i = 0; i < 10; i++) {
      setTimeout(() => createCoin(), Math.random() * 2000);
    }
    
    // Continue creating coins
    const interval = setInterval(createCoin, 3000);
    
    // Show mascot popup after a delay
    const mascotTimer = setTimeout(() => {
      setMascotVisible(true);
    }, 3000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(mascotTimer);
      
      // Clean up any remaining coins
      document.querySelectorAll(".coin").forEach(coin => coin.remove());
    };
  }, []);

  // Add function to close mascot popup
  const closeMascot = () => {
    setMascotVisible(false);
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <PriceChart />
      <CommunitySection />
      <Footer />
      
      {/* Animated mascot popup */}
      {mascotVisible && (
        <div className="fixed bottom-4 right-4 z-50 max-w-sm animate-fade-in">
          <div className="relative bg-white rounded-lg shadow-xl p-4">
            <button 
              onClick={closeMascot}
              className="absolute -top-3 -right-3 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center"
            >
              ×
            </button>
            <div className="flex items-center space-x-3">
              <div className="h-16 w-16 overflow-hidden rounded-full">
                <img 
                  src="/lovable-uploads/291bf158-5b48-4161-b6e6-5b0c6c5387f4.png" 
                  alt="Cock and Bull mascots" 
                  className="h-full w-full object-cover pulsing"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gradient">Join the COCK&BULL community!</h3>
                <p className="text-gray-600 text-sm">Get early access to our upcoming airdrop!</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
