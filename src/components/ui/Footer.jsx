 
const Footer = ({ onNavigate }) => {
 

  
  const logoSrc =
   '/logos/logo-dark.png'
  

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
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">

          <div>
            <div className="text-white font-semibold mb-2">Platform</div>
            <div className="h-px bg-[#8cc63f] w-10 mb-3" />
            
            <a href="#" className="block py-1 text-white">Products</a>
            <a href="#services" className="block py-1">Services</a>
            <a href="#security" className="block py-1">Security</a>
          </div>

          <div>
            <div className="text-white font-semibold mb-2">Company</div>
           <div className="h-px bg-[#8cc63f] w-10 mb-3" />
            <a href="#">Our Story</a>
            <a href="#contact" className="block py-1">Contact</a>
            <a href="#" className="block py-1">Team</a>
          </div>

          <div>
            <div className="text-white font-semibold mb-2">Resources</div>
             <div className="h-px bg-[#8cc63f] w-10 mb-3" />
            <a href="/faq" className="block py-1">FAQ</a>
            <a href="/guides" className="block py-1">Guides</a>
            <a href="/blog" className="block py-1">Blog</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;