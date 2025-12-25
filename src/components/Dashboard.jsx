import Container1 from "./Container1";
import Container2 from "./Container2";
import Container3 from "./Container3";
import Container4 from "./Container4";
import Container5 from "./Container5";
import Container6 from "./Container6";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-5 flex flex-col"><Container1 /></div>
      <div className="lg:col-span-3 flex flex-col"><Container2 /></div>
      <div className="lg:col-span-4 flex flex-col"><Container3 /></div>
      <div className="lg:col-span-4 flex flex-col"><Container4 /></div>
      <div className="lg:col-span-4 flex flex-col"><Container5 /></div>
      <div className="lg:col-span-4 flex flex-col"><Container6 /></div>
    </div>
  );
}