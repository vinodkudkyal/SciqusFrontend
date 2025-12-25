import { useState } from "react";
import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

export default function Container6() {
  const events = [
    {
      title: "Product Launch Strategy",
      type: "Strategy",
      color: "bg-purple-100 text-purple-700",
      time: "10:00 AM - 11:30 AM",
      location: "Conference Room A",
      attendees: ["https://api.dicebear.com/7.x/avataaars/svg?seed=Felix", "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana", "https://api.dicebear.com/7.x/avataaars/svg?seed=John"]
    },
    {
      title: "Client Design Review",
      type: "Meeting",
      color: "bg-amber-100 text-amber-700",
      time: "2:00 PM - 3:00 PM",
      location: "Google Meet",
      attendees: ["https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike"]
    },
    {
      title: "Team Weekly Sync",
      type: "Internal",
      color: "bg-blue-100 text-blue-700",
      time: "4:30 PM - 5:00 PM",
      location: "Huddle Space",
      attendees: ["https://api.dicebear.com/7.x/avataaars/svg?seed=Zoe", "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob", "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice", "https://api.dicebear.com/7.x/avataaars/svg?seed=Tom"]
    }
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c === events.length - 1 ? 0 : c + 1));
  const prev = () => setCurrent((c) => (c === 0 ? events.length - 1 : c - 1));

  const evt = events[current];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-0 h-full flex flex-col relative overflow-hidden group">
      
      {/* Header */}
      <div className="p-5 pb-2 flex justify-between items-center">
        <div className="flex items-center gap-2 text-slate-800 font-bold">
          <Calendar size={18} className="text-indigo-600" />
          <span>Upcoming Schedule</span>
        </div>
        <button className="text-slate-400 hover:text-slate-600">
          <MoreHorizontal size={18} />
        </button>
      </div>

      {/* Main Content (The Card) */}
      <div className="flex-1 p-5 flex flex-col justify-center">
        
        {/* Animated Transition Container */}
        <div className="transition-all duration-300">
          
          {/* Tag */}
          <span className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider mb-3 ${evt.color}`}>
            {evt.type}
          </span>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-slate-800 mb-4 leading-tight">
            {evt.title}
          </h3>

          {/* Details */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <Clock size={16} /> {evt.time}
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <MapPin size={16} /> {evt.location}
            </div>
          </div>

          {/* Footer: Attendees */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
            <div className="flex -space-x-2 overflow-hidden">
              {evt.attendees.map((src, i) => (
                <img 
                  key={i} 
                  src={src} 
                  alt="Member" 
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-slate-100" 
                />
              ))}
              <div className="h-8 w-8 rounded-full ring-2 ring-white bg-slate-50 flex items-center justify-center text-[10px] font-bold text-slate-500">
                +
              </div>
            </div>
            <button className="text-xs font-semibold text-indigo-600 hover:underline">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows (Absolute Positioned) */}
      <button 
        onClick={prev} 
        className="absolute top-1/2 left-2 -translate-y-1/2 p-2 bg-white shadow-md border border-slate-100 rounded-full text-slate-500 hover:text-indigo-600 hover:scale-110 transition-all z-10 opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={20} />
      </button>

      <button 
        onClick={next} 
        className="absolute top-1/2 right-2 -translate-y-1/2 p-2 bg-white shadow-md border border-slate-100 rounded-full text-slate-500 hover:text-indigo-600 hover:scale-110 transition-all z-10 opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={20} />
      </button>

      {/* Bottom Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-indigo-500 transition-all duration-300" style={{ width: `${((current + 1) / events.length) * 100}%` }}></div>
    </div>
  );
}