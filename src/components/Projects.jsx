import { useState } from "react";
import { MoreHorizontal, Calendar, ArrowRight, X, Clock, CheckCircle2, AlertCircle } from "lucide-react";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { 
      id: 1,
      name: "Website Redesign", 
      status: "In Progress", 
      priority: "High", 
      progress: 60, 
      due: "Dec 30", 
      team: ["Felix", "Sarah", "Emily"], 
      color: "bg-indigo-600", 
      badge: "bg-indigo-50 text-indigo-700",
      description: "Complete overhaul of the corporate website including new branding guidelines and mobile responsiveness.",
      tasks: [
        { title: "Homepage Mockup", completed: true },
        { title: "Mobile Responsive Fixes", completed: false },
        { title: "SEO Optimization", completed: false }
      ]
    },
    { 
      id: 2,
      name: "Mobile App API", 
      status: "Completed", 
      priority: "Medium", 
      progress: 100, 
      due: "Dec 15", 
      team: ["Mike", "Jack"], 
      color: "bg-emerald-500", 
      badge: "bg-emerald-50 text-emerald-700",
      description: "Backend API development for the new iOS and Android applications.",
      tasks: [
        { title: "Auth Endpoints", completed: true },
        { title: "Database Migration", completed: true },
        { title: "API Documentation", completed: true }
      ]
    },
    { 
      id: 3,
      name: "Dashboard Migration", 
      status: "Review", 
      priority: "Critical", 
      progress: 85, 
      due: "Jan 05", 
      team: ["Vinod", "Zoe", "Tom"], 
      color: "bg-amber-500", 
      badge: "bg-amber-50 text-amber-700",
      description: "Migrating legacy dashboard components to the new React-based architecture.",
      tasks: [
        { title: "Sidebar Component", completed: true },
        { title: "Chart Integration", completed: true },
        { title: "User Acceptance Testing", completed: false }
      ]
    }
  ];

  return (
    <div className="relative">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Active Projects</h2>
            <p className="text-sm text-slate-500">Tracking {projects.length} active initiatives</p>
          </div>
          <button 
            onClick={() => setShowModal(true)}
            className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
          >
            + New Project
          </button>
        </div>

        <div className="divide-y divide-slate-100">
          {projects.map((p, i) => (
            <div key={i} className="p-6 hover:bg-slate-50 transition-colors group">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div className="flex gap-4 items-center">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white text-lg ${p.color.replace('bg-', 'bg-opacity-90 bg-')}`}>
                    {p.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                      {p.name}
                      {p.priority === "Critical" && <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-slate-500 mt-1">
                      <span className="flex items-center gap-1"><Calendar size={12} /> Due {p.due}</span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                      <span className={`${p.priority === 'High' || p.priority === 'Critical' ? 'text-red-500 font-semibold' : 'text-slate-500'}`}>{p.priority} Priority</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${p.badge}`}>{p.status}</span>
                  <button className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200 transition">
                    <MoreHorizontal size={20} />
                  </button>
                </div>
              </div>

              {/* Progress Bar & Team */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-600 mb-2">
                    <span>Progress</span>
                    <span>{p.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className={`h-2 rounded-full transition-all duration-1000 ${p.color}`} style={{ width: `${p.progress}%` }}></div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    {p.team.map((seed, idx) => (
                      <img key={idx} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100" title={seed} />
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500 hover:bg-slate-200 cursor-pointer">+</div>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(p)}
                    className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    View Details <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- NEW PROJECT MODAL --- */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl animate-fade-in-up">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xl font-bold text-slate-800">Create New Project</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600"><X size={24} /></button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Project Name</label>
                <input type="text" placeholder="e.g., Marketing Campaign Q4" className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Due Date</label>
                  <input type="date" className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Priority</label>
                  <select className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Critical</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Description</label>
                <textarea rows="3" placeholder="Brief details about the project..." className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
              </div>
            </div>
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-3 rounded-b-2xl">
              <button onClick={() => setShowModal(false)} className="px-5 py-2.5 text-slate-600 font-bold hover:bg-slate-200 rounded-lg transition">Cancel</button>
              <button onClick={() => setShowModal(false)} className="px-5 py-2.5 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">Create Project</button>
            </div>
          </div>
        </div>
      )}

      {/* --- VIEW DETAILS SLIDE-OVER --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/20 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white h-full shadow-2xl p-0 animate-slide-in-right overflow-y-auto">
            <div className="h-32 bg-indigo-600 p-6 flex items-start justify-between text-white">
              <div className="mt-8">
                <span className="bg-white/20 px-2 py-1 rounded text-xs font-bold backdrop-blur-sm mb-2 inline-block">{selectedProject.status}</span>
                <h2 className="text-2xl font-bold">{selectedProject.name}</h2>
              </div>
              <button onClick={() => setSelectedProject(null)} className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition"><X size={20} /></button>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase mb-2">Description</h4>
                <p className="text-slate-700 leading-relaxed text-sm">{selectedProject.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-2 text-slate-500 mb-1 text-xs font-bold uppercase"><Clock size={14} /> Deadline</div>
                  <p className="text-slate-800 font-bold">{selectedProject.due}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-2 text-slate-500 mb-1 text-xs font-bold uppercase"><AlertCircle size={14} /> Priority</div>
                  <p className={`font-bold ${selectedProject.priority === 'Critical' ? 'text-red-600' : 'text-slate-800'}`}>{selectedProject.priority}</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase mb-4">Project Tasks</h4>
                <div className="space-y-3">
                  {selectedProject.tasks.map((task, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 border border-slate-100 rounded-lg hover:border-indigo-200 transition">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${task.completed ? 'bg-emerald-100 border-emerald-500 text-emerald-600' : 'border-slate-300'}`}>
                        {task.completed && <CheckCircle2 size={12} />}
                      </div>
                      <span className={`text-sm ${task.completed ? 'text-slate-400 line-through' : 'text-slate-700 font-medium'}`}>{task.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button onClick={() => setSelectedProject(null)} className="w-full py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition">Close Details</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}