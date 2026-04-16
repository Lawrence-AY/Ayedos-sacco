

const Footer = () => {
    return (
        <footer className="bg-[#003a16] text-white py-4">    
            <div className="grid  grid-cols-4 mx-auto text-center">
                <div className="footer-brand">
            <div className="brand__mark">A</div>
            <div>
              <strong>Ayedous SACCO</strong>
              <span>Savings and Credit Cooperative</span>
            </div>
          </div>
               
               
                 <div className="footer-links">
            <div className="footer-column">
              <h4>Platform</h4>
              <a href="#" >Products</a>
              <a href="#services" >Services</a>
              <a href="#security">Security</a>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <a href="#" >Our Story</a>
              <a href="#contact" >Contact</a>
              <a href="#" >Team</a>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <a href="#" >FAQ</a>
              <a href="#">Guides</a>
              <a href="#" >Blog</a>
            </div>
          </div>


              
            </div>
           
        </footer>
    );
}
export default Footer;
