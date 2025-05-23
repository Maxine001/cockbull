
import { Button } from "@/components/ui/button";

const CommunitySection = () => {
  const communities = [
    {
      name: "Twitter",
      followers: "52K+",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
      color: "bg-blue-500",
      link: "#",
    },
    {
      name: "Telegram",
      followers: "38K+",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l.013-.007.87 2.87c.112.311.266.367.453.341.188-.025.287-.126.41-.244l1.188-1.148 2.55 1.888c.466.257.801.124.917-.432l1.657-7.822c.183-.728-.137-1.02-.702-.788l-9.733 3.76c-.664.266-.66.638-.12.8z" />
        </svg>
      ),
      color: "bg-blue-400",
      link: "#",
    },
    {
      name: "Discord",
      followers: "24K+",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.977-.608 1.414a17.27 17.27 0 0 0-5.487 0 12.686 12.686 0 0 0-.617-1.416.077.077 0 0 0-.079-.036c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.769-.32 14.856.099 19.892a.082.082 0 0 0 .031.057c2.005 1.466 3.949 2.359 5.86 2.95a.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.228-1.994a.076.076 0 0 0-.041-.106 14.6 14.6 0 0 1-2.067-.99.077.077 0 0 1-.008-.128c.14-.104.279-.213.412-.32a.074.074 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.133.108.272.217.413.319a.077.077 0 0 1-.006.128 12.299 12.299 0 0 1-2.068.99.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028c1.912-.59 3.855-1.483 5.86-2.95a.077.077 0 0 0 .032-.054c.5-5.784-.838-10.823-3.549-15.3a.06.06 0 0 0-.031-.03zM8.02 16.103c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
        </svg>
      ),
      color: "bg-indigo-600",
      link: "#",
    },
    {
      name: "Reddit",
      followers: "19K+",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm6.67-10a1.46 1.46 0 0 0-2.47-1 7.12 7.12 0 0 0-3.85-1.23L13 6.65l2.14.45a1 1 0 1 0 .13-.61L12.82 6a.31.31 0 0 0-.37.24l-.74 3.47a7.14 7.14 0 0 0-3.9 1.23 1.46 1.46 0 1 0-1.61 2.39 2.87 2.87 0 0 0 0 .44c0 2.24 2.61 4.06 5.83 4.06s5.83-1.82 5.83-4.06a2.87 2.87 0 0 0 0-.44 1.46 1.46 0 0 0 .81-1.33zm-10 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5.81 2.75a3.84 3.84 0 0 1-2.47.77 3.84 3.84 0 0 1-2.47-.77.27.27 0 0 1 .38-.38A3.27 3.27 0 0 0 12 16a3.28 3.28 0 0 0 2.09-.61.28.28 0 1 1 .39.4v-.04zm-.18-1.71a1 1 0 1 1 1-1 1 1 0 0 1-1.01 1.04l.01-.04z" />
        </svg>
      ),
      color: "bg-orange-600",
      link: "#",
    },
  ];

  return (
    <section id="community" className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our <span className="text-gradient">Community</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Become part of one of the most active and friendly communities in the crypto space. Connect, learn and grow with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communities.map((community, index) => (
            <a 
              href={community.link} 
              key={index} 
              className="group"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform group-hover:-translate-y-2 group-hover:shadow-xl">
                <div className={`h-2 ${community.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${community.color} text-white`}>
                      {community.icon}
                    </div>
                    <span className="text-gray-400 text-sm">{community.followers} followers</span>
                  </div>
                  <h3 className="text-xl font-semibold">{community.name}</h3>
                  <p className="mt-2 text-gray-600 text-sm">
                    Join our {community.name} community for the latest updates and discussions.
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 bg-coin-purple/5 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-coin-purple rounded-full opacity-10 animate-pulse-slow"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-coin-pink rounded-full opacity-10 animate-pulse-slow"></div>
          
          <div className="relative z-10">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Subscribe to our newsletter to receive the latest news, updates, and exclusive offers directly to your inbox.
              </p>
              
              <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coin-purple focus:border-transparent"
                  required
                />
                <Button type="submit" className="btn-gradient rounded-full text-white">
                  Subscribe
                </Button>
              </form>
              
              <p className="text-xs text-gray-500 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
