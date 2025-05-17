import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import NoMatch from "./NoMatch";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

function App() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nav = document.querySelector(".nav");
    const navHeight = nav?.getBoundingClientRect().height || 0;

    const handleScroll = () => {
      if (window.scrollY > navHeight && !isSticky) {
        setIsSticky(true);
      } else if (window.scrollY === 0 && isSticky) {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSticky]);

  useEffect(() => {
    if (menuOpen) {
      const closeMenu = () => setMenuOpen(false);
      window.addEventListener("scroll", closeMenu);
      return () => window.removeEventListener("scroll", closeMenu);
    }
  }, [menuOpen]);

  return (
    <Router>
      <nav className={`nav ${isSticky ? "sticky" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src="/Media/Logo.png" alt="Logo" />
        </Link>
        <div
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setMenuOpen(!menuOpen);
          }}>
          <span />
          <span />
          <span />
        </div>
        <ul className={`navList ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "element active" : "element"
              }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "element active" : "element"
              }>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "element active" : "element"
              }>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "element active" : "element"
              }>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      {isSticky && <div style={{ height: "67.361px" }} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <footer>
        <div className="section">
          <div className="details">
            <p>AMG Mobility Solutions</p>
            <p>Beta-Straße 10 a</p>
            <p>85774 Unterföhring</p>
            <p>Deutschland</p>
          </div>
          <ul className="navi">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "element active" : "element"
                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "element active" : "element"
                }>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "element active" : "element"
                }>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "element active" : "element"
                }>
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="social">
            <img src="/Media/facebook.png" alt="Facebook" />
            <img src="/Media/instagram.png" alt="Instagram" />
            <img src="/Media/linkedin.png" alt="LinkedIn" />
          </div>
        </div>
        <small>&copy; 2025 AMG Mobility Solutions. All rights reserved.</small>
      </footer>
    </Router>
  );
}

export default App;
