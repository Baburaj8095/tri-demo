import { useNavigate, useParams } from "react-router-dom";
import {
  ChevronLeft,
  Package,
  MapPin,
  CreditCard,
  FileText,
  Download,
  RefreshCcw,
  MessageCircle,
  Truck,
  Star,
} from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function OrderDetailsScreen() {
  const navigate = useNavigate();
  const { orderId } = useParams();

  // Mock order data - in real app, fetch based on orderId
  const order = {
    id: orderId || "ORD123456",
    status: "delivered",
    statusText: "Delivered",
    date: "Mar 1, 2026",
    deliveredDate: "Mar 3, 2026",
    estimatedDelivery: "Mar 3, 2026",
    items: [
      {
        id: 1,
        name: "Wireless Headphones",
        image: "https://images.unsplash.com/photo-1572119244337-bcb4aae995af?w=400",
        qty: 1,
        price: 2999,
        sku: "WH-BT-001",
      },
    ],
    subtotal: 2999,
    shipping: 0,
    tax: 150,
    discount: 500,
    total: 2649,
    paymentMethod: {
      type: "TriPay Wallet",
      icon: CreditCard,
      last4: "****",
    },
    shippingAddress: {
      name: "Rahul Sharma",
      phone: "+91 98765 43210",
      address: "Flat 301, Sunshine Apartments",
      area: "Andheri West",
      city: "Mumbai",
      pincode: "400053",
    },
    billingAddress: {
      name: "Rahul Sharma",
      phone: "+91 98765 43210",
      address: "Flat 301, Sunshine Apartments",
      area: "Andheri West",
      city: "Mumbai",
      pincode: "400053",
    },
    trackingNumber: "TRK9876543210",
    invoiceNumber: "INV-2026-001234",
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-700 border-green-200";
      case "processing":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "cancelled":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-xl font-bold">Order Details</h1>
            <p className="text-sm opacity-90">{order.id}</p>
          </div>
          <button onClick={() => alert("Download invoice")}>
            <Download className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Order Status */}
      <div className="m-4 bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-600 mb-1">Order Status</p>
            <p className="text-2xl font-bold text-gray-800">
              {order.statusText}
            </p>
          </div>
          <div
            className={`px-4 py-2 rounded-full font-semibold text-sm border-2 ${getStatusColor(
              order.status
            )}`}
          >
            {order.statusText}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
          <div>
            <p className="text-xs text-gray-500 mb-1">Order Date</p>
            <p className="font-semibold text-sm">{order.date}</p>
          </div>
          {order.deliveredDate && (
            <div>
              <p className="text-xs text-gray-500 mb-1">Delivered On</p>
              <p className="font-semibold text-sm text-green-600">
                {order.deliveredDate}
              </p>
            </div>
          )}
          {order.trackingNumber && (
            <div className="col-span-2">
              <p className="text-xs text-gray-500 mb-1">Tracking Number</p>
              <p className="font-semibold text-sm text-blue-600">
                {order.trackingNumber}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      {order.status === "processing" && (
        <div className="mx-4 mb-4 grid grid-cols-2 gap-3">
          <button
            onClick={() => navigate(`/order/track/${order.id}`)}
            className="bg-blue-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
          >
            <Truck className="w-5 h-5" />
            Track Order
          </button>
          <button
            onClick={() => navigate("/profile/help")}
            className="bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Help
          </button>
        </div>
      )}

      {order.status === "delivered" && (
        <div className="mx-4 mb-4 grid grid-cols-2 gap-3">
          <button
            onClick={() => navigate(`/product/review/${order.id}`)}
            className="bg-orange-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors"
          >
            <Star className="w-5 h-5" />
            Rate & Review
          </button>
          <button
            onClick={() => alert("Return initiated")}
            className="bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
          >
            <RefreshCcw className="w-5 h-5" />
            Return
          </button>
        </div>
      )}

      {/* Order Items */}
      <div className="mx-4 mb-4 bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <h3 className="font-bold text-gray-700 flex items-center gap-2">
            <Package className="w-5 h-5 text-orange-500" />
            Order Items
          </h3>
        </div>
        <div className="p-4 space-y-4">
          {order.items.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/shop/${item.id}`)}
              className="flex gap-4 cursor-pointer hover:bg-gray-50 -m-2 p-2 rounded-lg transition-colors"
            >
              <ImageWithFallback
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <p className="font-semibold mb-1">{item.name}</p>
                <p className="text-xs text-gray-500 mb-2">SKU: {item.sku}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">Qty: {item.qty}</p>
                  <p className="text-orange-500 font-bold">₹{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="mx-4 mb-4 bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <h3 className="font-bold text-gray-700 flex items-center gap-2">
            <FileText className="w-5 h-5 text-orange-500" />
            Price Details
          </h3>
        </div>
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold">₹{order.subtotal}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Shipping</span>
            <span className="font-semibold text-green-600">
              {order.shipping === 0 ? "FREE" : `₹${order.shipping}`}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Tax</span>
            <span className="font-semibold">₹{order.tax}</span>
          </div>
          {order.discount > 0 && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Discount</span>
              <span className="font-semibold text-green-600">
                -₹{order.discount}
              </span>
            </div>
          )}
          <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
            <span className="font-bold text-gray-800">Total Amount</span>
            <span className="font-bold text-xl text-orange-500">
              ₹{order.total}
            </span>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="mx-4 mb-4 bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <h3 className="font-bold text-gray-700 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-orange-500" />
            Payment Method
          </h3>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="flex-1">
              <p className="font-semibold">{order.paymentMethod.type}</p>
              <p className="text-sm text-gray-600">
                {order.paymentMethod.last4}
              </p>
            </div>
            <div className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
              PAID
            </div>
          </div>
        </div>
      </div>

      {/* Shipping Address */}
      <div className="mx-4 mb-4 bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <h3 className="font-bold text-gray-700 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-orange-500" />
            Shipping Address
          </h3>
        </div>
        <div className="p-4">
          <p className="font-semibold mb-1">{order.shippingAddress.name}</p>
          <p className="text-sm text-gray-700 mb-1">
            {order.shippingAddress.address}
          </p>
          <p className="text-sm text-gray-700 mb-1">
            {order.shippingAddress.area}, {order.shippingAddress.city}
          </p>
          <p className="text-sm text-gray-700 mb-2">
            PIN: {order.shippingAddress.pincode}
          </p>
          <p className="text-sm text-gray-600">
            Phone: {order.shippingAddress.phone}
          </p>
        </div>
      </div>

      {/* Invoice */}
      <div className="mx-4 mb-4">
        <button
          onClick={() => alert("Downloading invoice...")}
          className="w-full bg-white border-2 border-orange-500 text-orange-500 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-orange-50 transition-colors"
        >
          <Download className="w-5 h-5" />
          Download Invoice ({order.invoiceNumber})
        </button>
      </div>

      {/* Need Help */}
      <div className="mx-4 mb-4">
        <button
          onClick={() => navigate("/profile/help")}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-blue-600 hover:to-blue-700 transition-all shadow-md"
        >
          <MessageCircle className="w-5 h-5" />
          Need Help with this Order?
        </button>
      </div>

      <BottomNav active="profile" />
    </div>
  );
}
