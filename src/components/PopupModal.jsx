import React from 'react';

const PopupModal = ({ isOpen, onClose, image }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 z-10 text-4xl font-bold text-gray-700 hover:text-black focus:outline-none bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        
        {/* Image */}
        <img 
          src={image} 
          alt="Popup" 
          className="w-full h-full object-contain p-8" 
        />
      </div>
    </div>
  );
};

export default PopupModal;
