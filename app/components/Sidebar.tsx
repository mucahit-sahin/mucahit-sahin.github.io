"use client";
import SidebarItem from "./SidebarItem";
import { FaUser, FaGithub } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdContactMail, MdBookmarks } from "react-icons/md";
import { BsPostcard } from "react-icons/bs";

export default function Sidebar() {
  return (
    <div className="flex-[1_1_25%] px-5 flex flex-col min-h-screen">
      <FaGithub size={30} className="mt-3 ml-5 mb-5" />
      <SidebarItem href="/" text="Profile" Icon={FaUser} />
      <SidebarItem href="/projects" text="Projects" Icon={GrProjects} />
      <SidebarItem href="/posts" text="Posts" Icon={BsPostcard} />
      <SidebarItem href="/contact" text="Contact" Icon={MdContactMail} />
      <SidebarItem href="/bookmarks" text="Bookmarks" Icon={MdBookmarks} />

      <div className="flex flex-row items-center mt-auto mb-2.5 rounded-full p-2.5 transition-colors duration-100 ease-out hover:bg-[var(--hover-blue-color)]">
        <div className="w-10 h-10">
          <img
            src="https://avatars2.githubusercontent.com/u/38807255?s=460&u=deb087d587be7f6a4000e4e710ec4d1daa6fde84&v=4"
            alt="Profile Picture"
            className="rounded-full"
            width={40}
            height={40}
          />
        </div>
        <div className="flex flex-col ml-2 mr-12">
          <div className="text-[#d9d9d9] text-sm font-bold leading-[19.6875px]">
            <span className="text-black dark:text-white">Mücahit Şahin</span>
          </div>
          <div className="text-[#6e767d] text-sm leading-[19.6875px]">
            <span>@mucahit-sahin</span>
          </div>
        </div>
      </div>
    </div>
  );
}
