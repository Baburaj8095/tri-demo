import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  ChevronLeft,
  Filter,
  Smartphone,
  Laptop,
  Camera,
  Tv,
  Watch,
  Shirt,
  Sofa,
  Book,
  Dumbbell,
  Gift,
  Heart,
  Star,
} from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function CategoriesScreen() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Electronics");

  const categories = [
    { name: "Electronics", icon: Smartphone, color: "bg-blue-100 text-blue-600" },
    { name: "Computers", icon: Laptop, color: "bg-purple-100 text-purple-600" },
    { name: "Fashion", icon: Shirt, color: "bg-pink-100 text-pink-600" },
    { name: "Home & Kitchen", icon: Sofa, color: "bg-orange-100 text-orange-600" },
    { name: "Books", icon: Book, color: "bg-green-100 text-green-600" },
    { name: "Sports", icon: Dumbbell, color: "bg-red-100 text-red-600" },
    { name: "Cameras", icon: Camera, color: "bg-indigo-100 text-indigo-600" },
    { name: "TV & Audio", icon: Tv, color: "bg-yellow-100 text-yellow-600" },
  ];

  const products: Record<string, any[]> = {
    Electronics: [
      {
        id: 1,
        name: "Wireless Headphones Pro",
        price: 2999,
        originalPrice: 5999,
        image: "https://images.unsplash.com/photo-1572119244337-bcb4aae995af?w=400",
        rating: 4.5,
      },
      {
        id: 2,
        name: "Smart Watch Ultra",
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
    ],
    Computers: [
      {
        id: 5,
        name: "Gaming Laptop",
        price: 79999,
        originalPrice: 99999,
        image: "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?w=400",
        rating: 4.6,
      },
      {
        id: 6,
        name: "Wireless Mouse",
        price: 899,
        originalPrice: 1499,
        image: "https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?w=400",
        rating: 4.4,
      },
    ],
    Fashion: [
      {
        id: 7,
        name: "Designer T-Shirt",
        price: 799,
        originalPrice: 1599,
        image: "https://images.unsplash.com/photo-1709916306473-429270ca4448?w=400",
        rating: 4.2,
      },
      {
        id: 8,
        name: "Casual Jeans",
        price: 1299,
        originalPrice: 2499,
        image: "https://images.unsplash.com/photo-1709916306473-429270ca4448?w=400",
        rating: 4.5,
      },
    ],
    "Home & Kitchen": [
      {
        id: 9,
        name: "Blender Pro",
        price: 3499,
        originalPrice: 5999,
        image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400",
        rating: 4.7,
      },
      {
        id: 10,
        name: "Dining Chair Set",
        price: 8999,
        originalPrice: 14999,
        image: "https://images.unsplash.com/photo-1636212644134-5867a3807ef9?w=400",
        rating: 4.6,
      },
    ],
    Books: [
      {
        id: 11,
        name: "Best Seller Collection",
        price: 499,
        originalPrice: 999,
        image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400",
        rating: 4.8,
      },
    ],
    Sports: [
      {
        id: 12,
        name: "Yoga Mat Premium",
        price: 1299,
        originalPrice: 2499,
        image: "https://images.unsplash.com/photo-1602211844066-d3bb556e983b?w=400",
        rating: 4.5,
      },
    ],
    Cameras: [
      {
        id: 13,
        name: "DSLR Camera Kit",
        price: 45999,
        originalPrice: 59999,
        image: "https://images.unsplash.com/photo-1579535984712-92fffbbaa266?w=400",
        rating: 4.9,
      },
    ],
    "TV & Audio": [
      {
        id: 14,
        name: "Smart TV 55 inch",
        price: 39999,
        originalPrice: 54999,
        image: "https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?w=400",
        rating: 4.7,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 sticky top-0 z-10">
        <div className="flex items-center gap-3 mb-3">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold flex-1">Categories</h1>
          <Filter className="w-6 h-6" />
        </div>
        <div className="flex gap-2 bg-white rounded-lg p-2">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search in categories..."
            className="flex-1 outline-none text-gray-800 text-sm"
          />
        </div>
      </header>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-28 bg-white border-r border-gray-200 overflow-y-auto">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.name;
            return (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`w-full p-4 flex flex-col items-center gap-2 border-b border-gray-100 ${
                  isActive ? "bg-orange-50 border-l-4 border-l-orange-500" : ""
                }`}
              >
                <div className={`${category.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className={`text-xs text-center font-medium ${isActive ? "text-orange-500" : "text-gray-700"}`}>
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="flex-1 p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-lg">{selectedCategory}</h2>
            <span className="text-sm text-gray-600">
              {products[selectedCategory]?.length || 0} items
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {(products[selectedCategory] || []).map((product) => (
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
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
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
      </div>

      <BottomNav active="categories" />
    </div>
  );
}