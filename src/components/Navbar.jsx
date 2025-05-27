import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Главная", icon: "ri-home-5-line", activeIcon: "ri-home-5-fill" },
  { to: "/catalog", label: "Каталог", icon: "ri-book-open-line", activeIcon: "ri-book-open-fill" },
  { to: "/meetings", label: "События", icon: "ri-calendar-line", activeIcon: "ri-calendar-fill" },
  { to: "/filials", label: "Филиалы", icon: "ri-map-pin-line", activeIcon: "ri-map-pin-fill" },
  { to: "/profile", label: "Профиль", icon: "ri-user-line", activeIcon: "ri-user-fill" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 w-full bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-50">
      <div className="max-w-[375px] mx-auto grid grid-cols-5 py-2">
        {navItems.map(({ to, label, icon, activeIcon }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className={`${isActive ? activeIcon : icon} ri-lg ${isActive ? "text-primary" : "text-gray-400"}`} />
              </div>
              <span
                className={`text-[10px] mt-1 ${isActive ? "text-primary font-medium" : "text-gray-500"}`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
