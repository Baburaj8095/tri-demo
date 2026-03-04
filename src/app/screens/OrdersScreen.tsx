import { useState } from "react";
import { useNavigate } from "react-router";
import {
  ChevronLeft,
  Package,
  Truck,
  CheckCircle,
  XCircle,
  Clock,
  Search,
  Filter,
  Star,
  ChevronRight,
} from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function OrdersScreen() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = [
    { id: "all", label: "All" },
    { id: "delivered", label: "Delivered" },
    { id: "processing", label: "Processing" },
    { id: "cancelled", label: "Cancelled" },
  ];

  const orders = [
    {
      id: "ORD123456",
      status: "delivered",
      statusText: "Delivered",
      date: "Mar 1, 2026",
      deliveredDate: "Mar 3, 2026",
      total: 2999,
      items: [
        {
          name: "Wireless Headphones",
          image: "https://images.unsplash.com/photo-1572119244337-bcb4aae995af?w=400",
          qty: 1,
          price: 2999,
        },
      ],
      canReview: true,
    },
    {
      id: "ORD123457",
      status: "processing",
      statusText: "Out for Delivery",
      date: "Mar 3, 2026",
      estimatedDelivery: "Mar 4, 2026",
      total: 4999,
      items: [
        {
          name: "Smart Watch Pro",
          image: "https://images.unsplash.com/photo-1719744755507-a4c856c57cf7?w=400",
          qty: 1,
          price: 4999,
        },
      ],
      canTrack: true,
    },
    {
      id: "ORD123458",
      status: "processing",
      statusText: "Shipped",
      date: "Mar 2, 2026",
      estimatedDelivery: "Mar 5, 2026",
      total: 31998,
      items: [
        {
          name: "Premium Smartphone",
          image: "https://images.unsplash.com/photo-1741061961703-0739f3454314?w=400",
          qty: 1,
          price: 29999,
        },
        {
          name: "Bluetooth Speaker",
          image: "https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?w=400",
          qty: 1,
          price: 1999,
        },
      ],
      canTrack: true,
    },
    {
      id: "ORD123459",
      status: "cancelled",
      statusText: "Cancelled",
      date: "Feb 28, 2026",
      cancelledDate: "Feb 28, 2026",
      total: 1999,
      items: [
        {
          name: "Wireless Mouse",
          image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
          qty: 1,
          price: 1999,
        },
      ],
      refundStatus: "Refund Processed",
    },
    {
      id: "ORD123460",
      status: "delivered",
      statusText: "Delivered",
      date: "Feb 25, 2026",
      deliveredDate: "Feb 27, 2026",
      total: 3499,
      items: [
        {
          name: "Mechanical Keyboard",
          image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=400",
          qty: 1,
          price: 3499,
        },
      ],
      canReview: true,
    },
  ];

  const filteredOrders = orders.filter((order) => {
    const matchesTab = activeTab === "all" || order.status === activeTab;
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.items.some((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesTab && matchesSearch;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "processing":
        return <Truck className="w-5 h-5 text-blue-500" />;
      case "cancelled":
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Package className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-700";
      case "processing":
        return "bg-blue-100 text-blue-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 sticky top-0 z-10">
        <div className="flex items-center gap-3 mb-3">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold flex-1">My Orders</h1>
          <button>
            <Filter className="w-6 h-6" />
          </button>
        </div>

        {/* Search */}
        <div className="flex gap-2 bg-white/20 backdrop-blur-sm rounded-lg p-2">
          <Search className="w-5 h-5" />
          <input
            type="text"
            placeholder="Search orders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 outline-none bg-transparent placeholder-white/70 text-white"
          />
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white px-4 pt-4 pb-2 sticky top-[124px] z-10 shadow-sm">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const count = orders.filter((order) =>
              tab.id === "all" ? true : order.status === tab.id
            ).length;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {tab.label} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Orders List */}
      <div className="p-4 space-y-4">
        {filteredOrders.length === 0 ? (
          <div className="text-center py-16">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 font-medium mb-2">No orders found</p>
            <p className="text-sm text-gray-400">
              {searchQuery
                ? "Try a different search term"
                : "Start shopping to see your orders here"}
            </p>
            <button
              onClick={() => navigate("/")}
              className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              {/* Order Header */}
              <div className="p-4 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(order.status)}
                    <span className="font-bold text-sm">{order.id}</span>
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.statusText}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>Ordered on {order.date}</span>
                  </div>
                  {order.estimatedDelivery && (
                    <span className="text-blue-600 font-medium">
                      Est. {order.estimatedDelivery}
                    </span>
                  )}
                </div>
              </div>

              {/* Order Items */}
              <div className="p-4">
                {order.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 mb-3 last:mb-0"
                    onClick={() => navigate(`/shop/${idx + 1}`)}
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-sm mb-1">{item.name}</p>
                      <p className="text-xs text-gray-600 mb-2">
                        Qty: {item.qty}
                      </p>
                      <p className="text-orange-500 font-bold">₹{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Footer */}
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600">Total Amount</span>
                  <span className="font-bold text-lg text-orange-500">
                    ₹{order.total}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {order.canTrack && (
                    <button
                      onClick={() => navigate(`/order/track/${order.id}`)}
                      className="flex-1 bg-blue-500 text-white py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
                    >
                      <Truck className="w-4 h-4" />
                      Track Order
                    </button>
                  )}
                  {order.canReview && (
                    <button
                      onClick={() =>
                        navigate(`/product/review/${order.id}`)
                      }
                      className="flex-1 bg-orange-500 text-white py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors"
                    >
                      <Star className="w-4 h-4" />
                      Rate & Review
                    </button>
                  )}
                  {order.refundStatus && (
                    <div className="flex-1 bg-green-100 text-green-700 py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      {order.refundStatus}
                    </div>
                  )}
                  <button
                    onClick={() => navigate(`/order/details/${order.id}`)}
                    className="bg-gray-200 text-gray-700 px-4 py-2.5 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <BottomNav active="profile" />
    </div>
  );
}
