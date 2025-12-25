import { useState } from "react";
import { MessageSquare, GitCommit, AlertTriangle, CheckCircle, Filter, RefreshCw } from "lucide-react";

export default function LiveFeed() {
  const [filter, setFilter] = useState("All");

  const events = [
    { id: 1, type: "Dev", user: "Sarah Connor", action: "pushed 3 commits to", target: "main-branch", time: "10 mins ago", icon: GitCommit, color: "text-blue-500", bg: "bg-blue-50" },
    { id: 2, type: "System", user: "System Monitor", action: "alerted", target: "High CPU Usage (92%)", time: "25 mins ago", icon: AlertTriangle, color: "text-amber-500", bg: "bg-amber-50" },
    { id: 3, type: "Team", user: "John Smith", action: "commented on", target: "Ticket #402: UI Bug", time: "1 hour ago", icon: MessageSquare, color: "text-indigo-500", bg: "bg-indigo-50" },
    { id: 4, type: "Dev", user: "Deploy Bot", action: "successfully deployed", target: "Production v2.0.1", time: "2 hours ago", icon: CheckCircle, color: "text-emerald-500", bg: "bg-emerald-50" },
    { id: 5, type: "Team", user: "Emily Rose", action: "uploaded 4 files to", target: "Design Assets", time: "3 hours ago", icon: MessageSquare, color: "text-purple-500", bg: "bg-purple-50" },
    { id: 6, type: "System", user: "Security", action: "blocked login attempt", target: "IP: 192.168.x.x", time: "5 hours ago", icon: AlertTriangle, color: "text-red-500", bg: "bg-red-50" },
  ];

  const filteredEvents = filter === "All" ? events : events.filter(e => e.type === filter);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Header & Controls */}
      <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <RefreshCw size={18} className="text-indigo-600" /> Activity Stream
        </h2>
        <div className="flex gap-2">
          {["All", "Dev", "System", "Team"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                filter === f ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Feed Content */}
      <div className="p-6 space-y-8 relative before:absolute before:inset-y-0 before:left-10 before:w-0.5 before:bg-slate-100 before:z-0">
        {filteredEvents.map((e) => (
          <div key={e.id} className="relative flex gap-4 group">
            <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center ${e.bg} ${e.color} border-4 border-white shadow-sm shrink-0 transition-transform group-hover:scale-110`}>
              <e.icon size={18} />
            </div>
            <div className="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-100 group-hover:bg-white group-hover:shadow-md transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-1">
                <p className="text-sm font-bold text-slate-800">{e.user}</p>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">{e.time}</span>
              </div>
              <p className="text-sm text-slate-600">
                {e.action} <span className="font-semibold text-indigo-600 hover:underline">{e.target}</span>
              </p>
            </div>
          </div>
        ))}
        
        {filteredEvents.length === 0 && (
          <div className="text-center py-10 text-slate-400 italic">No activity found for this filter.</div>
        )}
      </div>

      <div className="p-4 border-t border-slate-100 bg-slate-50 text-center">
        <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 hover:underline">View Older Activities</button>
      </div>
    </div>
  );
}