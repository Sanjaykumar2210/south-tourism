import React, { useEffect, useRef, useState } from 'react';
import { BadgeDollarSign, Headphones, ShieldCheck, XCircle } from 'lucide-react';

const Tariff = () => {
  const [show, setShow] = useState(false);
  const [showList, setShowList] = useState([false, false, false, false]);
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

  useEffect(() => {
    if (show) {
      [0, 1, 2, 3].forEach((i) => {
        setTimeout(() => {
          setShowList((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, 300 + i * 180);
      });
    }
  }, [show]);

  return (
    <section id="tariff" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl">
          {/* Left: About South Tourism */}
          <div
            className={`bg-blue-700 text-white p-10 flex flex-col justify-center transition-all duration-1000 ease-out ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-wide">ABOUT SOUTH TOURISM</h2>
            <p className="mb-6 text-lg leading-relaxed">
              South Tourism is your trusted travel partner, dedicated to providing safe, comfortable, and reliable transportation from Thiruvannamalai to all over India. Our team is committed to excellence, combining local expertise with modern service for every journey.
            </p>
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-2">What Makes Us Stand Out:</h3>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li><span className="font-bold">Customer-Centric:</span> Your satisfaction is our top priority.</li>
                <li><span className="font-bold">Skilled Drivers:</span> Professional, courteous, and experienced drivers for your comfort and safety.</li>
                <li><span className="font-bold">Safety Focus:</span> Well-maintained vehicles, real-time support, and 24/7 assistance.</li>
                <li><span className="font-bold">Diverse Services:</span> From local trips to outstation journeys, we cover all your travel needs.</li>
              </ul>
            </div>
            <div>
              <a
                href="#about"
                className="inline-block bg-gradient-to-r from-orange-500 to-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-lg shadow hover:from-yellow-400 hover:to-orange-500 transition-all text-lg mt-4"
              >
                Learn More
              </a>
            </div>
          </div>
          {/* Right: Why Choose Us */}
          <div
            className={`bg-gradient-to-br from-yellow-300 via-orange-200 to-yellow-400 p-10 flex flex-col justify-center transition-all duration-1000 ease-out ${show ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <h4 className="text-blue-700 font-bold uppercase tracking-widest mb-2 text-sm">Why Choose Us?</h4>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">WHY BOOK WITH SOUTH TOURISM</h3>
            <ul className="space-y-6">
              {[
                { icon: <BadgeDollarSign size={28} />, label: 'All Inclusive Pricing' },
                { icon: <Headphones size={28} />, label: 'Dedicated Customer Support' },
                { icon: <ShieldCheck size={28} />, label: 'Safety & Reliability' },
                { icon: <XCircle size={28} />, label: 'Free Cancellation' },
              ].map((item, i) => (
                <li
                  key={item.label}
                  className={`flex items-center space-x-4 transition-all duration-700 ${showList[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <span className="bg-white text-orange-500 rounded-full p-3 shadow">{item.icon}</span>
                  <span className="text-lg font-semibold text-gray-900">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tariff;