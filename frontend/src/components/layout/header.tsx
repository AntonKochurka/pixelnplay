import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="container mx-auto flex items-center justify-between p-1">
        <Link to="/" className="font-russo text-4xl tracking-wide flex items-center gap-1">
          <span className="gr-text">Pixel&</span>
          <span className="clr-gr-text">
            Play
          </span>
        </Link>
        <div className="flex space-x-6 tracking-wide font-semibold">
          <Link to="/news" className="gr-text hover:text-indigo-400 transition-colors">
            News
          </Link>
          <Link to="/matches" className="gr-text hover:text-indigo-400 transition-colors">
            Matches
          </Link>
          <Link to="/teams" className="gr-text hover:text-indigo-400 transition-colors">
            Teams
          </Link>
          <Link to="/contact" className="gr-text hover:text-indigo-400 transition-colors">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
