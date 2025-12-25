// import { useState } from "react";
// import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";
// import Container1 from "../components/Container1";
// import Container2 from "../components/Container2";
// import Container3 from "../components/Container3";
// import Container4 from "../components/Container4";
// import Container5 from "../components/Container5";
// import Container6 from "../components/Container6";

// export default function MainLayout() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-50 flex font-sans text-slate-800">
//       {/* Mobile Sidebar Overlay */}
//       {isSidebarOpen && (
//         <div 
//           className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       {/* Sidebar - Correlated Theme */}
//       <Sidebar isOpen={isSidebarOpen} />

//       {/* Main Content Wrapper */}
//       <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
        
//         <Header onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto w-full">
//           {/* Grid System based on 'Sciqus Frontend Task.jpg'
//             Mobile: 1 column
//             Desktop: 12 columns to allow specific sizing (Wide C1, Narrow C2)
//           */}
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
//             {/* ROW 1 */}
//             {/* Container 1: Wide Hero (5/12 cols) */}
//             <div className="lg:col-span-5 flex flex-col">
//               <Container1 />
//             </div>

//             {/* Container 2: Narrow Info (3/12 cols) */}
//             <div className="lg:col-span-3 flex flex-col">
//               <Container2 />
//             </div>

//             {/* Container 3: Slider (4/12 cols) */}
//             <div className="lg:col-span-4 flex flex-col">
//               <Container3 />
//             </div>

//             {/* ROW 2 */}
//             {/* Container 4: Static Stats (4/12 cols) */}
//             <div className="lg:col-span-4 flex flex-col">
//               <Container4 />
//             </div>

//             {/* Container 5: Buttons A/B (4/12 cols) */}
//             <div className="lg:col-span-4 flex flex-col">
//               <Container5 />
//             </div>

//             {/* Container 6: Animated (4/12 cols) */}
//             <div className="lg:col-span-4 flex flex-col">
//               <Container6 />
//             </div>

//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }


// import { useState } from "react";
// import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";
// import Container1 from "../components/Container1";
// import Container2 from "../components/Container2";
// import Container3 from "../components/Container3";
// import Container4 from "../components/Container4";
// import Container5 from "../components/Container5";
// import Container6 from "../components/Container6";

// export default function MainLayout() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-50 flex font-sans text-slate-800">
//       {/* Mobile Sidebar Overlay */}
//       {isSidebarOpen && (
//         <div 
//           className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       {/* Sidebar - Fixed Position */}
//       <Sidebar isOpen={isSidebarOpen} />

//       {/* Main Content Wrapper */}
//       {/* Added lg:ml-64 to push content right on desktop because Sidebar is now fixed */}
//       <div className="flex-1 flex flex-col min-w-0 transition-all duration-300 lg:ml-64">
        
//         <Header onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto w-full">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
//             {/* ROW 1 */}
//             <div className="lg:col-span-5 flex flex-col">
//               <Container1 />
//             </div>

//             <div className="lg:col-span-3 flex flex-col">
//               <Container2 />
//             </div>

//             <div className="lg:col-span-4 flex flex-col">
//               <Container3 />
//             </div>

//             {/* ROW 2 */}
//             <div className="lg:col-span-4 flex flex-col">
//               <Container4 />
//             </div>

//             <div className="lg:col-span-4 flex flex-col">
//               <Container5 />
//             </div>

//             <div className="lg:col-span-4 flex flex-col">
//               <Container6 />
//             </div>

//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

// Import all page components
import Dashboard from "../components/Dashboard";
import LiveFeed from "../components/LiveFeed";
import Team from "../components/Team";
import Projects from "../components/Projects";
import Analytics from "../components/Analytics";
import Settings from "../components/Settings";
import Support from "../components/Support";

export default function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("dashboard"); // Default page

  // Component Mapping
  const renderContent = () => {
    switch(activePage) {
      case "dashboard": return <Dashboard />;
      case "feed": return <LiveFeed />;
      case "team": return <Team />;
      case "projects": return <Projects />;
      case "analytics": return <Analytics />;
      case "settings": return <Settings />;
      case "support": return <Support />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans text-slate-800">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar with Navigation Props */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        activePage={activePage} 
        onNavigate={(page) => {
           setActivePage(page);
           setIsSidebarOpen(false); // Close sidebar on mobile after click
        }} 
      />

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300 lg:ml-64">
        
        <Header onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />

        <main className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto w-full">
           {/* Dynamic Content Render */}
           <div className="animate-fade-in-up">
              {renderContent()}
           </div>
        </main>
      </div>
    </div>
  );
}