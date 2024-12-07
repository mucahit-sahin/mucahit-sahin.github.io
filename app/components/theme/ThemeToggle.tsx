"use client";

import { useTheme } from "next-themes";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="h-9 w-9 flex justify-center rounded-full md:p-0 ml-2 ">
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? (
          <IoMdSunny className="h-8 w-8 text-white" />
        ) : (
          <IoMdMoon className="h-6 w-6 rounded-full text-black" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
