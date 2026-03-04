import { Link, useNavigate } from "react-router-dom";
import { Home, ShoppingBag, Wallet, Grid3x3, User } from "lucide-react";

interface BottomNavProps {
  active: "home" | "categories" | "wallet" | "services" | "profile";
}

export function BottomNav({ active }: BottomNavProps) {
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, label: "Home", id: "home" as const, path: "/" },
    { icon: Grid3x3, label: "Categories", id: "categories" as const, path: "/categories" },
    { icon: Wallet, label: "TriPay", id: "wallet" as const, path: "/tripay" },
    { icon: ShoppingBag, label: "Services", id: "services" as const, path: "/services" },
    { icon: User, label: "Profile", id: "profile" as const, path: "/profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-md mx-auto flex justify-around py-3 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center gap-1 min-w-0 flex-1"
            >
              <Icon
                className={`w-6 h-6 ${
                  isActive ? "text-orange-500" : "text-gray-600"
                }`}
              />
              <span
                className={`text-xs ${
                  isActive ? "text-orange-500 font-semibold" : "text-gray-600"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
