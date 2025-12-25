import { Menu, Bell, Search, Calendar } from "lucide-react";

export default function Header({ onMenuToggle }) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30 shadow-sm">
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={onMenuToggle} 
          className="lg:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <Menu size={24} />
        </button>
        
        {/* Search Bar */}
        <div className="hidden md:flex items-center max-w-md w-full relative">
          <Search size={18} className="absolute left-3 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search projects, tasks, or team members..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-5">
        <div className="hidden sm:flex flex-col items-end mr-2">
          <p className="text-xs font-bold text-slate-700">Dec 25, 2025</p>
          <div className="flex items-center gap-1 text-[10px] text-slate-500 uppercase tracking-wide">
            <Calendar size={10} /> Solapur, IN
          </div>
        </div>

        <button className="relative p-2 text-slate-500 hover:bg-indigo-50 hover:text-indigo-600 rounded-full transition-all">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="h-8 w-px bg-slate-200 mx-1"></div>
        
        <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md ring-2 ring-white cursor-pointer hover:ring-indigo-100 transition-all">
          VK
        </div>
      </div>
    </header>
  );
}