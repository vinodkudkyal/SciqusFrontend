import { TrendingUp, Users, DollarSign, Activity, ArrowUpRight, ArrowDownRight, Zap } from "lucide-react";

export default function Analytics() {
  const chartData = [40, 65, 50, 85, 60, 95, 75, 100, 65, 85, 70, 90];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Performance Overview</h2>
          <p className="text-slate-500 mt-1">Real-time data across all channels</p>
        </div>
        <div className="flex gap-2 bg-white p-1 rounded-lg border border-slate-200">
           <button className="px-4 py-1.5 bg-slate-900 text-white text-sm font-bold rounded-md shadow-lg">12 Months</button>
           <button className="px-4 py-1.5 text-slate-500 text-sm font-bold hover:bg-slate-50 rounded-md">30 Days</button>
           <button className="px-4 py-1.5 text-slate-500 text-sm font-bold hover:bg-slate-50 rounded-md">7 Days</button>
        </div>
      </div>

      {/* Hero Stats - Dark Theme */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Revenue", val: "$84,230", sub: "+$12.5k today", icon: DollarSign, trend: "up" },
          { label: "Active Sessions", val: "12,450", sub: "854 live now", icon: Zap, trend: "up" },
          { label: "Bounce Rate", val: "24.8%", sub: "-2.1% vs last wk", icon: Activity, trend: "down" },
          { label: "New Signups", val: "1,204", sub: "+15% vs last mo", icon: Users, trend: "up" }
        ].map((stat, i) => (
          <div key={i} className="bg-slate-900 rounded-2xl p-6 text-white relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 p-8 bg-white/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110">
               <stat.icon size={32} className="text-white/20" />
             </div>
             
             <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">{stat.label}</p>
             <h3 className="text-3xl font-bold mb-1">{stat.val}</h3>
             
             <div className="flex items-center gap-2 mt-4">
               <span className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${stat.trend === 'up' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                 {stat.trend === 'up' ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                 {stat.sub.split(' ')[0]}
               </span>
               <span className="text-xs text-slate-500">{stat.sub.split(' ').slice(1).join(' ')}</span>
             </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
           <div className="flex justify-between items-center mb-8">
             <h3 className="font-bold text-slate-800 text-lg">Revenue Growth</h3>
             <button className="text-indigo-600 text-sm font-bold hover:underline">Download Report</button>
           </div>
           
           {/* Visualized Area Chart (CSS) */}
           <div className="h-72 flex items-end justify-between gap-1 sm:gap-3 px-2">
              {chartData.map((h, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end group h-full relative">
                  <div 
                    className="w-full bg-gradient-to-t from-indigo-600 to-purple-500 rounded-t-md opacity-80 group-hover:opacity-100 transition-all duration-300 relative"
                    style={{ height: `${h}%` }}
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      ${h}k
                    </div>
                  </div>
                  {/* Reflection Effect */}
                  <div 
                    className="w-full bg-gradient-to-b from-indigo-200/50 to-transparent h-4 rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity absolute top-full"
                    style={{ height: '20px' }}
                  ></div>
                </div>
              ))}
           </div>
           <div className="flex justify-between mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <span>Jan</span><span>Jun</span><span>Dec</span>
           </div>
        </div>

        {/* Side Panel: Demographics */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col">
          <h3 className="font-bold text-slate-800 text-lg mb-6">User Demographics</h3>
          
          <div className="flex-1 space-y-6">
            {[
              { label: "USA", val: 45, color: "bg-blue-600" },
              { label: "India", val: 32, color: "bg-orange-500" },
              { label: "Germany", val: 15, color: "bg-yellow-500" },
              { label: "Others", val: 8, color: "bg-slate-300" }
            ].map((c, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
                  <span>{c.label}</span>
                  <span className="text-slate-900">{c.val}%</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${c.color} group-hover:brightness-110 transition-all duration-500`} 
                    style={{ width: `${c.val}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100">
             <p className="text-xs text-slate-500 mb-4"><strong>Note:</strong> Most active traffic source is mobile devices (68%).</p>
             <button className="w-full py-3 rounded-xl border-2 border-slate-100 text-slate-700 font-bold hover:border-slate-300 hover:bg-slate-50 transition">
               View Full Demographics
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}