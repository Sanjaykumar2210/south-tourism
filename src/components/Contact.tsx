import React, { useEffect, useRef, useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Mail, Globe } from 'lucide-react';

function useCountUp(target: number, duration: number, start: boolean, decimals = 0) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTimestamp: number | null = null;
    function step(timestamp: number) {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Number((progress * target).toFixed(decimals)));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    }
    requestAnimationFrame(step);
    // eslint-disable-next-line
  }, [start, target, duration, decimals]);
  return count;
}

const Contact = () => {
  const [show, setShow] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const years = useCountUp(12, 1200, show);
  const clients = useCountUp(10000, 1200, show);
  const support = useCountUp(24, 1200, show);
  const safe = useCountUp(100, 1200, show);

  return (
    <section id="contact" className="py-20 bg-white">
      <div
        className={`container mx-auto px-4 transition-all duration-1000 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        ref={sectionRef}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your journey? Contact us today for personalized travel solutions 
            and expert assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+91 801 511 1046</p>
                    <p className="text-sm text-gray-500">24/7 Customer Support</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                    <p className="text-gray-600">+91 801 511 1046</p>
                    <p className="text-sm text-gray-500">Quick Response</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600"> southtourism3875@gmail.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600">Thamarai Nagar, Tiruvannamalai</p>
                    <p className="text-gray-600">Tamil Nadu 606601</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-red-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Business Hours</h4>
                    <p className="text-gray-600">Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-4">Quick Contact</h4>
              <div className="space-y-3">
                <a
                  href="tel:+918015111046"
                  className="flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full"
                >
                  <Phone size={20} />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/918015111046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp Chat</span>
                </a>
               
              </div>
            </div>
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Find Us</h3>
              <div className="bg-gray-100 rounded-xl overflow-hidden h-64 flex items-center justify-center">
                <iframe
                  title="South Tourism Location"
                  src="https://www.google.com/maps?q=12.225284,79.074636&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-64 rounded-xl border-none"
                ></iframe>
              </div>
              <div className="text-center mt-2">
                <a
                  href="https://maps.app.goo.gl/qCHkc554tpoFPx1S8?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Services Overview */}
            <div className="bg-gradient-to-r from-blue-600 to-orange-600 rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4">Why Choose South Tourism?</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">{years}+</div>
                  <p className="text-sm">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">{clients.toLocaleString()}+</div>
                  <p className="text-sm">Happy Clients</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">{support}/7</div>
                  <p className="text-sm">Support</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">{safe}%</div>
                  <p className="text-sm">Safe Travel</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h4 className="font-semibold text-red-800 mb-2">Emergency Contact</h4>
              <p className="text-red-700 text-sm mb-3">
                24/7 emergency support for travelers
              </p>
              <a
                href="tel:+918015111046"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
              >
                <Phone size={16} />
                <span>Emergency Hotline</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;