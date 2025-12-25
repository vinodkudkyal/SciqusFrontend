// import { LayoutDashboard, Zap, FileText, Settings, Users, PieChart, LogOut, HelpCircle } from "lucide-react";

// export default function Sidebar({ isOpen }) {
//   const menuItems = [
//     { icon: LayoutDashboard, label: "Dashboard", active: true },
//     { icon: Zap, label: "Live Feed", active: false },
//     { icon: Users, label: "Team", active: false },
//     { icon: FileText, label: "Projects", active: false },
//     { icon: PieChart, label: "Analytics", active: false },
//   ];

//   return (
//     <aside
//       className={`
//         fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white shadow-xl 
//         transform transition-transform duration-300 ease-in-out
//         lg:translate-x-0 lg:static lg:h-auto lg:min-h-screen
//         ${isOpen ? "translate-x-0" : "-translate-x-full"}
//       `}
//     >
//       {/* Brand Header */}
//       <div className="h-16 flex items-center px-6 border-b border-slate-800 bg-slate-900">
//         <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-indigo-500/30">
//           <span className="font-bold text-white text-lg">S</span>
//         </div>
//         <span className="text-xl font-bold tracking-wide">SciqusUI</span>
//       </div>

//       {/* Navigation */}
//       <nav className="p-4 space-y-1 mt-2">
//         <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Main Menu</p>
//         {menuItems.map((item, index) => (
//           <a
//             key={index}
//             href="#"
//             className={`
//               flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200
//               ${item.active 
//                 ? "bg-indigo-600 text-white shadow-md shadow-indigo-900/20" 
//                 : "text-slate-400 hover:bg-slate-800 hover:text-white"}
//             `}
//           >
//             <item.icon size={18} />
//             {item.label}
//           </a>
//         ))}

//         <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 mt-6">System</p>
//         <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg transition-colors">
//           <Settings size={18} /> Settings
//         </a>
//         <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg transition-colors">
//           <HelpCircle size={18} /> Support
//         </a>
//       </nav>

//       {/* Footer User Profile */}
//       <div className="absolute bottom-0 w-full p-4 bg-slate-950 border-t border-slate-800">
//         <div className="flex items-center gap-3 mb-3">
//           <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-9 h-9 rounded-full bg-slate-800" />
//           <div className="flex-1 min-w-0">
//             <p className="text-sm font-medium text-white truncate">Vinod Kudkyal</p>
//             <p className="text-xs text-slate-500 truncate">vinod@sciqus.com</p>
//           </div>
//         </div>
//         <button className="flex items-center justify-center gap-2 w-full px-4 py-2 text-xs font-medium text-red-400 hover:bg-red-400/10 rounded-lg transition-colors border border-dashed border-slate-700">
//           <LogOut size={14} /> Sign Out
//         </button>
//       </div>
//     </aside>
//   );
// }


// import { LayoutDashboard, Zap, FileText, Settings, Users, PieChart, LogOut, HelpCircle } from "lucide-react";

// export default function Sidebar({ isOpen }) {
//   const menuItems = [
//     { icon: LayoutDashboard, label: "Dashboard", active: true },
//     { icon: Zap, label: "Live Feed", active: false },
//     { icon: Users, label: "Team", active: false },
//     { icon: FileText, label: "Projects", active: false },
//     { icon: PieChart, label: "Analytics", active: false },
//   ];

//   return (
//     <aside
//       className={`
//         fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white shadow-xl 
//         transform transition-transform duration-300 ease-in-out
//         lg:translate-x-0 
//         ${isOpen ? "translate-x-0" : "-translate-x-full"}
//       `}
//     >
//       {/* Brand Header */}
//       <div className="h-16 flex items-center px-6 border-b border-slate-800 bg-slate-900">
//         <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-indigo-500/30">
//           <span className="font-bold text-white text-lg">S</span>
//         </div>
//         <span className="text-xl font-bold tracking-wide">SciqusUI</span>
//       </div>

