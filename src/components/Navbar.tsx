
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-80 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-coin-purple to-coin-pink animate-pulse-slow flex items-center justify-center">
            <span className="text-white font-bold">CB</span>
          </div>
          <span className="ml-2 text-xl font-bold text-gradient">Cockbull</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#about"
            className="font-medium hover:text-coin-purple transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#tokenomics"
            className="font-medium hover:text-coin-purple transition-colors duration-300"
          >
            Tokenomics
          </a>
          <a
            href="#roadmap"
            className="font-medium hover:text-coin-purple transition-colors duration-300"
          >
            Roadmap
          </a>
          <a
            href="#community"
            className="font-medium hover:text-coin-purple transition-colors duration-300"
          >
            Community
          </a>
        </div>

        <div className="hidden md:block">
          <Button className="btn-gradient rounded-full text-white px-6 py-2">
            Buy Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white bg-opacity-90 backdrop-blur-md transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="container mx-auto py-4 flex flex-col space-y-4">
          <a
            href="#about"
            className="px-4 py-2 hover:bg-gray-100 rounded transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#tokenomics"
            className="px-4 py-2 hover:bg-gray-100 rounded transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tokenomics
          </a>
          <a
            href="#roadmap"
            className="px-4 py-2 hover:bg-gray-100 rounded transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Roadmap
          </a>
          <a
            href="#community"
            className="px-4 py-2 hover:bg-gray-100 rounded transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Community
          </a>
          <Button className="btn-gradient rounded-full text-white mx-4">
            Buy Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
