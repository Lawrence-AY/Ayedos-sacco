import { useState, useEffect } from 'react';
import { HiChevronDown, HiBars3, HiXMark } from 'react-icons/hi2';
import '../../styles.css'

function Navbar({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
    setDropdownOpen(null);
  };

  const handleNavLink = (e, route) => {
    e.preventDefault();
    if (onNavigate) onNavigate(route);
    setMobileMenuOpen(false);
    setDropdownOpen(null);
  };

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };
 
  const logoSrc = scrolled ? '/logos/logo-light.png' : '/logos/logo-dark.png';

  return (
    <header className={`landing-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="brand" onClick={() => onNavigate && onNavigate('')}>
        <img src={logoSrc} alt="AYEDOS SACCO" width="130" />
      </div>

      <button
        className="mobile-menu-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <HiXMark /> : <HiBars3 />}
      </button>

      <nav className={`landing-links ${mobileMenuOpen ? 'open' : ''}`}>
        {/* About Dropdown */}
       <div className={`nav-dropdown ${scrolled ? 'color: var(--color-muted);' : 'text-white'}`}>
          <button className="nav-dropdown-toggle" onClick={() => toggleDropdown('about')}>
            About Us <HiChevronDown />
          </button>
          {dropdownOpen === 'about' && (
            <div className="nav-dropdown-menu">
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>Overview</a>
              <a href="#" onClick={(e) => handleNavLink(e, 'our-story')}>Our Story</a>
              <a href="#" onClick={(e) => handleNavLink(e, 'team')}>Team</a>
            </div>
          )}
        </div>

        {/* Services Dropdown */}
        <div className="nav-dropdown">
          <button className="nav-dropdown-toggle" onClick={() => toggleDropdown('services')}>
            Services <HiChevronDown />
          </button>
          {dropdownOpen === 'services' && (
            <div className="nav-dropdown-menu">
              <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>All Services</a>
              <a href="#" onClick={(e) => handleNavLink(e, 'products')}>Products</a>
              <a href="#" onClick={(e) => handleNavLink(e, 'pricing')}>Pricing</a>
            </div>
          )}
        </div>

        {/* Resources Dropdown */}
        <div className="nav-dropdown">
          <button className="nav-dropdown-toggle" onClick={() => toggleDropdown('resources')}>
            Resources <HiChevronDown />
          </button>
          {dropdownOpen === 'resources' && (
            <div className="nav-dropdown-menu">
              <a href="#" onClick={(e) => handleNavLink(e, 'faq')}>FAQ</a>
              <a href="#" onClick={(e) => handleNavLink(e, 'guides')}>Guides</a>
              <a href="#" onClick={(e) => handleNavLink(e, 'blog')}>Blog</a>
            </div>
          )}
        </div>

        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>

        <div className="nav-auth-buttons">
          <button
            className="btn btn-outline btn-accent"
            onClick={() => onNavigate && onNavigate('register')}
          >
            Get started
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;