import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                South Tourism
              </h1>
              <p className={`text-xs transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-gray-200'
              }`}>
                Premium Travel Solutions
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium transition-colors hover:text-orange-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="tel:+918015111046"
              className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm">Call Now</span>
            </a>
            <a
              href="https://wa.me/918015111046"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <MessageCircle size={16} />
              <span className="text-sm">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg p-4">
            <nav className="flex flex-col space-y-4">
              {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-gray-700 hover:text-orange-500 transition-colors"
                >
                  {item}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <a
                  href="tel:+918015111046"
                  className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/918015111046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;