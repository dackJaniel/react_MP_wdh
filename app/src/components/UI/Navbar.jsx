import { MenuIcon, HomeIcon, CakeIcon } from "@heroicons/react/solid";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Navigation() {
  // Enable nav toggle
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  function toggleSidebar() {
    if (sidebarIsOpen === true) {
      setSidebarIsOpen(false);
    } else {
      setSidebarIsOpen(true);
    }
  }

  return (
    <header>
      {/* Navbar */}
      <nav className="flex items-center justify-between w-full h-24 p-10 bg-indigo-800">
        <h1 className="text-5xl text-slate-50">ReactJS Prüfung</h1>

        <button className="cursor-pointer" onClick={() => toggleSidebar()}>
          <MenuIcon className="w-10 h-10 text-slate-50" />
        </button>
      </nav>
      {sidebarIsOpen && <Sidebar onClick={toggleSidebar} />}
    </header>
  );
}
