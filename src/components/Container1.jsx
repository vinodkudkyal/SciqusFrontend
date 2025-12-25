import { ArrowRight, Sparkles } from "lucide-react";

export default function Container1() {
  return (
    <div className="h-full min-h-[280px] rounded-2xl overflow-hidden relative group shadow-lg">
      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80" 
        alt="Dashboard Hero" 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-semibold w-fit mb-3 backdrop-blur-sm">
          <Sparkles size={12} /> New Feature
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
          Welcome to the <br/>Sciqus Dashboard Pro
        </h1>
        <p className="text-slate-300 text-sm md:text-base max-w-md mb-6 leading-relaxed">
          Track your analytics, manage team workflows, and generate reports with our newly updated interface.
        </p>
        <div className="flex gap-3">
          <button className="bg-white text-slate-900 hover:bg-slate-100 px-5 py-2.5 rounded-lg text-sm font-bold transition-colors flex items-center gap-2 shadow-lg">
            Get Started <ArrowRight size={16} />
          </button>
          <button className="bg-slate-800/50 hover:bg-slate-800/70 text-white backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
            View Documentation
          </button>
        </div>
      </div>
    </div>
  );
}