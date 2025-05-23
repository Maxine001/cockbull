
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
  const [chartData, setChartData] = useState<any[]>([]);
  const [currentPrice, setCurrentPrice] = useState("0.00001234");
  const [priceChange, setPriceChange] = useState(23.45);
  const [isLoading, setIsLoading] = useState(true);
  const [activeButton, setActiveButton] = useState("1D");

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setChartData(generateChartData());
      setIsLoading(false);
    }, 1000);
  }, []);

  const formatPrice = (value: number) => {
    return value.toFixed(8);
  };

  const handleTimeframeChange = (timeframe: string) => {
    setIsLoading(true);
    setActiveButton(timeframe);
    
    // Simulate loading new data
    setTimeout(() => {
      setChartData(generateChartData());
      setIsLoading(false);
    }, 500);
  };

  const timeframes = ["1H", "1D", "1W", "1M", "1Y", "ALL"];

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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-12 h-12 bg-gradient-to-r from-coin-orange to-coin-green rounded-full flex items-center justify-center mr-4">
                <Coins className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  ${currentPrice}
                  <span className={`text-sm px-2 py-0.5 rounded-full flex items-center ${priceChange > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    {priceChange > 0 ? <TrendingUp className="h-3 w-3 mr-1" /> : '↓'}
                    {priceChange}%
                  </span>
                </h3>
                <p className="text-gray-500">COCKBULL/USD</p>
              </div>
            </div>

            <div className="flex space-x-2">
              {timeframes.map(time => (
                <Button
                  key={time}
                  variant={activeButton === time ? "default" : "outline"}
                  className={`rounded-full px-3 py-1 h-auto text-sm ${
                    activeButton === time ? 'bg-coin-orange hover:bg-coin-orange/90' : ''
                  }`}
                  onClick={() => handleTimeframeChange(time)}
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>

          <div className="h-64 md:h-80 w-full">
            {isLoading ? (
              <div className="h-full w-full flex items-center justify-center">
                <div className="animate-spin h-8 w-8 border-4 border-coin-orange border-t-transparent rounded-full"></div>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData}
                  margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
                >
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F97316" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#F97316" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis 
                    tickFormatter={formatPrice} 
                    domain={['auto', 'auto']} 
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip 
                    formatter={(value: number) => [formatPrice(value), 'Price']}
                    contentStyle={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
                  />
                  <Area 
                    type="monotone"
                    dataKey="value"
                    stroke="#F97316"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorValue)"
                    activeDot={{ r: 6, fill: '#F97316', stroke: 'white', strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>

          <div className="flex justify-center mt-8">
            <Button className="btn-gradient rounded-full text-white px-8 py-2 text-lg">
              <Bitcoin className="mr-2 h-5 w-5" /> Buy $COCKBULL Now
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PriceChart;
