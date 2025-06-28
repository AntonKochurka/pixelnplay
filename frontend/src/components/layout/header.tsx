import { Link, useLocation } from "react-router-dom";
import ProfileMenu from "./profilemenu";

export default function Header() {
  const location = useLocation();

  const links = [
    { title: "News", to: "/news" },
    { title: "Matches", to: "/matches" },
    { title: "Teams", to: "/teams" },
    { title: "Contact", to: "/contact" },
  ];

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <header>
      <nav className="container mx-auto flex items-center justify-between p-1">
        <Link to="/" className="font-russo text-4xl tracking-wide flex items-center gap-1">
          <span className="gr-text">Pixel&</span>
          <span className="clr-gr-text">Play</span>
        </Link>
        <div className="flex space-x-6 tracking-wide font-semibold">
          <div className="mt-1.5 flex space-x-6">
            {links.map((item, key) => (
              <Link
                key={key}
                to={item.to}
                className={`transition-colors gr-text hover:text-indigo-400 ${
                  isActive(item.to) ? "text-indigo-500" : ""
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <ProfileMenu/>
        </div>
      </nav>
    </header>
  );
}
