import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ChevronLeft,
  Heart,
  Share2,
  Star,
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  ShoppingBag,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  CreditCard,
  Wallet,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ShopDetailScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  // Mock shop data
  const shop = {
    id: id,
    name: "Premium Electronics Store",
    rating: 4.6,
    reviews: 1250,
    image: "https://images.unsplash.com/photo-1642345335843-5d216041d9d5?w=800",
    category: "Electronics",
    description: "Your trusted destination for the latest electronics and gadgets. We offer genuine products with warranty and excellent after-sales service.",
    address: "Shop 123, MG Road, Mumbai 400001",
    phone: "+91 98765 43210",
    email: "contact@premiumelectronics.com",
    website: "www.premiumelectronics.com",
    timings: "Mon-Sat: 10:00 AM - 9:00 PM",
    social: {
      facebook: "premiumelectronics",
      instagram: "@premiumelectronics",
      twitter: "@premium_elec",
    },
  };

  const products = [
    {
      id: 1,
      name: "Wireless Headphones Pro",
      price: 2999,
      originalPrice: 5999,
      image: "https://images.unsplash.com/photo-1572119244337-bcb4aae995af?w=300",
      inStock: true,
    },
    {
      id: 2,
      name: "Smart Watch Ultra",
      price: 4999,
      originalPrice: 9999,
      image: "https://images.unsplash.com/photo-1719744755507-a4c856c57cf7?w=300",
      inStock: true,
    },
    {
      id: 3,
      name: "Premium Smartphone",
      price: 29999,
      originalPrice: 39999,
      image: "https://images.unsplash.com/photo-1741061961703-0739f3454314?w=300",
      inStock: false,
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: 1999,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1620987278429-ab178d6eb547?w=300",
      inStock: true,
    },
  ];

  const paymentMethods = [
    { id: "card", icon: CreditCard, label: "Credit/Debit Card" },
    { id: "tripay", icon: Wallet, label: "TriPay Wallet", balance: 5420.50 },
    { id: "upi", icon: Phone, label: "UPI Payment" },
    { id: "cod", icon: ShoppingBag, label: "Cash on Delivery" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="bg-white sticky top-0 z-10 shadow-sm">
        <div className="flex items-center justify-between p-4">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-bold flex-1 mx-3">Shop Details</h1>
          <div className="flex gap-3">
            <button className="p-2">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Shop Banner */}
      <div className="relative">
        <ImageWithFallback
          src={shop.image}
          alt={shop.name}
          className="w-full h-56 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
          <h2 className="text-2xl font-bold mb-1">{shop.name}</h2>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-green-500 px-2 py-1 rounded">
              <Star className="w-3 h-3 fill-white" />
              <span className="text-sm font-semibold">{shop.rating}</span>
            </div>
            <span className="text-sm">({shop.reviews} reviews)</span>
          </div>
        </div>
      </div>

      {/* Shop Info */}
      <div className="bg-white p-4 mb-3">
        <p className="text-gray-700 mb-4">{shop.description}</p>
        
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold">Address</p>
              <p className="text-sm text-gray-600">{shop.address}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold">Timings</p>
              <p className="text-sm text-gray-600">{shop.timings}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold">Contact</p>
              <p className="text-sm text-blue-600">{shop.phone}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold">Email</p>
              <p className="text-sm text-blue-600">{shop.email}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Globe className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold">Website</p>
              <p className="text-sm text-blue-600">{shop.website}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-white p-4 mb-3">
        <h3 className="font-bold mb-3">Connect With Us</h3>
        <div className="flex gap-3">
          <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2">
            <Facebook className="w-5 h-5 fill-white" />
            <span className="font-semibold text-sm">Facebook</span>
          </button>
          <button className="flex-1 bg-gradient-to-br from-purple-600 to-pink-600 text-white py-3 rounded-lg flex items-center justify-center gap-2">
            <Instagram className="w-5 h-5" />
            <span className="font-semibold text-sm">Instagram</span>
          </button>
        </div>
        <div className="flex gap-3 mt-3">
          <button className="flex-1 bg-sky-500 text-white py-3 rounded-lg flex items-center justify-center gap-2">
            <Twitter className="w-5 h-5" />
            <span className="font-semibold text-sm">Twitter</span>
          </button>
          <button className="flex-1 bg-green-500 text-white py-3 rounded-lg flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold text-sm">WhatsApp</span>
          </button>
        </div>
      </div>

      {/* Products */}
      <div className="bg-white p-4 mb-3">
        <h3 className="font-bold text-lg mb-3">Available Products</h3>
        <div className="space-y-3">
          {products.map((product) => (
            <div key={product.id} className="flex gap-3 border border-gray-200 rounded-lg p-3">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-1">{product.name}</h4>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-orange-500 font-bold">₹{product.price}</span>
                  <span className="text-xs text-gray-400 line-through">₹{product.originalPrice}</span>
                  <span className="text-xs text-green-600 font-semibold">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                </div>
                {product.inStock ? (
                  <span className="text-xs text-green-600 font-semibold">In Stock</span>
                ) : (
                  <span className="text-xs text-red-600 font-semibold">Out of Stock</span>
                )}
              </div>
              {product.inStock && (
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold self-center">
                  Add
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-white p-4">
        <h3 className="font-bold text-lg mb-3">Payment Methods</h3>
        <div className="space-y-2">
          {paymentMethods.map((method) => {
            const Icon = method.icon;
            return (
              <button
                key={method.id}
                onClick={() => setSelectedPayment(method.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border-2 transition-all ${
                  selectedPayment === method.id
                    ? "border-orange-500 bg-orange-50"
                    : "border-gray-200"
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  selectedPayment === method.id ? "bg-orange-500 text-white" : "bg-gray-100"
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-semibold text-sm">{method.label}</p>
                  {'balance' in method && (
                    <p className="text-xs text-gray-600">Balance: ₹{method.balance.toFixed(2)}</p>
                  )}
                </div>
                {selectedPayment === method.id && (
                  <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-2 text-lg font-bold"
            >
              -
            </button>
            <span className="px-4 py-2 font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-2 text-lg font-bold"
            >
              +
            </button>
          </div>
          <button
            onClick={() => navigate("/tripay")}
            className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold"
          >
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
}
