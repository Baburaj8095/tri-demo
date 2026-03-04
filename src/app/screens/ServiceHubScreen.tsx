import { useNavigate } from "react-router";
import {
  ChevronLeft,
  ShoppingCart,
  Truck,
  Home,
  Wrench,
  Sparkles,
  ChevronRight,
  Clock,
  Star,
} from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ServiceHubScreen() {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      name: "Grocery Delivery",
      icon: ShoppingCart,
      description: "Fresh groceries at your doorstep",
      image: "https://images.unsplash.com/photo-1621244320421-cc9782f5ce28?w=400",
      color: "bg-green-100 text-green-600",
      providers: 120,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Packers & Movers",
      icon: Truck,
      description: "Reliable moving services",
      image: "https://images.unsplash.com/photo-1586781383963-8e66f88077ec?w=400",
      color: "bg-blue-100 text-blue-600",
      providers: 85,
      rating: 4.3,
    },
    {
      id: 3,
      name: "Properties",
      icon: Home,
      description: "Buy, rent or sell properties",
      image: "https://images.unsplash.com/photo-1647579350687-d409523aabcc?w=400",
      color: "bg-purple-100 text-purple-600",
      providers: 250,
      rating: 4.6,
    },
    {
      id: 4,
      name: "Auto Services",
      icon: Wrench,
      description: "Car repair & maintenance",
      image: "https://images.unsplash.com/photo-1632733711679-529326f6db12?w=400",
      color: "bg-orange-100 text-orange-600",
      providers: 95,
      rating: 4.4,
    },
    {
      id: 5,
      name: "Home Cleaning",
      icon: Sparkles,
      description: "Professional cleaning services",
      image: "https://images.unsplash.com/photo-1740657254989-42fe9c3b8cce?w=400",
      color: "bg-pink-100 text-pink-600",
      providers: 150,
      rating: 4.7,
    },
    {
      id: 6,
      name: "Plumbing",
      icon: Wrench,
      description: "Expert plumbing solutions",
      image: "https://images.unsplash.com/photo-1771122453274-d3270e73cf94?w=400",
      color: "bg-indigo-100 text-indigo-600",
      providers: 110,
      rating: 4.5,
    },
  ];

  const featuredProviders = [
    {
      id: 1,
      name: "Fresh Mart Grocery",
      service: "Grocery Delivery",
      rating: 4.8,
      deliveryTime: "30 mins",
      minOrder: 199,
    },
    {
      id: 2,
      name: "Swift Movers",
      service: "Packers & Movers",
      rating: 4.6,
      deliveryTime: "2 hours",
      minOrder: 999,
    },
    {
      id: 3,
      name: "Premium Properties",
      service: "Properties",
      rating: 4.9,
      deliveryTime: "Same day",
      minOrder: 0,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 sticky top-0 z-10">
        <div className="flex items-center gap-3 mb-3">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold flex-1">Service Hub</h1>
        </div>
        <p className="text-sm opacity-90">Find trusted service providers near you</p>
      </header>

      {/* Hero Banner */}
      <div className="m-4 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">Need a Service?</h2>
        <p className="text-sm opacity-90 mb-4">
          Book verified professionals for all your needs
        </p>
        <button className="bg-white text-orange-600 px-6 py-2 rounded-full font-semibold text-sm">
          Book Now
        </button>
      </div>

      {/* Services Grid */}
      <div className="px-4 mb-6">
        <h3 className="font-bold text-lg mb-3">Browse Services</h3>
        <div className="grid grid-cols-2 gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => navigate(`/shop/${service.id}`)}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow text-left cursor-pointer"
              >
                <ImageWithFallback
                  src={service.image}
                  alt={service.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <div className={`${service.color} w-10 h-10 rounded-lg flex items-center justify-center mb-2`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm mb-1">{service.name}</h4>
                  <p className="text-xs text-gray-600 mb-2">{service.description}</p>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{service.rating}</span>
                    </div>
                    <span className="text-gray-500">{service.providers} providers</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Featured Providers */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-lg">Featured Providers</h3>
          <button className="text-blue-500 text-sm font-semibold">See All</button>
        </div>
        <div className="space-y-3">
          {featuredProviders.map((provider) => (
            <button
              key={provider.id}
              onClick={() => navigate(`/shop/${provider.id}`)}
              className="w-full bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-bold text-sm">{provider.name}</h4>
                  <p className="text-xs text-gray-600">{provider.service}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span>{provider.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{provider.deliveryTime}</span>
                </div>
                {provider.minOrder > 0 && (
                  <span>Min ₹{provider.minOrder}</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="px-4 mb-6">
        <h3 className="font-bold text-lg mb-3">Why Choose Us</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: "✓", title: "Verified Professionals", desc: "All service providers verified" },
            { icon: "⚡", title: "Quick Service", desc: "Fast response time" },
            { icon: "💰", title: "Best Prices", desc: "Competitive rates" },
            { icon: "⭐", title: "Quality Assured", desc: "100% satisfaction" },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-2xl mb-2">{feature.icon}</div>
              <h4 className="font-bold text-sm mb-1">{feature.title}</h4>
              <p className="text-xs text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <BottomNav active="services" />
    </div>
  );
}