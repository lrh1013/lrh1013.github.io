import { Link } from "react-router-dom";
import ThemeToggle from "@/components/common/ThemeToggle";

const Header = () => {
  return (
    <header id="header">
      <div className="maxinner">
        <h1 className="logo">
          <Link to="/">Rany Portfolio</Link>
        </h1>
        <nav className="gnb">
          <ul className="gnb-menu">
            <li><Link to="/">Work</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/practice">Practice</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
