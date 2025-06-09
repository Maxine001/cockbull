
import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Coins, Users, TrendingUp, Sparkles } from "lucide-react";

interface CounterProps {
  end: number;
  duration: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

const AnimatedCounter = ({ end, duration, prefix = '', suffix = '', decimals = 0 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);
  
  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = (timestamp - startTimeRef.current) / duration;
      
      if (progress < 1) {
        countRef.current = end * Math.min(progress, 1);
        setCount(countRef.current);
        requestAnimationFrame(animate);
      } else {
        countRef.current = end;
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
    
    return () => {
      startTimeRef.current = null;
    };
  }, [end, duration]);
  
  const formatted = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count).toLocaleString();
    
  return (
    <span>
      {prefix}{formatted}{suffix}
    </span>
  );
};

const Stats = () => {
  const [inView, setInView] = useState(false);
  const statsSectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (statsSectionRef.current) {
      observer.observe(statsSectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const stats = [
    {
      icon: <Coins className="h-10 w-10 text-coin-orange" />,
      title: "Market Cap",
      value: 6300,
      prefix: "$",
      suffix: "",
      duration: 2000,
      decimals: 0,
    },
    {
      icon: <Users className="h-10 w-10 text-coin-green" />,
      title: "Holders",
      value: 20,
      prefix: "",
      suffix: "+",
      duration: 1500,
      decimals: 0,
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-coin-blue" />,
      title: "Price Growth",
      value: 10,
      prefix: "",
      suffix: "%",
      duration: 2500,
      decimals: 0,
    },
    {
      icon: <Sparkles className="h-10 w-10 text-coin-purple" />,
      title: "Burned Tokens",
      value: 5,
      prefix: "",
      suffix: "%",
      duration: 1800,
      decimals: 2,
    },
  ];

  return (
    <section className="py-20" ref={statsSectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-gradient">Numbers</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            $COCKBULL token is growing faster than anyone expected. Join us now and be part of our success story.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-t-4"
              style={{ borderTopColor: index === 0 ? '#F97316' : index === 1 ? '#22C55E' : index === 2 ? '#33C3F0' : '#8B5CF6' }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-gray-100">{stat.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{stat.title}</h3>
              <p className="text-3xl font-bold text-gradient">
                {inView && (
                  <AnimatedCounter 
                    end={stat.value} 
                    duration={stat.duration}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                )}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
