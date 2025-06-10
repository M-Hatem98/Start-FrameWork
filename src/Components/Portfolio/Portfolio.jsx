import React, { useState } from 'react';
import port1 from '../../assets/port1.png';
import port2 from '../../assets/port2.png';
import port3 from '../../assets/port3.png';

const images = [port1, port2, port3, port1, port2, port3];

export default function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div className="portfolio mt-[120px]">
        <div className="container flex flex-col justify-center items-center mx-auto">
          <h1 className="text-6xl font-bold text-[#2C3E50] uppercase my-8">portfolio component</h1>

          <div className="shape my-6 flex justify-between items-center">
            <div className="line h-1 w-16 bg-[#2C3E50] mx-3"></div>
            <i className="fa-solid fa-star text-[#2C3E50]"></i>
            <div className="line h-1 w-16 bg-[#2C3E50] mx-3"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 pb-8">
            {images.map((img, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
                onClick={() => openModal(img)}
              >
                <img src={img} alt={`Portfolio ${index}`} className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-[#1ABC9C] bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-90 transition duration-300">
                  <i className="fas fa-plus text-white text-9xl"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-[#0000ff22] bg-opacity-20 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-3xl max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt="Selected" className="w-full h-auto rounded" />
          </div>
        </div>
      )}
    </>
  );
}

