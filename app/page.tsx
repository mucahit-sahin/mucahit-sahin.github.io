import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <div className="flex flex-row h-screen lg:max-w-7xl md:max-w-xl mx-auto px-2  sm:px-0 ">
        <Sidebar />
        <Profile />
        <div className="flex-[1_1_25%] flex flex-row dark:bg-gray-700 ">
          <h1 className="w-full">Den</h1>
        </div>
      </div>
    </div>
  );
}
