import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <nav className="gnb">
        <ul className="gnb-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/practice">Practice</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
