import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './Home';
import NoMatch from './NoMatch';

function App() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const nav = document.querySelector('.nav');
    const navHeight = nav?.getBoundingClientRect().height || 0;
  
    const handleScroll = () => {
      if (window.scrollY > navHeight && !isSticky) {
        setIsSticky(true);
      } else if (window.scrollY === 0 && isSticky) {
        setIsSticky(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSticky]);
  

  return (
    <Router>
       <nav className={`nav ${isSticky ? 'sticky' : ''}`}>
        <Link to="/"><img src="/Media/Logo.png" alt="Logo" /></Link>
        <ul className="navList">
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'element active' : 'element'}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'element active' : 'element'}>About</NavLink></li>
          <li><NavLink to="/services" className={({ isActive }) => isActive ? 'element active' : 'element'}>Services</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'element active' : 'element'}>Contact</NavLink></li>
        </ul>
      </nav>
      {isSticky && <div style={{ height: '67.361px' }} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
