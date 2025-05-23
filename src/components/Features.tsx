
import { Card } from "@/components/ui/card";
import { Sparkles, Rocket, Coins, Star } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Coins className="h-6 w-6" />,
      title: "Community Powered",
      description: "Our token is fully owned by the community. Decisions are made through decentralized governance.",
      color: "bg-coin-purple",
      delay: 0,
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Deflationary Tokenomics",
      description: "With automatic burn mechanisms, $MEME becomes more scarce over time, potentially increasing value.",
      color: "bg-coin-pink",
      delay: 150,
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Rewards System",
      description: "Holders earn passive income through our innovative staking and reward distribution system.",
      color: "bg-coin-orange",
      delay: 300,
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "NFT Integration",
      description: "Exclusive NFT collections that provide utility and additional benefits for $MEME holders.",
      color: "bg-coin-blue",
      delay: 450,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why <span className="text-gradient">$MEME</span> Coin?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Not just another meme token. We're building a complete ecosystem with real utility and exciting features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              <div className="h-1.5 w-full group-hover:w-full transition-all duration-300" style={{ backgroundColor: `var(--coin-${feature.color.split('-')[1]})` }}></div>
              <div className="p-6">
                <div className={`${feature.color} text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-coin-purple transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-coin-purple/10 to-coin-pink/10 rounded-2xl animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">The Future of <span className="text-gradient">Meme Finance</span></h3>
              <p className="text-gray-600 mb-4">
                $MEME is more than just a token—it's a movement. We're combining the viral nature of memes with solid
                tokenomics and real utility to create something truly revolutionary in the crypto space.
              </p>
              <ul className="space-y-3">
                {[
                  "Fully audited smart contract",
                  "Transparent team with proven track record",
                  "Regular community AMAs and updates"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 text-sm">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-coin-purple to-coin-pink rounded-full opacity-20 blur-2xl animate-pulse-slow"></div>
              <div className="relative z-10 aspect-square rounded-full bg-white p-4 shadow-xl flex items-center justify-center animate-float">
                <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-r from-coin-purple to-coin-pink">
                  <span className="text-white text-5xl md:text-7xl font-bold">$COCKBULL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
