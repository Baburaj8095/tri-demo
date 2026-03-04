import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  User,
  ShoppingBag,
  Heart,
  MapPin,
  CreditCard,
  Bell,
  HelpCircle,
  Settings,
  LogOut,
  ChevronRight,
  Edit,
  Star,
} from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ProfileScreen() {
  const navigate = useNavigate();

  const menuSections = [
    {
      title: "Account",
      items: [
        { icon: User, label: "Edit Profile", path: "/profile/edit" },
        { icon: MapPin, label: "Saved Addresses", path: "/profile/addresses", badge: "3" },
        { icon: CreditCard, label: "Payment Methods", path: "/profile/payments" },
      ],
    },
    {
      title: "My Activity",
      items: [
        { icon: ShoppingBag, label: "My Orders", path: "/profile/orders", badge: "5" },
        { icon: Heart, label: "Wishlist", path: "/profile/wishlist", badge: "12" },
        { icon: Star, label: "Reviews & Ratings", path: "/profile/reviews" },
      ],
    },
    {
      title: "Settings",
      items: [
        { icon: Bell, label: "Notifications", path: "/profile/notifications" },
        { icon: Settings, label: "App Settings", path: "/profile/settings" },
        { icon: HelpCircle, label: "Help & Support", path: "/profile/help" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold flex-1">My Profile</h1>
        </div>
      </header>

      {/* Profile Info Card */}
      <div className="m-4 bg-white rounded-xl p-5 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-2xl font-bold overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?w=200"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 shadow-lg">
              <Edit className="w-3 h-3 text-orange-500" />
            </button>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-1">Rahul Sharma</h2>
            <p className="text-sm text-gray-600 mb-1">+91 98765 43210</p>
            <p className="text-sm text-gray-600">rahul.sharma@email.com</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mt-5 pt-5 border-t border-gray-100">
          <button className="text-center">
            <p className="text-2xl font-bold text-orange-500">24</p>
            <p className="text-xs text-gray-600">Orders</p>
          </button>
          <button className="text-center border-x border-gray-100">
            <p className="text-2xl font-bold text-orange-500">12</p>
            <p className="text-xs text-gray-600">Wishlist</p>
          </button>
          <button className="text-center">
            <p className="text-2xl font-bold text-orange-500">₹5,420</p>
            <p className="text-xs text-gray-600">TriPay</p>
          </button>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="px-4 space-y-4">
        {menuSections.map((section, sectionIdx) => (
          <div key={sectionIdx} className="bg-white rounded-xl overflow-hidden shadow-sm">
            <h3 className="font-bold text-sm text-gray-500 uppercase px-4 pt-4 pb-2">
              {section.title}
            </h3>
            <div className="divide-y divide-gray-100">
              {section.items.map((item, itemIdx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={itemIdx}
                    onClick={() => navigate(item.path)}
                    className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-orange-600" />
                    </div>
                    <span className="flex-1 text-left font-medium">{item.label}</span>
                    {item.badge && (
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        {item.badge}
                      </span>
                    )}
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Logout Button */}
        <button className="w-full bg-white rounded-xl p-4 shadow-sm flex items-center justify-center gap-3 text-red-600 font-semibold hover:bg-red-50 transition-colors">
          <LogOut className="w-5 h-5" />
          Logout
        </button>

        {/* App Version */}
        <p className="text-center text-xs text-gray-500 py-4">
          Version 1.0.0
        </p>
      </div>

      <BottomNav active="profile" />
    </div>
  );
}
