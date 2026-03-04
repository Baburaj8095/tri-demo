import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  Wallet,
  CreditCard,
  Smartphone,
  Zap,
  Tv,
  Phone,
  Monitor,
  Gift,
  Banknote,
  Send,
  QrCode,
  History,
  Plus,
} from "lucide-react";
import { BottomNav } from "../components/BottomNav";

export function TriPayScreen() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"recharge" | "bills" | "wallet">("wallet");
  const [walletBalance] = useState(5420.50);

  const quickActions = [
    { icon: Smartphone, label: "Mobile Recharge", action: "recharge" },
    { icon: Zap, label: "Electricity", action: "bills" },
    { icon: Tv, label: "DTH", action: "recharge" },
    { icon: Phone, label: "Landline", action: "bills" },
    { icon: Monitor, label: "Broadband", action: "bills" },
    { icon: Gift, label: "Gift Cards", action: "recharge" },
  ];

  const recentTransactions = [
    { id: 1, type: "Mobile Recharge", amount: -299, date: "Today, 2:30 PM", status: "Success" },
    { id: 2, type: "Electricity Bill", amount: -1500, date: "Yesterday, 11:00 AM", status: "Success" },
    { id: 3, type: "Money Added", amount: 5000, date: "Mar 2, 2026", status: "Success" },
    { id: 4, type: "DTH Recharge", amount: -450, date: "Mar 1, 2026", status: "Success" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-4 sticky top-0 z-10">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold flex-1">TriPay Wallet</h1>
          <History className="w-6 h-6" />
        </div>

        {/* Wallet Balance Card */}
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm opacity-90 mb-1">Total Balance</p>
              <p className="text-3xl font-bold">₹{walletBalance.toFixed(2)}</p>
            </div>
            <Wallet className="w-12 h-12 opacity-80" />
          </div>
          <div className="flex gap-3">
            <button className="flex-1 bg-white text-yellow-600 py-2 rounded-xl font-semibold text-sm flex items-center justify-center gap-2">
              <Plus className="w-4 h-4" />
              Add Money
            </button>
            <button className="flex-1 bg-yellow-700 text-white py-2 rounded-xl font-semibold text-sm flex items-center justify-center gap-2">
              <Send className="w-4 h-4" />
              Send
            </button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-[180px] z-10">
        <div className="flex">
          {[
            { id: "wallet" as const, label: "Wallet" },
            { id: "recharge" as const, label: "Recharge" },
            { id: "bills" as const, label: "Bills" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 font-semibold ${
                activeTab === tab.id
                  ? "text-yellow-600 border-b-2 border-yellow-600"
                  : "text-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Wallet Tab */}
      {activeTab === "wallet" && (
        <div className="p-4">
          {/* Quick Actions */}
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-3">Quick Pay</h3>
            <div className="grid grid-cols-4 gap-3">
              <button className="flex flex-col items-center gap-2">
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center">
                  <QrCode className="w-7 h-7 text-blue-600" />
                </div>
                <span className="text-xs text-center">Scan QR</span>
              </button>
              <button className="flex flex-col items-center gap-2">
                <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-7 h-7 text-green-600" />
                </div>
                <span className="text-xs text-center">Cards</span>
              </button>
              <button className="flex flex-col items-center gap-2">
                <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center">
                  <Banknote className="w-7 h-7 text-purple-600" />
                </div>
                <span className="text-xs text-center">Bank</span>
              </button>
              <button className="flex flex-col items-center gap-2">
                <div className="bg-orange-100 w-14 h-14 rounded-xl flex items-center justify-center">
                  <Send className="w-7 h-7 text-orange-600" />
                </div>
                <span className="text-xs text-center">Transfer</span>
              </button>
            </div>
          </div>

          {/* Recent Transactions */}
          <div>
            <h3 className="font-bold text-lg mb-3">Recent Transactions</h3>
            <div className="space-y-3">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{transaction.type}</p>
                      <p className="text-xs text-gray-500">{transaction.date}</p>
                    </div>
                    <div className="text-right">
                      <p
                        className={`font-bold ${
                          transaction.amount > 0 ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {transaction.amount > 0 ? "+" : ""}₹{Math.abs(transaction.amount)}
                      </p>
                      <span className="text-xs text-green-600">{transaction.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Recharge Tab */}
      {activeTab === "recharge" && (
        <div className="p-4">
          <h3 className="font-bold text-lg mb-4">Recharge & Top-ups</h3>
          <div className="grid grid-cols-3 gap-3 mb-6">
            {quickActions
              .filter((a) => a.action === "recharge")
              .map((service, idx) => {
                const Icon = service.icon;
                return (
                  <button
                    key={idx}
                    className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Icon className="w-7 h-7 text-yellow-600" />
                    </div>
                    <p className="text-xs text-center font-medium">{service.label}</p>
                  </button>
                );
              })}
          </div>

          {/* Recharge Form */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h4 className="font-semibold mb-3">Mobile Recharge</h4>
            <input
              type="tel"
              placeholder="Enter mobile number"
              className="w-full border border-gray-300 rounded-lg p-3 mb-3 text-sm"
            />
            <select className="w-full border border-gray-300 rounded-lg p-3 mb-3 text-sm">
              <option>Select Operator</option>
              <option>Jio</option>
              <option>Airtel</option>
              <option>Vi</option>
              <option>BSNL</option>
            </select>
            <input
              type="number"
              placeholder="Enter amount"
              className="w-full border border-gray-300 rounded-lg p-3 mb-4 text-sm"
            />
            <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 rounded-lg font-semibold">
              Continue to Pay
            </button>
          </div>
        </div>
      )}

      {/* Bills Tab */}
      {activeTab === "bills" && (
        <div className="p-4">
          <h3 className="font-bold text-lg mb-4">Pay Bills</h3>
          <div className="space-y-3">
            {quickActions
              .filter((a) => a.action === "bills")
              .map((bill, idx) => {
                const Icon = bill.icon;
                return (
                  <button
                    key={idx}
                    className="w-full bg-white rounded-xl p-4 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
                  >
                    <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-semibold text-sm">{bill.label} Bill</p>
                      <p className="text-xs text-gray-500">Quick payment available</p>
                    </div>
                    <ChevronLeft className="w-5 h-5 text-gray-400 rotate-180" />
                  </button>
                );
              })}
          </div>
        </div>
      )}

      <BottomNav active="wallet" />
    </div>
  );
}
