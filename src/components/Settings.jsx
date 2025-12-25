import { useState } from "react";
import { User, Lock, Bell, CreditCard, Shield, Download, Check } from "lucide-react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", icon: User, label: "My Profile" },
    { id: "security", icon: Shield, label: "Security" },
    { id: "notifications", icon: Bell, label: "Notifications" },
    { id: "billing", icon: CreditCard, label: "Billing & Plans" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden min-h-[600px] flex flex-col md:flex-row">
      {/* Sidebar Tabs */}
      <div className="w-full md:w-64 bg-slate-50 border-r border-slate-200 p-4">
        <h2 className="text-lg font-bold text-slate-800 mb-6 px-4">Settings</h2>
        <nav className="space-y-1">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                activeTab === t.id ? "bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200" : "text-slate-500 hover:text-slate-800 hover:bg-white/50"
              }`}
            >
              <t.icon size={18} /> {t.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto max-h-[80vh]">
        
        {/* PROFILE TAB */}
        {activeTab === "profile" && (
          <div className="max-w-xl animate-fade-in-up">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Profile Information</h3>
            <div className="flex items-center gap-6 mb-8">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="w-20 h-20 rounded-full bg-slate-100 border-4 border-white shadow-sm" />
              <div>
                <button className="bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50">Change Avatar</button>
                <p className="text-xs text-slate-400 mt-2">JPG, GIF or PNG. Max size 800K</p>
              </div>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">First Name</label>
                  <input type="text" defaultValue="Vinod" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Last Name</label>
                  <input type="text" defaultValue="Kudkyal" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
                </div>
              </div>
              <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email Address</label>
                  <input type="email" defaultValue="vinod@sciqus.com" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
              </div>
              <div className="pt-4">
                <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-indigo-700 transition">Save Changes</button>
              </div>
            </form>
          </div>
        )}

        {/* SECURITY TAB */}
        {activeTab === "security" && (
          <div className="max-w-xl animate-fade-in-up">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Security Settings</h3>
            <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl mb-6 flex gap-3">
              <Lock className="text-amber-600 shrink-0" />
              <div>
                <p className="text-sm font-bold text-amber-800">Two-factor authentication is not enabled.</p>
                <p className="text-xs text-amber-700 mt-1">Two-factor authentication adds an additional layer of security to your account.</p>
                <button className="text-xs font-bold text-amber-800 underline mt-2">Enable 2FA</button>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Current Password</label>
                  <input type="password" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg outline-none" />
              </div>
              <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">New Password</label>
                  <input type="password" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg outline-none" />
              </div>
              <div className="pt-4">
                <button className="bg-slate-800 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-slate-900 transition">Update Password</button>
              </div>
            </form>
          </div>
        )}

        {/* NOTIFICATIONS TAB - NEWLY ADDED */}
        {activeTab === "notifications" && (
          <div className="max-w-2xl animate-fade-in-up">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Notification Preferences</h3>
            
            <div className="space-y-6">
              <div className="pb-6 border-b border-slate-100">
                <h4 className="font-bold text-slate-700 mb-4">Email Notifications</h4>
                <div className="space-y-4">
                  {[
                    "New project invites",
                    "Weekly analytics report",
                    "Task mentions and assignments",
                    "System updates and maintenance"
                  ].map((item, i) => (
                    <label key={i} className="flex items-center justify-between cursor-pointer group">
                      <span className="text-sm text-slate-600 group-hover:text-indigo-600 transition">{item}</span>
                      <div className="relative inline-block w-10 h-6 align-middle select-none transition duration-200 ease-in">
                        <input type="checkbox" defaultChecked={i < 2} className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer peer checked:right-0 checked:border-indigo-600"/>
                        <div className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-200 cursor-pointer peer-checked:bg-indigo-600"></div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-700 mb-4">Push Notifications</h4>
                <div className="space-y-4">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm text-slate-600">Mobile app alerts</span>
                    <input type="checkbox" className="accent-indigo-600 w-4 h-4" defaultChecked />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm text-slate-600">Browser desktop notifications</span>
                    <input type="checkbox" className="accent-indigo-600 w-4 h-4" />
                  </label>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-indigo-700 transition">Save Preferences</button>
              </div>
            </div>
          </div>
        )}

        {/* BILLING TAB - NEWLY ADDED */}
        {activeTab === "billing" && (
          <div className="max-w-2xl animate-fade-in-up">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Billing & Plan</h3>

            {/* Current Plan Card */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white mb-8 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-indigo-100 text-sm font-medium">Current Plan</p>
                  <h2 className="text-3xl font-bold">Pro Team</h2>
                </div>
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">Active</span>
              </div>
              <p className="text-indigo-100 text-sm mb-6 max-w-sm">You have full access to all features including unlimited projects and team members.</p>
              <div className="flex gap-3">
                <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-indigo-50 transition">Manage Subscription</button>
                <button className="bg-transparent border border-white/30 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-white/10 transition">Upgrade to Enterprise</button>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-8">
              <h4 className="font-bold text-slate-800 mb-4">Payment Method</h4>
              <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl bg-slate-50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-8 bg-white border border-slate-200 rounded flex items-center justify-center">
                    <span className="text-xs font-bold italic text-slate-700">VISA</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">•••• •••• •••• 4242</p>
                    <p className="text-xs text-slate-500">Expires 12/28</p>
                  </div>
                </div>
                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800">Edit</button>
              </div>
            </div>

            {/* Invoices */}
            <div>
              <h4 className="font-bold text-slate-800 mb-4">Billing History</h4>
              <div className="border border-slate-200 rounded-xl overflow-hidden">
                {[
                  { date: "Dec 01, 2025", amount: "$29.00", status: "Paid" },
                  { date: "Nov 01, 2025", amount: "$29.00", status: "Paid" },
                  { date: "Oct 01, 2025", amount: "$29.00", status: "Paid" },
                ].map((inv, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition">
                    <div>
                      <p className="text-sm font-bold text-slate-800">Invoice #{2025001 + i}</p>
                      <p className="text-xs text-slate-500">{inv.date}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-slate-600">{inv.amount}</span>
                      <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                        <Check size={12} /> {inv.status}
                      </span>
                      <button className="text-slate-400 hover:text-indigo-600"><Download size={16} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}