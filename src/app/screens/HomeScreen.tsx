import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  MapPin,
  User,
  ChevronRight,
  Smartphone,
  Tv,
  Zap,
  Phone,
  Monitor,
  Gift,
  ShoppingBag,
  Home as HomeIcon,
  Shirt,
  Sofa,
  Watch,
  Heart,
  Star,
  Filter,
  TrendingUp,
  Clock,
  MapPinned,
} from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function HomeScreen() {
  const navigate = useNavigate();
  const [currentBanner, setCurrentBanner] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState("All Areas");
  const [showLocationFilter, setShowLocationFilter] = useState(false);

  const banners = [
    "https://images.unsplash.com/photo-1766524871302-88590e1fa1bf?w=800",
    "https://images.unsplash.com/photo-1709916306473-429270ca4448?w=800",
    "https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?w=800",
  ];

  const locations = [
    { id: "all", name: "All Areas", pincode: "" },
    { id: "andheri", name: "Andheri", pincode: "400053" },
    { id: "bandra", name: "Bandra", pincode: "400050" },
    { id: "powai", name: "Powai", pincode: "400076" },
    { id: "thane", name: "Thane", pincode: "400601" },
    { id: "navi-mumbai", name: "Navi Mumbai", pincode: "400614" },
  ];

  const localAds = [
    {
      id: 1,
      shopName: "Sharma Electronics",
      offer: "Flat 30% OFF on all TVs",
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400",
      location: "Andheri",
      pincode: "400053",
      badge: "Hot Deal",
      badgeColor: "bg-red-500",
      distance: "0.8 km",
    },
    {
      id: 2,
      shopName: "Fashion Hub",
      offer: "Buy 2 Get 1 Free - Clothing",
      image: "https://images.unsplash.com/photo-1603252109360-909baaf261c7?w=400",
      location: "Bandra",
      pincode: "400050",
      badge: "Trending",
      badgeColor: "bg-purple-500",
      distance: "1.2 km",
    },
    {
      id: 3,
      shopName: "Green Grocers",
      offer: "Fresh Vegetables - 20% OFF",
      image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=400",
      location: "Powai",
      pincode: "400076",
      badge: "New",
      badgeColor: "bg-green-500",
      distance: "2.1 km",
    },
    {
      id: 4,
      shopName: "Mobile Zone",
      offer: "Latest Smartphones at Best Price",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
      location: "Thane",
      pincode: "400601",
      badge: "Popular",
      badgeColor: "bg-blue-500",
      distance: "3.5 km",
    },
    {
      id: 5,
      shopName: "Home Decor Studio",
      offer: "Premium Furniture - Up to 40% OFF",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
      location: "Navi Mumbai",
      pincode: "400614",
      badge: "Sale",
      badgeColor: "bg-orange-500",
      distance: "4.2 km",
    },
  ];

  const filteredAds = selectedLocation === "All Areas"
    ? localAds
    : localAds.filter(ad => ad.location === selectedLocation);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const quickServices = [
    { icon: Smartphone, label: "Recharge", color: "bg-blue-100 text-blue-600" },
    { icon: Zap, label: "Bills", color: "bg-orange-100 text-orange-600" },
    { icon: Tv, label: "DTH", color: "bg-purple-100 text-purple-600" },
    { icon: Phone, label: "Landline", color: "bg-green-100 text-green-600" },
    { icon: Monitor, label: "Broadband", color: "bg-pink-100 text-pink-600" },
    { icon: Gift, label: "Gift Cards", color: "bg-red-100 text-red-600" },
  ];

  const categories = [
    { icon: ShoppingBag, label: "All Categories", link: "/categories" },
    { icon: Smartphone, label: "Mobile", link: "/categories" },
    { icon: Shirt, label: "Fashion", link: "/categories" },
    { icon: Sofa, label: "Home", link: "/categories" },
    { icon: Watch, label: "Watches", link: "/categories" },
  ];

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2999,
      originalPrice: 5999,
      image: "https://images.unsplash.com/photo-1572119244337-bcb4aae995af?w=400",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      price: 4999,
      originalPrice: 9999,
      image: "https://images.unsplash.com/photo-1719744755507-a4c856c57cf7?w=400",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Premium Smartphone",
      price: 29999,
      originalPrice: 39999,
      image: "https://images.unsplash.com/photo-1741061961703-0739f3454314?w=400",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: 1999,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?w=400",
      rating: 4.3,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <div>
              <p className="text-xs opacity-90">Deliver to</p>
              <p className="font-semibold">Mumbai 400001</p>
            </div>
          </div>
          <User className="w-6 h-6" />
        </div>
        <div className="flex gap-2 bg-white rounded-lg p-2">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for products, services..."
            className="flex-1 outline-none text-gray-800 text-sm"
          />
        </div>
      </header>

      {/* Banner Carousel */}
      <div className="relative m-4">
        <div className="overflow-hidden rounded-xl">
          <ImageWithFallback
            src={banners[currentBanner]}
            alt="Banner"
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="flex justify-center gap-2 mt-3">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentBanner(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentBanner ? "bg-orange-500 w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Local Ads Section */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-bold text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-orange-500" />
              Local Deals Near You
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">Shop from nearby merchants</p>
          </div>
          <button
            onClick={() => setShowLocationFilter(!showLocationFilter)}
            className="flex items-center gap-1 bg-white px-3 py-2 rounded-lg shadow-sm text-sm font-medium border border-gray-200"
          >
            <Filter className="w-4 h-4" />
            {selectedLocation}
          </button>
        </div>

        {/* Location Filter Dropdown */}
        {showLocationFilter && (
          <div className="mb-4 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => {
                  setSelectedLocation(location.name);
                  setShowLocationFilter(false);
                }}
                className={`w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors ${
                  selectedLocation === location.name ? "bg-orange-50" : ""
                }`}
              >
                <div>
                  <p className="font-medium text-sm">{location.name}</p>
                  {location.pincode && (
                    <p className="text-xs text-gray-500">PIN: {location.pincode}</p>
                  )}
                </div>
                {selectedLocation === location.name && (
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        )}

        {/* Horizontal Scrolling Ads */}
        <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory">
          {filteredAds.map((ad) => (
            <div
              key={ad.id}
              onClick={() => navigate(`/shop/${ad.id}`)}
              className="flex-shrink-0 w-72 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all snap-start cursor-pointer group"
            >
              <div className="relative">
                <ImageWithFallback
                  src={ad.image}
                  alt={ad.shopName}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute top-3 left-3 ${ad.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1`}>
                  <TrendingUp className="w-3 h-3" />
                  {ad.badge}
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow flex items-center gap-1">
                  <MapPinned className="w-3 h-3" />
                  {ad.distance}
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-bold text-base mb-1 text-gray-800">{ad.shopName}</h4>
                    <p className="text-sm text-orange-600 font-semibold">{ad.offer}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-xs font-medium">{ad.location}</span>
                    <span className="text-xs text-gray-400">• {ad.pincode}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/shop/${ad.id}`);
                    }}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    Visit Store
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ad Stats */}
        <div className="mt-4 flex items-center justify-center gap-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-orange-600">{filteredAds.length}</p>
            <p className="text-xs text-gray-600 mt-0.5">Active Deals</p>
          </div>
          <div className="w-px h-10 bg-gray-300"></div>
          <div className="text-center">
            <p className="text-2xl font-bold text-orange-600">{locations.length - 1}</p>
            <p className="text-xs text-gray-600 mt-0.5">Locations</p>
          </div>
          <div className="w-px h-10 bg-gray-300"></div>
          <div className="text-center">
            <p className="text-2xl font-bold text-orange-600">50+</p>
            <p className="text-xs text-gray-600 mt-0.5">Merchants</p>
          </div>
        </div>
      </div>

      {/* Quick Services */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-lg">Quick Services</h3>
          <button
            onClick={() => navigate("/tripay")}
            className="text-orange-500 text-sm font-semibold flex items-center gap-1"
          >
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {quickServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <button
                key={idx}
                onClick={() => navigate("/tripay")}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-2`}>
                  <Icon className="w-7 h-7" />
                </div>
                <p className="text-xs text-center font-medium">{service.label}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mb-6">
        <h3 className="font-bold text-lg mb-3">Shop by Category</h3>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <button
                key={idx}
                onClick={() => navigate(category.link)}
                className="flex-shrink-0 bg-white rounded-xl p-4 w-24 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-xs text-center font-medium">{category.label}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Products */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-lg">Featured Products</h3>
          <button
            onClick={() => navigate("/categories")}
            className="text-orange-500 text-sm font-semibold"
          >
            See All
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/shop/${product.id}`)}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow text-left cursor-pointer"
            >
              <div className="relative">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // Add to wishlist logic
                  }}
                  className="absolute top-2 right-2 bg-white rounded-full p-2 shadow"
                >
                  <Heart className="w-4 h-4 text-gray-600" />
                </button>
                <div className="absolute bottom-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  {Math.round(
                    ((product.originalPrice - product.price) / product.originalPrice) * 100
                  )}
                  % OFF
                </div>
              </div>
              <div className="p-3">
                <p className="font-semibold text-sm mb-1 line-clamp-2">{product.name}</p>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs text-gray-600">{product.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-500 font-bold">₹{product.price}</span>
                  <span className="text-xs text-gray-400 line-through">₹{product.originalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Hub Banner */}
      <div className="mx-4 mb-6">
        <button
          onClick={() => navigate("/services")}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-md text-left"
        >
          <h3 className="text-xl font-bold mb-2">Need Services?</h3>
          <p className="text-sm opacity-90 mb-3">
            Groceries, Movers, Properties & More
          </p>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Explore Services</span>
            <ChevronRight className="w-5 h-5" />
          </div>
        </button>
      </div>

      <BottomNav active="home" />
    </div>
  );
}