//       {/* Navigation */}
//       <nav className="p-4 space-y-1 mt-2 overflow-y-auto max-h-[calc(100vh-160px)] custom-scrollbar">
//         <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Main Menu</p>
//         {menuItems.map((item, index) => (
//           <a
//             key={index}
//             href="#"
//             className={`
//               flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200
//               ${item.active 
//                 ? "bg-indigo-600 text-white shadow-md shadow-indigo-900/20" 
//                 : "text-slate-400 hover:bg-slate-800 hover:text-white"}
//             `}
//           >
//             <item.icon size={18} />
//             {item.label}
//           </a>
//         ))}

//         <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 mt-6">System</p>
//         <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg transition-colors">
//           <Settings size={18} /> Settings
//         </a>
//         <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg transition-colors">
//           <HelpCircle size={18} /> Support
//         </a>
//       </nav>

//       {/* Footer User Profile */}
//       <div className="absolute bottom-0 w-full p-4 bg-slate-950 border-t border-slate-800">
//         <div className="flex items-center gap-3 mb-3">
//           <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-9 h-9 rounded-full bg-slate-800" />
//           <div className="flex-1 min-w-0">
//             <p className="text-sm font-medium text-white truncate">Vinod Kudkyal</p>
//             <p className="text-xs text-slate-500 truncate">vinod@sciqus.com</p>
//           </div>
//         </div>
//         <button className="flex items-center justify-center gap-2 w-full px-4 py-2 text-xs font-medium text-red-400 hover:bg-red-400/10 rounded-lg transition-colors border border-dashed border-slate-700">
//           <LogOut size={14} /> Sign Out
//         </button>
//       </div>
//     </aside>
//   );
// }

import { LayoutDashboard, Zap, FileText, Settings, Users, PieChart, LogOut, HelpCircle } from "lucide-react";

export default function Sidebar({ isOpen, activePage, onNavigate }) {
  const menuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { id: "feed", icon: Zap, label: "Live Feed" },
    { id: "team", icon: Users, label: "Team" },
    { id: "projects", icon: FileText, label: "Projects" },
    { id: "analytics", icon: PieChart, label: "Analytics" },
  ];

  const systemItems = [
    { id: "settings", icon: Settings, label: "Settings" },
    { id: "support", icon: HelpCircle, label: "Support" },
  ];

  const NavItem = ({ item }) => (
    <button
      onClick={() => onNavigate(item.id)}
      className={`
        w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 mb-1
        ${activePage === item.id 
          ? "bg-indigo-600 text-white shadow-md shadow-indigo-900/20" 
          : "text-slate-400 hover:bg-slate-800 hover:text-white"}
      `}
    >
      <item.icon size={18} />
      {item.label}
    </button>
  );

  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white shadow-xl 
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <div className="h-16 flex items-center px-6 border-b border-slate-800 bg-slate-900">
        <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-indigo-500/30">
          <span className="font-bold text-white text-lg">S</span>
        </div>
        <span className="text-xl font-bold tracking-wide">SciqusUI</span>
      </div>

      <nav className="p-4 overflow-y-auto max-h-[calc(100vh-160px)] custom-scrollbar">
        <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 mt-2">Main Menu</p>
        {menuItems.map((item) => <NavItem key={item.id} item={item} />)}

        <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 mt-6">System</p>
        {systemItems.map((item) => <NavItem key={item.id} item={item} />)}
      </nav>

      <div className="absolute bottom-0 w-full p-4 bg-slate-950 border-t border-slate-800">
        <div className="flex items-center gap-3 mb-3">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-9 h-9 rounded-full bg-slate-800" />
          <div className="flex-1 min-w-0 text-left">
            <p className="text-sm font-medium text-white truncate">Vinod Kudkyal</p>
            <p className="text-xs text-slate-500 truncate">vinod@sciqus.com</p>
          </div>
        </div>
        <button className="flex items-center justify-center gap-2 w-full px-4 py-2 text-xs font-medium text-red-400 hover:bg-red-400/10 rounded-lg transition-colors border border-dashed border-slate-700">
          <LogOut size={14} /> Sign Out
        </button>
      </div>
    </aside>
  );
}