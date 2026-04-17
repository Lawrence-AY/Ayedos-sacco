

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white py-12 border-t border-[#8cc63f]/20 dark:border-[#8cc63f]/30 transition-colors duration-300">    
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
                {/* Brand Section */}
                <div className="footer-brand space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#8cc63f] text-slate-900 flex items-center justify-center font-bold text-xl">A</div>
                        <div>
                            <strong className="block text-lg text-white">Ayedos SACCO</strong>
                            <span className="text-sm text-white/70">Savings and Credit Cooperative</span>
                        </div>
                    </div>
                </div>

                {/* Platform Links */}
                <div className="footer-column space-y-3">
                    <h4 className="font-semibold text-white text-sm uppercase tracking-wide">Platform</h4>
                    <div className="space-y-2 flex flex-col">
                        <a href="#" className="text-white/70 hover:text-[#8cc63f] transition-colors duration-300">Products</a>
                        <a href="#services" className="text-white/70 hover:text-[#8cc63f] transition-colors duration-300">Services</a>
                        <a href="#security" className="text-white/70 hover:text-[#8cc63f] transition-colors duration-300">Security</a>
                    </div>
                </div>

                {/* Company Links */}
                <div className="footer-column space-y-3">
                    <h4 className="font-semibold text-white text-sm uppercase tracking-wide">Company</h4>
                    <div className="space-y-2 flex flex-col">
                        <a href="#" className="text-white/70 hover:text-[#8cc63f] transition-colors duration-300">Our Story</a>
                        <a href="#contact" className="text-white/70 hover:text-[#8cc63f] transition-colors duration-300">Contact</a>
                        <a href="#" className="text-white/70 hover:text-[#8cc63f] transition-colors duration-300">Team</a>
                    </div>
                </div>

                {/* Resources Links */}
                <div className="footer-column space-y-3">
                    <h4 className="font-semibold text-white text-sm uppercase tracking-wide">Resources</h4>
                    <div className="space-y-2 flex flex-col">
                        <a href="#" className="text-white/70 hover:text-[#8cc63f] transition-colors duration-300">FAQ</a>
                        <a href="#" className="text-white/70 hover:text-[#8cc63f] transition-colors duration-300">Guides</a>
                        <a href="#" className="text-white/70 hover:text-[#8cc63f] transition-colors duration-300">Blog</a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-white/10 dark:border-white/5 mt-8 pt-8 max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <p className="text-white/60">© 2026 Ayedos SACCO. All rights reserved.</p>
                    <div className="flex gap-6 justify-start md:justify-end">
                        <a href="#" className="text-white/60 hover:text-[#8cc63f] transition-colors duration-300">Privacy Policy</a>
                        <a href="#" className="text-white/60 hover:text-[#8cc63f] transition-colors duration-300">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
