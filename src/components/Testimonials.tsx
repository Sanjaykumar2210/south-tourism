import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

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

const Testimonials = () => {
  const [show, setShow] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showCards, setShowCards] = useState<number[]>([]);

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
      setShowCards([]);
      testimonials.forEach((_, i) => {
        setTimeout(() => {
          setShowCards((prev) => {
            if (!prev.includes(i)) return [...prev, i];
            return prev;
          });
        }, 200 + i * 120);
      });
    } else {
      setShowCards([]);
    }
    // eslint-disable-next-line
  }, [show]);

  const avgRating = useCountUp(4.9, 1200, show, 1);
  const happyCustomers = useCountUp(10000, 1200, show);
  const toursCompleted = useCountUp(500, 1200, show);
  const satisfactionRate = useCountUp(98, 1200, show);

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Chennai, Tamil Nadu",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=150&h=150&fit=crop",
      rating: 5,
      text: "Our family trip to Kodaikanal was seamless! South Tourism arranged everything perfectly, from the vehicle to the hotel. The driver was courteous and knew all the best spots.",
      tour: "Kodaikanal Family Tour"
    },
    {
      name: "Jessi",
      location: "Bangalore, Karnataka",
      image: "https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&w=150&h=150&fit=crop",
      rating: 5,
      text: "We booked a Tempo Traveller for our office outing to Coorg. The vehicle was clean and comfortable, and the journey was smooth. Highly recommended for group travel!",
      tour: "Coorg Group Outing"
    },
    {
      name: "Anita Patel",
      location: "Ahmedabad, Gujarat",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&w=150&h=150&fit=crop",
      rating: 5,
      text: "Our Kerala backwaters tour was magical! The houseboat experience was unforgettable, and the arrangements were top-notch. Thank you, South Tourism!",
      tour: "Kerala Backwaters"
    },
    {
      name: "Suresh Reddy",
      location: "Hyderabad, Telangana",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&w=150&h=150&fit=crop",
      rating: 5,
      text: "We hired an Innova for our pilgrimage to Tirupati. The driver was very helpful and the vehicle was in excellent condition. Will book again!",
      tour: "Tirupati Pilgrimage"
    },
    {
      name: "Meera Nair",
      location: "Kochi, Kerala",
      image: "https://images.pexels.com/photos/3184401/pexels-photo-3184401.jpeg?auto=compress&w=150&h=150&fit=crop",
      rating: 5,
      text: "Our Munnar honeymoon trip was made special by South Tourism. The itinerary was well planned and the service was excellent.",
      tour: "Munnar Honeymoon"
    },
    {
      name: "Vikram Singh",
      location: "Jaipur, Rajasthan",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&w=150&h=150&fit=crop",
      rating: 5,
      text: "We explored South India with their tour package. Every detail was taken care of, and the guides were knowledgeable. Great experience!",
      tour: "South India Explorer"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their 
            experiences with South Tourism.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">{avgRating}</div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={16} />
              ))}
            </div>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div className="text-center bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">{happyCustomers.toLocaleString()}+</div>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="text-center bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-orange-600 mb-2">{toursCompleted}+</div>
            <p className="text-gray-600">Tours Completed</p>
          </div>
          <div className="text-center bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">{satisfactionRate}%</div>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-700 ${showCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={14} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 text-gray-200" size={24} />
                <p className="text-gray-700 italic mb-4 pl-4">"{testimonial.text}"</p>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.tour}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-orange-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Create Your Own Story?</h3>
            <p className="text-lg mb-6">Join thousands of satisfied travelers who chose South Tourism for their memorable journeys.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918015111046"
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Call Us Now
              </a>
              <a
                href="https://wa.me/918015111046"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;