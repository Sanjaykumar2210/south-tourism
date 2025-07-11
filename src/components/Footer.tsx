import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">South Tourism</h3>
                <p className="text-sm text-gray-400">Premium Travel Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner for memorable journeys across India. We provide premium tour packages and reliable vehicle rental services.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-400">Golden Triangle Tours</span></li>
              <li><span className="text-gray-400">Kerala Backwaters</span></li>
              <li><span className="text-gray-400">Rajasthan Tours</span></li>
              <li><span className="text-gray-400">Vehicle Rentals</span></li>
              <li><span className="text-gray-400">Corporate Travel</span></li>
              <li><span className="text-gray-400">Custom Packages</span></li>
              <li><span className="text-gray-400">Group Tours</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="text-blue-400 mt-1" size={16} />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a href="tel:+918015111046" className="text-white hover:text-blue-400 transition-colors">
                    +91 801 511 1046
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MessageCircle className="text-green-400 mt-1" size={16} />
                <div>
                  <p className="text-gray-400">WhatsApp</p>
                  <a href="https://wa.me/918015111046" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors">
                    +91 801 511 1046
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="text-orange-400 mt-1" size={16} />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:info@travelpro.com" className="text-white hover:text-orange-400 transition-colors">
                    info@travelpro.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-purple-400 mt-1" size={16} />
                <div>
                  <p className="text-gray-400">Address</p>
                  <p className="text-white">Thamarai Nagar, Tiruvannamalai</p>
                  <p className="text-white">Tamil Nadu 606601</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 South Tourism. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;