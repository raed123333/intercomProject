import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='bg-[#041527] text-white text-center py-16 '>
        <h1 className='text-6xl mt-[80px] font-serif'> The <span className='text-[#f2cc8b]' >Only</span> AI Customer
        <br/> service solution you need  </h1>
        <h2 className='mt-[30px] text-xl font-sans'>Resolve issues faster and boost customer satisfaction -all while reducing team workload- <br />
        With the only customer service solution you'll ever need </h2>
                <div className=" lg:flex ml-6 gap-4 flex justify-center items-center mt-[40px]">
                  <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-full transition">
                    Start free trial <FaArrowRight className="ml-2" />
                  </button>
                  <button className="flex items-center hover:bg-gray-200 text-white font-bold px-4 py-2 rounded-full transition border border-white">
                    View Demo <FaArrowRight className="ml-2" />
                  </button>
                </div>
              
        
    </div>

  )
}

export default Hero