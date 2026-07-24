import { GearIcon, MoonIcon, ListIcon } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
function Navbar() {

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "CNN", path: "/cnn" },
    { name: "Concepts", path: "/concepts" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[80%] max-w-5xl">
      <div className="px-4 md:px-6 py-3 h-16 
          flex items-center justify-between
          bg-slate-600 rounded-full z-50
          ">
        <div className="flex items-center gap-2 md:gap-6">
          <button className="md:hidden text-slate-400 hover:text-yellow-400 transition-colors">
            <ListIcon />
          </button>
          <div className="text-slate-400">N</div>
          <div className="text-slate-400">NeuraLens</div>
        </div>
        <div className="hidden md:flex items-center gap-6 ">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} end={link.path === "/"}
              className={({ isActive }) => `px-4 py-1.5 font-medium transition-all duration-300 
                ${isActive
                  ? "text-yellow-400 "
                  : "text-slate-400 hover:text-slate-200"
                }`
              }
            >{link.name}</NavLink>
          ))}

        </div>
        <div className="flex items-center gap-3">
          <button className="text-slate-400 hover:text-yellow-400 transition-colors">< GearIcon size={24} /></button>
          <button className="text-slate-400 hover:text-yellow-400 transition-colors">< MoonIcon size={24} /></button>

        </div>
      </div>
    </nav>

  );
}
export default Navbar;