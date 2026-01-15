
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Process', path: '/process' },
    { name: 'Scholarships', path: '/scholarships' },
    { name: 'Insights', path: '/blog' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-parchment/95 backdrop-blur-sm border-b border-navy/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-navy text-white flex items-center justify-center font-serif text-xl rounded-sm group-hover:bg-gold transition-colors duration-300">
              FYU
            </div>
            <span className="font-serif text-2xl tracking-tight text-navy">FindYourUni</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide hover:text-gold transition-colors duration-200 ${location.pathname === link.path ? 'text-gold' : 'text-navy/80'}`}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-navy text-white px-6 py-2.5 text-sm font-medium hover:bg-gold transition-all duration-300"
            >
              FREE CONSULTATION
            </Link>
          </div>

          <button className="md:hidden text-navy" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-parchment border-b border-navy/5 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className="text-lg font-serif text-navy"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="mt-2 bg-navy text-white px-6 py-3 text-center font-medium"
              onClick={() => setIsOpen(false)}
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white/90 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gold text-navy flex items-center justify-center font-serif text-lg">FYU</div>
              <span className="font-serif text-xl tracking-tight">FindYourUni</span>
            </div>
            <p className="text-sm leading-relaxed text-white/60 mb-8">
              An ethical advisory firm dedicated to neutral, research-backed study abroad guidance. No commissions. No bias. Pure academic strategy.
            </p>
            <div className="space-y-3">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-3 text-sm hover:text-gold transition-colors">
                <Phone size={16} className="text-gold" /> {CONTACT_INFO.phone}
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 text-sm hover:text-gold transition-colors">
                <Mail size={16} className="text-gold" /> {CONTACT_INFO.email}
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="hover:text-gold transition-colors"><Link to="/services">University Finding</Link></li>
              <li className="hover:text-gold transition-colors"><Link to="/services">SOP Writing</Link></li>
              <li className="hover:text-gold transition-colors"><Link to="/services">Scholarships Identification</Link></li>
              <li className="hover:text-gold transition-colors"><Link to="/services">CV & Academic Resume</Link></li>
              <li className="hover:text-gold transition-colors"><Link to="/services">Research Proposals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Destinations</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="hover:text-gold transition-colors"><Link to="/destinations">Study in UK</Link></li>
              <li className="hover:text-gold transition-colors"><Link to="/destinations">Study in USA</Link></li>
              <li className="hover:text-gold transition-colors"><Link to="/destinations">Study in Canada</Link></li>
              <li className="hover:text-gold transition-colors"><Link to="/destinations">Study in Europe</Link></li>
              <li className="hover:text-gold transition-colors"><Link to="/destinations">Study in Australia</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Philosophy</h4>
            <p className="text-sm italic text-white/50 leading-relaxed mb-6">
              "Education is a life-shaping decision. It should not be treated as a transaction."
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all cursor-pointer">
                <span className="text-xs">LI</span>
              </div>
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all cursor-pointer">
                <span className="text-xs">IG</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-white/40 tracking-widest uppercase">
          <p>© {new Date().getFullYear()} FINDYOURUNI ADVISORY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-navy">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
