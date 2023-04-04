import { LogoutIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  const { onClick } = props;
  return (
    <aside className="fixed top-0 right-0 w-48 h-screen divide-y divide-gray-400 bg-slate-50 divide-solid outline outline-1 outline-gray-400">
      <div className="h-24">
        <button onClick={onClick}>
          <LogoutIcon className="w-16 h-16 pt-8" />
        </button>
      </div>
      <ul className="grid grid-col-2 justify-items-start">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </ul>
    </aside>
  );
}
