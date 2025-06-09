
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Bitcoin, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data for the chart
const generateChartData = () => {
  const data = [];
  let value = 0.00001;
  
  for (let i = 0; i < 30; i++) {
    // Create a general upward trend with some volatility
    const change = (Math.random() - 0.3) * 0.000005;
    value = Math.max(0.000001, value + change);
    
    data.push({
      name: `Day ${i + 1}`,
      value: value,
    });
  }
  
  return data;
};

const PriceChart = () => {
  
  return (
    <section id="tokenomics" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">$COCKBULL Price <span className="text-gradient">Chart</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track the real-time performance of our token and see why early investors are excited about our growth potential.
          </p>
        </div>

        <Card className="p-6 shadow-lg animate-fade-in">
          <a
            href="https://pump.fun/coin/7hwG8pesjxme8B87qGCjUUZEPbCWWsGJjT2J9zMWpump"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition">
            View Live Chart on Pump.fun ↗

            <div className="flex justify-center mt-8">
              <Button className="btn-gradient rounded-full text-white px-8 py-2 text-lg">
                <Bitcoin className="mr-2 h-5 w-5" /> Buy $COCKBULL Now
              </Button>
            </div>
          </a>

          
            
      
        </Card>
      </div>
    </section>
  );
};

export default PriceChart;
