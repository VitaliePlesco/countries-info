import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="header container">
        <div className="logo">
          <Link to="/">
            <strong>Where in the world?</strong>
          </Link>
        </div>

        <div>
          <nav>
            <NavLink to="main">All Countries</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
