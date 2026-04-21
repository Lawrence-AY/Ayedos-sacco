import { useState, useEffect, useRef } from "react";
import {
  HiChevronDown,
  HiBars3,
  HiXMark,
  HiMagnifyingGlass,
  HiSun,
  HiMoon,
} from "react-icons/hi2";
import { runSiteSearch } from "../../utils/siteSearch";
import "../../styles.css";

function Navbar({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const navbarRef = useRef(null);
  const searchInputRef = useRef(null);

  // Apply theme to document and save to localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      if (event.key === "Escape") {
        setDropdownOpen(null);
        setSearchOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Close mobile menu when window resizes above mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const result = runSiteSearch(searchQuery, onNavigate);

      if (!result.matched) {
        window.alert(result.message);
        return;
      }

      setSearchOpen(false);
      setSearchQuery("");
      setMobileMenuOpen(false);
      setDropdownOpen(null);
    }
  };

  



  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const menuTextColor = mobileMenuOpen
    ? theme === "dark"
      ? "#ffffff"
      : "#0f2b3d"
    : theme === "dark"
      ? "#ffffff"
      : scrolled
        ? "#0f2b3d"
        : "#ffffff";

  const searchIconColor = mobileMenuOpen
    ? theme === "dark"
      ? "#ffffff"
      : "#0f2b3d"
    : theme === "dark"
      ? "#ffffff"
      : scrolled
        ? "#0f2b3d"
        : "#ffffff";

  // Logo logic based on theme and scroll state
  let logoSrc;
  if (theme === "dark") {
    logoSrc = "/logos/logo-dark.png";
  } else {
    logoSrc = scrolled ? "/logos/logo-light.png" : "/logos/logo-dark.png";
  }

  return (
    <header
      ref={navbarRef}
      className={`landing-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <div className="brand" onClick={() => onNavigate && onNavigate("")}>
        <a href="/">

        <img src={logoSrc} alt="AYEDOS SACCO" width="130" />
        </a>
      </div>

      <button
        className="mobile-menu-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
        style={{ color: menuTextColor }}
      >
        {mobileMenuOpen ? <HiXMark /> : <HiBars3 />}
      </button>

      <nav className={`landing-links ${mobileMenuOpen ? "open" : ""}`}>
        {/* Search Section */}
        <div
          className="nav-search-wrapper"
          style={{
            color: menuTextColor,
          }}
        >
          {searchOpen ? (
            <form onSubmit={handleSearch} className="nav-search-form">
              <input
                style={{
                  color: mobileMenuOpen
                    ? theme === "dark"
                      ? "#ffffff"
                      : "#0f2b3d"
                    : theme === "dark"
                      ? "#ffffff"
                      : scrolled
                        ? "#0f2b3d"
                        : "#ffffff",
                }}
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
              style={{
                color: searchIconColor,
              }}
            >
              <HiMagnifyingGlass
                style={{
                  color: searchIconColor,
                }}
              />
            </button>
          )}
        </div>

        <div
          className="nav-dropdown mr-5"
          style={{
            color: menuTextColor,
          }}
        >
          <a
            href="/"
            style={{
              color: menuTextColor,
            }}
            onClick={() => onNavigate && onNavigate("/")}
          >
            Home
          </a>
        </div>

        {/* About Dropdown */}
        <div
          className="nav-dropdown"
          style={{
            color: menuTextColor,
          }}
        >
          <button
            className="nav-dropdown-toggle"
            onClick={() => toggleDropdown("about")}
            style={{ color: menuTextColor }}
          >
            About <HiChevronDown />
          </button>
          {dropdownOpen === "about" && (
            <div className="nav-dropdown-menu">
              <a
                href="/our-story"
     
              >
                Our Story
              </a>
              <a
                href="/our-ideology"
                
              >
                Our Ideology
              </a>
            </div>
          )}
        </div>

        {/* Services Dropdown */}
        <div
          className="nav-dropdown"
          style={{
            color: menuTextColor,
          }}
        >
          <button
            className="nav-dropdown-toggle"
            onClick={() => toggleDropdown("services")}
            style={{ color: menuTextColor }}
          >
            Services <HiChevronDown />
          </button>
          {dropdownOpen === "services" && (
            <div className="nav-dropdown-menu">
              
              <a href="/products" >
                Products
              </a>
            </div>
          )}
        </div>

        {/* Resources Dropdown */}
        <div
          className="nav-dropdown"
          style={{
            color: menuTextColor,
          }}
        >
          <button
            className="nav-dropdown-toggle"
            onClick={() => toggleDropdown("resources")}
            style={{ color: menuTextColor }}
          >
            Resources <HiChevronDown />
          </button>
          {dropdownOpen === "resources" && (
            <div className="nav-dropdown-menu">
              <a href="/faq" >
                FAQ
              </a>
              <a href="/guides"  >
                Guides
              </a>
              <a href="/blog"  >
                Blog
              </a>
            </div>
          )}
        </div>

        <div
          className="nav-dropdown"
          style={{
            color: menuTextColor,
          }}
        >
          <a
            href="/contact"
            style={{
              color: menuTextColor,
            }}
           
          >
            Contact
          </a>
        </div>

        <div
          className="nav-auth-buttons"
          style={{
            color: menuTextColor,
          }}
        >
          <button
            className="btn btn-outline border-[#8cc63f] p-4"
            onClick={() => onNavigate && onNavigate("register")}
          >
            Get started
          </button>
        </div>
        {/* Custom Theme Toggle */}
        <label
          className="toggle text-base-content ml-3"
          style={{
            color: menuTextColor,
          }}
        >
          <input
            type="checkbox"
            checked={theme === "dark"}
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
