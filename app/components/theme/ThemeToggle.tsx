"use client";

import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

// İkonu dinamik olarak içe aktarın ve SSR'ı devre dışı bırakın
const IoMdSunny = dynamic(
  () => import("react-icons/io").then((mod) => mod.IoMdSunny),
  { ssr: false }
);
const IoMdMoon = dynamic(
  () => import("react-icons/io").then((mod) => mod.IoMdMoon),
  { ssr: false }
);

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
