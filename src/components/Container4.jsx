import { TrendingUp, Users, DollarSign, Activity } from "lucide-react";

export default function Container4() {
  const stats = [
    { label: "Revenue", value: "$12,450", change: "+12%", icon: DollarSign, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Visitors", value: "8,245", change: "+5.4%", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Bounce", value: "42.5%", change: "-2.1%", icon: Activity, color: "text-rose-600", bg: "bg-rose-50" },
    { label: "Growth", value: "High", change: "Stable", icon: TrendingUp, color: "text-indigo-600", bg: "bg-indigo-50" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 h-full">
      <h2 className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wider text-opacity-70">Analytics Overview</h2>
      
      <div className="grid grid-cols-2 gap-4 h-[calc(100%-2rem)]">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col justify-center p-3 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all duration-300">
            <div className={`w-8 h-8 ${stat.bg} ${stat.color} rounded-lg flex items-center justify-center mb-2`}>
              <stat.icon size={16} />
            </div>
            <span className="text-xl font-bold text-slate-800 leading-none">{stat.value}</span>
            <div className="flex justify-between items-center mt-1">
              <span className="text-[10px] text-slate-500 font-medium uppercase">{stat.label}</span>
              <span className={`text-[10px] font-bold ${stat.change.includes('+') ? 'text-emerald-600' : stat.change.includes('-') ? 'text-emerald-600' : 'text-slate-400'}`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}