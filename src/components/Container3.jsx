import { useState } from "react";
import { ChevronLeft, ChevronRight, Mail, Linkedin } from "lucide-react";

export default function Container3() {
  const profiles = [
    { name: "Sarah Connor", role: "Product Manager", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
    { name: "John Smith", role: "Lead Developer", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=John" },
    { name: "Emily Blunt", role: "UI/UX Designer", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily" },
  ];
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c === profiles.length - 1 ? 0 : c + 1));
  const prev = () => setCurrent((c) => (c === 0 ? profiles.length - 1 : c - 1));

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-0 h-full flex flex-col relative overflow-hidden">
      <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
        <h2 className="font-bold text-slate-800">Team Spotlight</h2>
        <div className="flex gap-1">
          <button onClick={prev} className="p-1 hover:bg-white hover:shadow-sm rounded border border-transparent hover:border-slate-200 transition"><ChevronLeft size={16}/></button>
          <button onClick={next} className="p-1 hover:bg-white hover:shadow-sm rounded border border-transparent hover:border-slate-200 transition"><ChevronRight size={16}/></button>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="relative mb-4">
          <div className="w-20 h-20 rounded-full bg-indigo-100 p-1">
             <img src={profiles[current].img} alt="Profile" className="w-full h-full rounded-full bg-white" />
          </div>
          <span className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></span>
        </div>
        
        <h3 className="text-lg font-bold text-slate-800">{profiles[current].name}</h3>
        <p className="text-indigo-600 text-sm font-medium mb-4">{profiles[current].role}</p>
        
        <div className="flex gap-2">
          <button className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition"><Mail size={18}/></button>
          <button className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition"><Linkedin size={18}/></button>
        </div>
      </div>
      
      {/* Slider indicators - visually matching the "arrows" concept in sketch */}
      <div className="absolute top-1/2 left-2 -translate-y-1/2 opacity-20 pointer-events-none">◀</div>
      <div className="absolute top-1/2 right-2 -translate-y-1/2 opacity-20 pointer-events-none">▶</div>
    </div>
  );
}