import { AlertCircle, CheckCircle2, Clock } from "lucide-react";

export default function Container2() {
  const updates = [
    { type: "alert", text: "Server maintenance scheduled for tonight.", time: "2h ago", icon: AlertCircle, color: "text-amber-500" },
    { type: "success", text: "Project Alpha deployment successful.", time: "5h ago", icon: CheckCircle2, color: "text-emerald-500" },
    { type: "info", text: "New team member added to Design.", time: "1d ago", icon: Clock, color: "text-blue-500" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-slate-800">System Updates</h2>
        <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md">Live</span>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto pr-1 custom-scrollbar">
        {updates.map((update, idx) => (
          <div key={idx} className="flex gap-3 items-start group">
            <update.icon size={18} className={`${update.color} mt-0.5 shrink-0`} />
            <div>
              <p className="text-sm text-slate-700 font-medium leading-snug group-hover:text-indigo-600 transition-colors cursor-pointer">
                {update.text}
              </p>
              <p className="text-[10px] text-slate-400 mt-1 font-medium uppercase tracking-wide">
                {update.time}
              </p>
            </div>
          </div>
        ))}
        
        {/* Placeholder text to fill space as per sketch */}
        <div className="pt-2 border-t border-dashed border-slate-100">
           <p className="text-xs text-slate-400 italic">
             All systems are currently operational. No critical errors found in the last 24 hours.
           </p>
        </div>
      </div>
    </div>
  );
}