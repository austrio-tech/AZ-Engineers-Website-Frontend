// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css'; // Import your CSS file

const Navbar = ({toggleMenu, menuOpen}) => {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={menuOpen ? 'nav open' : 'nav' }>
      {/* <button className="menu-toggle" onClick={toggleMenu}>Menu</button> */}
      <ul>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li className="dropdown">
          <Link to="#" onClick={e => e.preventDefault()}>About</Link>
          <ul className="dropdown-menu">
            <li><Link to="/about/policies">Policies</Link></li>
            <li><Link to="/about/mission">Mission</Link></li>
            <li><Link to="/about/founders-message">Founders Message</Link></li>
            <li><Link to="/about/managing-director-message">MD Message</Link></li>
            <li><Link to="/about/certificates">Certificates</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to="#" onClick={e => e.preventDefault()}>Projects</Link>
          <ul className="dropdown-menu">
            <li><Link to="/projects/completed">Completed Projects</Link></li>
            <li><Link to="/projects/current">Current Projects</Link></li>
          </ul>
        </li>
        <li><Link to="/awards" onClick={toggleMenu}>Awards</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        <li><a href="/path/to/company-profile.pdf" download>Company Profile</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
