import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen lg:max-w-7xl md:max-w-xl mx-auto px-2  sm:px-0 ">
      <Sidebar />
      <div className="flex-1 flex flex-row bg-white ">
        <h1 className="w-full">Main</h1>
      </div>
    </div>
  );
}
