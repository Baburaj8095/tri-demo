import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  ChevronLeft,
  Package,
  Truck,
  CheckCircle,
  MapPin,
  Phone,
  Copy,
  Share2,
  Clock,
} from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function OrderTrackingScreen() {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const order = {
    id: orderId || "ORD123457",
    status: "out_for_delivery",
    date: "Mar 3, 2026",
    estimatedDelivery: "Mar 4, 2026, 7:00 PM",
    total: 4999,
    items: [
      {
        name: "Smart Watch Pro",
        image: "https://images.unsplash.com/photo-1719744755507-a4c856c57cf7?w=400",
        qty: 1,
        price: 4999,
      },
    ],
    trackingNumber: "TRK9876543210",
    courier: "Express Delivery",
    deliveryPartner: {
      name: "Rajesh Kumar",
      phone: "+91 98765 43210",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200",
    },
    shippingAddress: {
      name: "Rahul Sharma",
      phone: "+91 98765 43210",
      address: "Flat 301, Sunshine Apartments, Andheri West, Mumbai - 400053",
    },
  };

  const trackingSteps = [
    {
      status: "Order Placed",
      date: "Mar 3, 2026",
      time: "10:30 AM",
      description: "Your order has been placed successfully",
      completed: true,
      icon: Package,
    },
    {
      status: "Order Confirmed",
      date: "Mar 3, 2026",
      time: "11:00 AM",
      description: "Seller has confirmed your order",
      completed: true,
      icon: CheckCircle,
    },
    {
      status: "Shipped",
      date: "Mar 3, 2026",
      time: "3:45 PM",
      description: "Your order has been shipped",
      completed: true,
      icon: Truck,
    },
    {
      status: "Out for Delivery",
      date: "Mar 4, 2026",
      time: "9:15 AM",
      description: "Your order is out for delivery",
      completed: true,
      current: true,
      icon: Truck,
    },
    {
      status: "Delivered",
      date: "Expected by 7:00 PM",
      time: "",
      description: "Your order will be delivered soon",
      completed: false,
      icon: CheckCircle,
    },
  ];

  const copyTrackingNumber = () => {
    navigator.clipboard.writeText(order.trackingNumber);
    setCopiedToClipboard(true);
    setTimeout(() => setCopiedToClipboard(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-xl font-bold">Track Order</h1>
            <p className="text-sm opacity-90">{order.id}</p>
          </div>
          <button>
            <Share2 className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Current Status Banner */}
      <div className="m-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
            <Truck className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <p className="text-sm opacity-90 mb-1">Current Status</p>
            <h2 className="text-2xl font-bold">Out for Delivery</h2>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg p-3">
          <Clock className="w-5 h-5" />
          <div className="flex-1">
            <p className="text-xs opacity-90">Expected Delivery</p>
            <p className="font-semibold">{order.estimatedDelivery}</p>
          </div>
        </div>
      </div>

      {/* Delivery Partner */}
      <div className="mx-4 mb-4 bg-white rounded-xl p-4 shadow-sm">
        <h3 className="font-bold mb-3 text-gray-700">Delivery Partner</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ImageWithFallback
              src={order.deliveryPartner.image}
              alt={order.deliveryPartner.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{order.deliveryPartner.name}</p>
              <p className="text-sm text-gray-600">{order.courier}</p>
            </div>
          </div>
          <a
            href={`tel:${order.deliveryPartner.phone}`}
            className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Tracking Number */}
      <div className="mx-4 mb-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4 border border-orange-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-600 mb-1">Tracking Number</p>
            <p className="font-bold text-gray-800">{order.trackingNumber}</p>
          </div>
          <button
            onClick={copyTrackingNumber}
            className="bg-white px-4 py-2 rounded-lg shadow-sm flex items-center gap-2 hover:shadow-md transition-shadow"
          >
            <Copy className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-semibold text-gray-700">
              {copiedToClipboard ? "Copied!" : "Copy"}
            </span>
          </button>
        </div>
      </div>

      {/* Tracking Timeline */}
      <div className="mx-4 mb-4 bg-white rounded-xl p-4 shadow-sm">
        <h3 className="font-bold mb-4 text-gray-700">Tracking History</h3>
        <div className="relative">
          {trackingSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex gap-4 pb-8 last:pb-0 relative">
                {/* Timeline Line */}
                {idx !== trackingSteps.length - 1 && (
                  <div
                    className={`absolute left-5 top-12 w-0.5 h-full ${
                      step.completed ? "bg-green-500" : "bg-gray-200"
                    }`}
                  />
                )}

                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                    step.current
                      ? "bg-blue-500 text-white ring-4 ring-blue-100"
                      : step.completed
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <p
                      className={`font-bold ${
                        step.current
                          ? "text-blue-600"
                          : step.completed
                          ? "text-gray-800"
                          : "text-gray-400"
                      }`}
                    >
                      {step.status}
                    </p>
                    {step.current && (
                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-1">
                    {step.description}
                  </p>
                  <p className="text-xs text-gray-500">
                    {step.date} {step.time && `• ${step.time}`}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Order Items */}
      <div className="mx-4 mb-4 bg-white rounded-xl p-4 shadow-sm">
        <h3 className="font-bold mb-3 text-gray-700">Order Items</h3>
        {order.items.map((item, idx) => (
          <div key={idx} className="flex gap-3">
            <ImageWithFallback
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex-1">
              <p className="font-semibold text-sm mb-1">{item.name}</p>
              <p className="text-xs text-gray-600 mb-2">Qty: {item.qty}</p>
              <p className="text-orange-500 font-bold">₹{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Delivery Address */}
      <div className="mx-4 mb-4 bg-white rounded-xl p-4 shadow-sm">
        <h3 className="font-bold mb-3 text-gray-700 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-orange-500" />
          Delivery Address
        </h3>
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="font-semibold mb-1">{order.shippingAddress.name}</p>
          <p className="text-sm text-gray-600 mb-2">
            {order.shippingAddress.address}
          </p>
          <p className="text-sm text-gray-600">
            Phone: {order.shippingAddress.phone}
          </p>
        </div>
      </div>

      {/* Help Section */}
      <div className="mx-4 mb-4">
        <button
          onClick={() => navigate("/profile/help")}
          className="w-full bg-white border-2 border-orange-500 text-orange-500 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors"
        >
          Need Help with this Order?
        </button>
      </div>

      <BottomNav active="profile" />
    </div>
  );
}
