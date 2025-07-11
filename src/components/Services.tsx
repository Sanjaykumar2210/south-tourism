import React, { useEffect, useState, useRef } from 'react';
import { Mountain, Car, Plane, Camera, Compass, Users } from 'lucide-react';

const popularRoutes = [
  'Thiruvannamalai to Karnataka',
  'Thiruvannamalai to Pondicherry',
  'Thiruvannamalai to Andhra Pradesh',
  'Thiruvannamalai to Kerala',
  'Thiruvannamalai to Bengaluru',
  'Thiruvannamalai to Mumbai',
  'Thiruvannamalai to Hyderabad',
  'Thiruvannamalai to Thiruvananthapuram',
];

const Services = () => {
  const [showRoutes, setShowRoutes] = useState(false);
  const [showCards, setShowCards] = useState(Array(popularRoutes.length).fill(false));
  const [showFleet, setShowFleet] = useState(false);
  const fleetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById('route-segment');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setShowRoutes(true);
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (showRoutes) {
      popularRoutes.forEach((_, i) => {
        setTimeout(() => {
          setShowCards(prev => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, 200 + i * 120);
      });
    }
  }, [showRoutes]);

  // Fleet scroll animation
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowFleet(true);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (fleetRef.current) {
      observer.observe(fleetRef.current);
    }
    return () => {
      if (fleetRef.current) observer.unobserve(fleetRef.current);
    };
  }, []);

  const tourPackages = [
    {
      title: "Golden Triangle Tour",
      description: "Experience Delhi, Agra, and Jaipur in luxury with our most popular package.",
      duration: "7 Days",
      price: "₹25,000",
      image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Mountain className="text-orange-500" size={24} />
    },
    {
      title: "Kerala Backwaters",
      description: "Serene houseboat experience through the enchanting backwaters of Kerala.",
      duration: "5 Days",
      price: "₹18,000",
      image: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Camera className="text-blue-500" size={24} />
    },
    {
      title: "Goa Beach Paradise",
      description: "Relax on pristine beaches with water sports and vibrant nightlife.",
      duration: "4 Days",
      price: "₹15,000",
      image: "https://images.pexels.com/photos/1024981/pexels-photo-1024981.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Compass className="text-green-500" size={24} />
    },
    {
      title: "Rajasthan Royal Tour",
      description: "Explore the royal heritage of Rajasthan with palace stays and desert safaris.",
      duration: "10 Days",
      price: "₹35,000",
      image: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Users className="text-purple-500" size={24} />
    }
  ];

  const fleet = [
    {
      name: 'Etios',
      image: '/images/etios.webp',
    },
    {
      name: 'Swift',
      image: '/images/swift.jpeg',
    },
    {
      name: 'Tavera',
      image: '/images/tavera.jpeg',
    },
    {
      name: 'Toyota Innova',
      image: '/images/innova.jpg',
    },
    {
      name: 'Marazzo',
      image: '/images/marazzo.webp',
    },
    {
      name: 'Tempo Traveller',
      image: '/images/tempo.jpeg',
    },
  ];

  // Scroll to Contact handler
  function handleBookNowClick() {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Animated Route Segment */}
        <div
          id="route-segment"
          className={`mb-16 transition-all duration-700 ${showRoutes ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
           <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From curated tour packages to reliable vehicle rentals, we provide comprehensive 
            travel solutions for every need.
          </p>
        </div>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6 tracking-wide">
            WE ACCEPT BOOKING ONLY FROM THIRUVANNAMALAI TO ALL OVER INDIA
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {popularRoutes.map((route, i) => (
              <div
                key={route}
                className={`rounded-lg px-4 py-5 font-semibold text-center text-lg shadow-md bg-gradient-to-r from-blue-600 to-orange-500 text-white transition-all duration-700 hover:scale-105 hover:shadow-xl ${showCards[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {route}
              </div>
            ))}
          </div>
        </div>

        {/* Our Fleet */}
        <div className="mb-20" ref={fleetRef}>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Fleet
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 text-center">
            Choose from our range of well-maintained, comfortable vehicles for your journey from Thiruvannamalai to anywhere in India. All vehicles come with professional drivers and top-notch amenities for a safe and pleasant trip.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleet.map((vehicle, i) => (
              <div
                key={vehicle.name}
                className={`bg-white rounded-2xl shadow-lg flex flex-col items-center p-6 border-t-4 border-blue-600 hover:border-orange-500 transition-all duration-500
                  ${showFleet ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{ transitionDelay: showFleet ? `${i * 120}ms` : '0ms' }}
              >
                <div className="w-full flex justify-end mb-2">
                  <button
                    className="bg-gradient-to-r from-blue-600 to-orange-500 text-white font-bold py-2 px-5 rounded shadow hover:from-orange-500 hover:to-blue-600 transition-all text-sm uppercase tracking-wide"
                    onClick={handleBookNowClick}
                  >
                    Book Now
                  </button>
                </div>
                <div className="flex-1 flex items-center justify-center w-full h-48 bg-gray-50 rounded-xl mb-4 shadow-inner">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="object-contain h-40 w-auto mx-auto"
                    loading="lazy"
                  />
                </div>
                <div className="w-full text-center mt-2">
                  <h4 className="text-xl font-extrabold text-gray-800 uppercase tracking-wide mb-1">{vehicle.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;