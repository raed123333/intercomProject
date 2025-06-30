import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import hero1 from '../assets/hero1.png'
import hero2 from '../assets/hero2.png'
import hero3 from '../assets/hero3.png'

const Hero = () => {
  const images = [hero1, hero2, hero3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bg-[#041527] text-white text-center py-16 '>
      <h1 className='text-6xl mt-[80px] font-serif'> The <span className='text-[#f2cc8b]' >Only</span> AI Customer
        <br /> service solution you need  </h1>
      <h2 className='mt-[30px] text-xl font-sans'>Resolve issues faster and boost customer satisfaction -all while reducing team workload- <br />
        With the only customer service solution you'll ever need </h2>
      <div className="lg:flex ml-6 gap-4 flex justify-center items-center mt-[40px]">
        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-full transition">
          Start free trial <FaArrowRight className="ml-2" />
        </button>
        <button className="flex items-center hover:bg-gray-200 text-white font-bold px-4 py-2 rounded-full transition border border-white">
          View Demo <FaArrowRight className="ml-2" />
        </button>
      </div>

      {/* 👇 UPDATED IMAGE SLIDER */}
      <div className="flex justify-center items-center mt-10">
        <img
          src={images[currentIndex]}
          alt={`hero${currentIndex + 1}`}
          className="w-[1000px] h-[400px] object-cover rounded-xl shadow-xl transition-all duration-700"
        />
      </div>

    </div>
  )
}

export default Hero
