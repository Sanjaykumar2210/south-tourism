import React from 'react';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1600')"
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Gateway to
            <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              South India
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            We accept bookings only from Thiruvannamalai to all over India. Experience the beauty of South India with our premium travel services and reliable vehicle rentals.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <span>Start Your Journey</span>
            <ArrowRight size={20} />
          </button>
          <a
            href="tel:+918015111046"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Call Now: +91 801 511 1046
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <Shield className="text-green-400" size={24} />
            </div>
            <h3 className="font-semibold">100% Safe</h3>
            <p className="text-sm text-gray-300">Verified & Insured</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <Award className="text-yellow-400" size={24} />
            </div>
            <h3 className="font-semibold">Award Winning</h3>
            <p className="text-sm text-gray-300">Best Travel Agency 2024</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <Users className="text-blue-400" size={24} />
            </div>
            <h3 className="font-semibold">10K+ Happy Clients</h3>
            <p className="text-sm text-gray-300">Trusted Across India</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hidden md:block">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-sm">Scroll Down</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;