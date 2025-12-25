import { FileText, Download } from "lucide-react";

export default function Container5() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-0 h-full flex flex-col overflow-hidden">
      {/* Header Area */}
      <div className="p-5 border-b border-slate-100 bg-slate-50/30">
        <div className="flex justify-between items-start mb-2">
          <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
            <FileText size={20} />
          </div>
          <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">PENDING</span>
        </div>
        <h3 className="font-bold text-slate-800">Q4_Financial_Report.pdf</h3>
        <p className="text-xs text-slate-500 mt-1">Uploaded by Vinod K. • 2.4 MB</p>
      </div>

      {/* Description */}
      <div className="p-5 flex-1">
        <p className="text-sm text-slate-600 leading-relaxed">
          Please review the attached financial summary before the board meeting. Requires VP approval.
        </p>
        <button className="text-indigo-600 text-xs font-bold mt-2 flex items-center gap-1 hover:underline">
          <Download size={12} /> Preview Document
        </button>
      </div>

      {/* Button A & B (Action Bar) */}
      <div className="p-4 bg-slate-50 border-t border-slate-100 grid grid-cols-2 gap-3">
        {/* Button A */}
        <button className="flex justify-center items-center py-2.5 px-4 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 hover:text-slate-900 transition-colors">
          Reject
        </button>
        {/* Button B */}
        <button className="flex justify-center items-center py-2.5 px-4 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-colors">
          Approve
        </button>
      </div>
    </div>
  );
}