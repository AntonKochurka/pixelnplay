import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  IoChevronDownCircleOutline,
  IoLogInOutline,
  IoPersonAddOutline,
  IoPersonOutline,
  IoLogOutOutline,
  IoHelpCircleOutline,
} from "react-icons/io5";

import { Link } from "react-router-dom";
import isAuthenticated from "@src/utils/cheks";

export default function ProfileMenu() {
  const isAuth = isAuthenticated();

  const menuItems = [
    {
      label: "Profile",
      icon: IoPersonOutline,
      to: "/profile",
      needAuth: true,
    },
    {
        label: "Log In",
        icon: IoLogInOutline,
        to: "/auth/login",
        needAuth: false,
    },
    {
        label: "Register",
        icon: IoPersonAddOutline,
        to: "/auth/register",
        needAuth: false,
    },
    {
        label: "Help",
        icon: IoHelpCircleOutline,
        to: "/help",
        needAuth: null,
    },
    {
      label: "Logout",
      icon: IoLogOutOutline,
      action: () => console.log("Logout"),
      needAuth: true,
      color: "text-red-400"
    },
  ];

  return (
    <Menu as="div" className="relative">
      <MenuButton className="inline-flex items-center gap-2 rounded-md bg-zinc-800 px-3 p-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-zinc-600/10 hover:bg-zinc-700 data-open:bg-zinc-700">
        Auth
        <IoChevronDownCircleOutline className="size-4 fill-white/60" />
      </MenuButton>

      <MenuItems
        anchor="bottom end"
        className="absolute mt-2 w-54 rounded-lg border border-zinc-700 bg-zinc-900 p-1 text-sm text-white shadow-xl focus:outline-none z-50 transition duration-100 ease-out data-closed:scale-95 data-closed:opacity-0"
      >
        {menuItems
          .filter(item => item.needAuth == null || item.needAuth === isAuth)
          .map(({ to, label, icon: Icon, action, color }, idx) => (
            <MenuItem key={idx}>
              {({ active }) =>
                to ? (
                  <Link
                    to={to}
                    className={`group flex items-center gap-2 w-full px-3 py-1.5 rounded-md ${
                        active ? "bg-zinc-700" : ""
                    } ${color ?? ""}`}
                  >
                    <Icon className="size-4 fill-white/60" />
                    {label}
                  </Link>
                ) : (
                  <button
                    onClick={action}
                    className={`group flex items-center gap-2 w-full px-3 py-1.5 rounded-md text-left ${
                      active ? "bg-zinc-700" : ""
                    } ${color ?? ""}`}
                  >
                    <Icon className="size-4 fill-white/60" />
                    {label}
                  </button>
                )
              }
            </MenuItem>
          ))}
      </MenuItems>
    </Menu>
  );
}
