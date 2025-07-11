import React, { useEffect, useState } from 'react';
import { X, Phone, MessageCircle } from 'lucide-react';

function ContactPopup() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-xs sm:max-w-sm md:max-w-md px-4 md:px-0">
      <div className="bg-white shadow-xl rounded-xl p-4 flex items-center justify-between border border-gray-200 animate-popup-bounce">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-3 space-y-2 md:space-y-0 w-full">
          <a href="tel:+918015111046" className="font-semibold text-gray-800 hover:text-orange-500 transition-colors text-sm w-full md:w-auto text-center md:text-left flex items-center justify-center md:justify-start">
            <Phone className="text-green-600 mr-1" size={20} />Call: +91 801 511 1046
          </a>
          <a href="https://wa.me/918015111046" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-green-600 hover:text-green-700 text-sm font-semibold w-full md:w-auto">
            <MessageCircle size={18} className="mr-1" /> WhatsApp
          </a>
        </div>
        <button onClick={() => setVisible(false)} className="ml-4 p-1 rounded hover:bg-gray-100 transition-colors">
          <X size={20} className="text-gray-500" />
        </button>
      </div>
      <style>{`
        @keyframes popup-bounce {
          0% { transform: translateY(100%); opacity: 0; }
          60% { transform: translateY(-20px); opacity: 1; }
          80% { transform: translateY(10px); }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-popup-bounce {
          animation: popup-bounce 0.7s cubic-bezier(0.68,-0.55,0.27,1.55);
        }
      `}</style>
    </div>
  );
}

export default ContactPopup; 