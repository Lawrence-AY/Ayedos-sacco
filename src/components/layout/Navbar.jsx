import { useState, useEffect, useRef } from 'react';
import { 
  HiChevronDown, HiBars3, HiXMark, 
  HiMagnifyingGlass,
  HiSun,
  HiMoon
} from 'react-icons/hi2';
import '../../styles.css';

function Navbar({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const navbarRef = useRef(null);
  const searchInputRef = useRef(null);

  // Apply theme to document and save to localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns, search, and mobile menu when clicking outside navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setDropdownOpen(null);
        setSearchOpen(false);
        if (window.innerWidth >= 768) {
          setMobileMenuOpen(false);
        }
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setDropdownOpen(null);
        setSearchOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  // Close mobile menu when window resizes above mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
    setDropdownOpen(null);
    setSearchOpen(false);
  };

  const handleNavLink = (e, route) => {
    e.preventDefault();
    if (onNavigate) onNavigate(route);
    setMobileMenuOpen(false);
    setDropdownOpen(null);
    setSearchOpen(false);
  };

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  // Logo logic based on theme and scroll state
  let logoSrc;
  if (theme === 'dark') {
    logoSrc = '/logos/logo-dark.png';
  } else {
    logoSrc = scrolled ? '/logos/logo-light.png' : '/logos/logo-dark.png';
  }

   
  return (
    <header ref={navbarRef} className={`landing-navbar ${scrolled ? 'scrolled' : ''}`}>
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
        {/* Search Section */}
        <div className="nav-search-wrapper"
         style={{
    color:
      theme === 'dark'
        ? '#ffffff'   // blue
        : scrolled
          ? '#0f2b3d' // yellow
          : '#ffffff' // red
  }}>
          {searchOpen ? (
            <form onSubmit={handleSearch} className="nav-search-form">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="nav-search-input"
              />
              <button type="submit" className="nav-search-submit">
                <HiMagnifyingGlass />
              </button>
              <button
                type="button"
                className="nav-search-close"
                onClick={() => setSearchOpen(false)}
              >
                <HiXMark />
              </button>
            </form>
          ) : (
            <button
              className="nav-search-icon"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <HiMagnifyingGlass />
            </button>
          )}
        </div>

        

        {/* About Dropdown */}
      <div
  className="nav-dropdown"
  style={{
    color:
      theme === 'dark'
        ? '#ffffff'   // blue
        : scrolled
          ? '#0f2b3d' // yellow
          : '#ffffff' // red
  }}
>
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
         <div
  className="nav-dropdown"
  style={{
    color:
      theme === 'dark'
        ? '#ffffff'   // blue
        : scrolled
          ? '#0f2b3d' // yellow
          : '#ffffff' // red
  }}
>
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
        <div
  className="nav-dropdown"
  style={{
    color:
      theme === 'dark'
        ? '#ffffff'   // blue
        : scrolled
          ? '#0f2b3d' // yellow
          : '#ffffff' // red
  }}
>
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

     <div
  className="nav-dropdown"
  style={{
    color:
      theme === 'dark'
        ? '#ffffff'   // blue
        : scrolled
          ? '#0f2b3d' // yellow
          : '#ffffff' // red
  }}
>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
        </div>

        <div className="nav-auth-buttons"
         style={{
    color:
      theme === 'dark'
        ? '#ffffff'   // blue
        : scrolled
          ? '#0f2b3d' // yellow
          : '#ffffff' // red
  }}>
          <button
            className="btn btn-outline border-[#8cc63f]"
            onClick={() => onNavigate && onNavigate('register')}
          >
            Get started
          </button>
        </div>
        {/* Custom Theme Toggle */}
        <label className="toggle text-base-content">
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={toggleTheme}
          />
          <HiSun />
         <HiMoon />
        </label>
      </nav>
    </header>
  );
}

export default Navbar;