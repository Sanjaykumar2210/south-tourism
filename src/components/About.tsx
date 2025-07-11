import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Heart, Star } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState({
    header: false,
    content: false,
    stats: false,
    image: false,
    features: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetId = entry.target.getAttribute('data-animate');
            if (targetId) {
              setIsVisible(prev => ({ ...prev, [targetId]: true }));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible.header 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          data-animate="header"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About South Tourism
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over a decade of experience, we've been creating unforgettable travel experiences 
            across India, combining local expertise with world-class service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div 
            className={`space-y-6 transition-all duration-1000 ease-out delay-300 ${
              isVisible.content 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-8'
            }`}
            data-animate="content"
          >
            <h3 className="text-3xl font-bold text-gray-800">
              Your Trusted Travel Partner
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Since 2012, South Tourism has been at the forefront of India's travel industry, 
              providing premium tour packages and reliable vehicle rental services. We understand 
              that every journey is unique, and we're committed to making yours extraordinary.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our team of experienced travel professionals ensures that every detail is perfect, 
              from comfortable accommodations to seamless transportation, allowing you to focus 
              on creating memories that last a lifetime.
            </p>
            
            <div 
              className={`grid grid-cols-2 gap-4 mt-8 transition-all duration-1000 ease-out delay-500 ${
                isVisible.stats 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-95'
              }`}
              data-animate="stats"
            >
              <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-3xl font-bold text-orange-600 mb-2">12+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
                <div className="text-gray-600">Happy Travelers</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600">Tour Packages</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600">Destinations</div>
              </div>
            </div>
          </div>

          <div 
            className={`relative transition-all duration-1000 ease-out delay-500 ${
              isVisible.image 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-8'
            }`}
            data-animate="image"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <img 
                src="public/images/force.jpg" 
                alt="Travel Team" 
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-2 mb-2">
                <Star className="text-yellow-400 fill-current" size={20} />
                <span className="font-bold text-gray-800">4.9/5</span>
              </div>
              <p className="text-sm text-gray-600">Customer Rating</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div 
          className={`bg-white rounded-2xl shadow-lg p-8 md:p-12 transition-all duration-1000 ease-out delay-700 ${
            isVisible.features 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          data-animate="features"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose South Tourism?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <MapPin className="text-blue-600" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Local Expertise</h4>
              <p className="text-gray-600">
                Deep local knowledge and connections ensure authentic experiences and hidden gems.
              </p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                <Clock className="text-orange-600" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">24/7 Support</h4>
              <p className="text-gray-600">
                Round-the-clock assistance to ensure your journey is smooth and worry-free.
              </p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <Heart className="text-green-600" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Personalized Service</h4>
              <p className="text-gray-600">
                Tailored packages and personalized attention to make every trip unique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;