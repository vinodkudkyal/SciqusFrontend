import { useState } from "react";
import { Search, MoreVertical, Mail, MessageSquare } from "lucide-react";

export default function Team() {
  const [search, setSearch] = useState("");

  const members = [
    { name: "Vinod Kudkyal", role: "Frontend Lead", email: "vinod@sciqus.com", dept: "Engineering", status: "Active", seed: "Felix" },
    { name: "Sarah Miller", role: "Product Manager", email: "sarah@sciqus.com", dept: "Product", status: "Meeting", seed: "Sarah" },
    { name: "James Bond", role: "Security Engineer", email: "james@sciqus.com", dept: "Engineering", status: "Offline", seed: "Jack" },
    { name: "Emily Rose", role: "UX Designer", email: "emily@sciqus.com", dept: "Design", status: "Active", seed: "Emily" },
    { name: "Mike Ross", role: "Legal Consultant", email: "mike@sciqus.com", dept: "Legal", status: "Active", seed: "Mike" },
  ];

  const filtered = members.filter(m => m.name.toLowerCase().includes(search.toLowerCase()));

  const getStatusColor = (s) => {
    switch(s) {
      case "Active": return "bg-emerald-100 text-emerald-700";
      case "Meeting": return "bg-amber-100 text-amber-700";
      case "Offline": return "bg-slate-100 text-slate-600";
      default: return "bg-slate-100 text-slate-600";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      {/* List Header / Toolbar */}
      <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50/50">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Team Directory</h2>
          <p className="text-sm text-slate-500">5 active members</p>
        </div>
        <div className="relative w-full sm:w-72">
           <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
           <input 
             type="text" 
             placeholder="Search members..." 
             className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
             onChange={(e) => setSearch(e.target.value)}
           />
        </div>
      </div>

      {/* Table / List View */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <th className="p-6">Member</th>
              <th className="p-6">Role</th>
              <th className="p-6">Status</th>
              <th className="p-6">Contact</th>
              <th className="p-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {filtered.map((m, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                <td className="p-6">
                  <div className="flex items-center gap-4">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${m.seed}`} className="w-10 h-10 rounded-full bg-slate-100" />
                    <div>
                      <p className="font-bold text-slate-800">{m.name}</p>
                      <p className="text-xs text-slate-500">{m.dept}</p>
                    </div>
                  </div>
                </td>
                <td className="p-6 text-sm font-medium text-slate-600">
                  {m.role}
                </td>
                <td className="p-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(m.status)}`}>
                    {m.status}
                  </span>
                </td>
                <td className="p-6">
                  <div className="flex gap-2">
                    <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition" title="Email">
                      <Mail size={16} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition" title="Chat">
                      <MessageSquare size={16} />
                    </button>
                  </div>
                </td>
                <td className="p-6 text-right">
                  <button className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200 transition">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* List Footer */}
      <div className="p-4 border-t border-slate-100 bg-slate-50 text-center">
        <button className="text-sm font-bold text-indigo-600 hover:underline">View All Employees</button>
      </div>
    </div>
  );
}