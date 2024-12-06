"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function SidebarItem({
  text,
  href,
  Icon,
}: {
  text: string;
  href: string;
  Icon: React.ElementType;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center w-min ${
        active ? "rounded-full text-blue-500 hover:text-white" : ""
      } hover:rounded-full hover:bg-blue-600`}
    >
      <Icon size={24} className="m-4" />
      <span
        className={`mr-5 ml-auto text-lg font-bold leading-6 ${
          active ? "text-blue-500" : "text-black dark:text-white"
        }`}
      >
        {text}
      </span>
    </Link>
  );
}

export default SidebarItem;
