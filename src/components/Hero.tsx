
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Bitcoin, TrendingUp } from "lucide-react";

const Hero = () => {
  const [coins, setCoins] = useState<{id: number, size: number, x: number, delay: number}[]>([]);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Generate random floating coins
  useEffect(() => {
    const newCoins = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 40 + 20,
      x: Math.random() * 100,
      delay: Math.random() * 5
    }));
    setCoins(newCoins);
  }, []);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Animated background coins */}
      {coins.map((coin) => (
        <div
          key={coin.id}
          className="coin"
          style={{
            width: `${coin.size}px`,
            height: `${coin.size}px`,
            left: `${coin.x}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${coin.delay}s`,
            opacity: Math.random() * 0.4 + 0.1
          }}
        />
      ))}
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="bg-coin-orange/10 text-coin-orange rounded-full inline-flex items-center px-4 py-2 mb-6 animate-fade-in">
              <TrendingUp className="h-4 w-4 mr-2" />
              <span className="text-sm font-semibold">Now on Moonshot!</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">COCK&BULL</span> <br />
              The Next Generation meme coin
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Join the revolution with the most exciting meme coin in the crypto space. 
              Community driven, hyper-deflationary token with utility.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-gradient rounded-full text-white px-8 py-6 text-lg animate-bounce-small">
                <Bitcoin className="mr-2 h-5 w-5" /> Buy $COCKBULL
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-2 hover:bg-transparent hover:text-coin-orange transition-all duration-300">
                Read Whitepaper
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-gradient animate-pulse-slow">currently unavailable</p>
                <p className="text-gray-500">Holders</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gradient animate-pulse-slow">$currenly unavilable</p>
                <p className="text-gray-500">Market Cap</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gradient animate-pulse-slow">100K+</p>
                <p className="text-gray-500">Community</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative mascot-container">
              {!isImageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-coin-orange border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <img 
                src="/lovable-uploads/291bf158-5b48-4161-b6e6-5b0c6c5387f4.png"
                alt="Cock and Bull mascots" 
                className={`mascot-image wobble ${isImageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                onLoad={handleImageLoad}
              />
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-bounce-small">
                <div className="flex items-center gap-2 text-green-500">
                  <TrendingUp className="h-4 w-4" />
                  <span className="font-bold">+124.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
