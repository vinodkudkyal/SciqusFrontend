import { useState } from "react";
import { Search, ChevronDown, ChevronUp, Mail, MessageCircle, FileText } from "lucide-react";

export default function Support() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    { q: "How do I add a new team member?", a: "Go to the Team tab in the sidebar, click on 'Add Member' in the top right corner, and enter their email address. They will receive an invitation link." },
    { q: "Can I export my analytics data?", a: "Yes! Navigate to the Analytics page and scroll to the bottom. Click the 'Export Report' button to download a CSV or PDF version." },
    { q: "How do I change my billing cycle?", a: "Go to Settings > Billing. You can switch between Monthly and Annual plans. Changes will apply at the start of the next billing period." },
    { q: "Where can I find my API keys?", a: "API keys are located in Settings > Security. Please treat these keys as passwords and do not share them publicly." },
  ];

  return (
    <div className="max-w-4xl mx-auto">
       <div className="text-center mb-10">
         <h2 className="text-3xl font-bold text-slate-800 mb-2">How can we help you?</h2>
         <p className="text-slate-500">Search our knowledge base or contact support directly.</p>
         
         <div className="relative max-w-lg mx-auto mt-6">
           <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
           <input type="text" placeholder="Search for articles, guides, and more..." className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm transition-all" />
         </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: FileText, title: "Documentation", desc: "Detailed guides and API references.", color: "text-blue-600", bg: "bg-blue-50" },
            { icon: MessageCircle, title: "Live Chat", desc: "Talk to our support team in real-time.", color: "text-emerald-600", bg: "bg-emerald-50" },
            { icon: Mail, title: "Email Support", desc: "Get a response within 24 hours.", color: "text-indigo-600", bg: "bg-indigo-50" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-500 hover:shadow-md cursor-pointer transition group text-center">
              <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 ${item.bg} ${item.color}`}>
                <item.icon size={24} />
              </div>
              <h3 className="font-bold text-slate-800 group-hover:text-indigo-600 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
       </div>

       <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
         <h3 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h3>
         <div className="space-y-4">
           {faqs.map((faq, i) => (
             <div key={i} className="border border-slate-100 rounded-xl overflow-hidden">
               <button 
                 onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                 className="w-full flex justify-between items-center p-4 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
               >
                 <span className="font-bold text-slate-700">{faq.q}</span>
                 {openFaq === i ? <ChevronUp size={18} className="text-slate-400"/> : <ChevronDown size={18} className="text-slate-400"/>}
               </button>
               {openFaq === i && (
                 <div className="p-4 bg-white text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                   {faq.a}
                 </div>
               )}
             </div>
           ))}
         </div>
       </div>
    </div>
  );
}