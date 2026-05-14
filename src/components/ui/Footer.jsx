const Footer = ({ onNavigate }) => {
  const logoSrc = '/logos/logo-dark.png'

  const handleRouteClick = (e, route) => {
    e.preventDefault()

    if (onNavigate) {
      onNavigate(route)
      return
    }

    window.location.href = route ? `/${route}` : '/'
  }

  return (
    <footer className="text-base-content py-10 bg-black border border-[#8cc63f]/40 ">
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">

        {/* Brand + Contact */}
        <div>
          <div
            className="brand cursor-pointer mb-4"
            onClick={() => onNavigate && onNavigate('')}
          >
            <img src={logoSrc} alt="AYEDOS SACCO" width="130" />
          </div>

          <div className="text-sm text-white/70 leading-6 ">
            Reach us <br />
            Monday – Friday <br />
            8am - 5pm (GMT +3) <br /> 

            Call: +254 733 556 617 <br /><br />

            1st Floor Africa Reit House, Karen <br />
            Nairobi, Kenya <br />

            Email: info@cowrie.io
          </div>
        </div>

        {/* Links */}
        <div className="md:col-span-3  text-white grid grid-cols-2 md:grid-cols-3 gap-6">

          <div>
            <div className="text-white font-semibold mb-2">Platform</div>
            <div className="h-px bg-[#8cc63f] w-10 mb-3" />
            
            <a href="/products" className="block py-1 text-white">Products</a>
            <a href="https://portal.sacco.ayedos.com/register"  className="block py-1">Get Started</a>
            <a href="https://portal.sacco.ayedos.com/login" className="block py-1">Log in</a>
          </div>

          <div>
            <div className="text-white font-semibold mb-2">Company</div>
           <div className="h-px bg-[#8cc63f] w-10 mb-3" />
            <a href="/our-story"   className="block py-1">Our Story</a>
       <a href="/our-ideology" className="block py-1">Our Ideology</a>
            <a href="/contact"  className="block py-1">Contact</a>
 
          </div>

          <div>
            <div className="text-white font-semibold mb-2">Resources</div>
             <div className="h-px bg-[#8cc63f] w-10 mb-3" />
                <a href="/blog"   className="block py-1">Blog</a>
                <a href="/guides" onClick={(e) => handleRouteClick(e, 'guides')} className="block py-1">Guides</a>
                <a href="/faq" onClick={(e) => handleRouteClick(e, 'faq')} className="block py-1">FAQ</a>

            <a href="/TermsAndConditions"   className="block py-1">Terms And Conditions</a>
            <a href="/CookiePolicy"   className="block py-1">Cookies Policy</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
