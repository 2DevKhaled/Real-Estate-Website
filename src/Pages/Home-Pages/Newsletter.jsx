import React from 'react'
import cityImg from '../../assets/city-background.png'
export default function Newsletter() {
  return (
    <section className='max-w-screen-2xl mx-auto relative z-10 ' id='contact'>
        <div className='bg-[#fef6f3] p-8 px-16 flex flex-col md:flex-row items-center justify-between'>
            {/* text content */}
            <div className="md:w-1/2">
            <h2 className='text-3xl lg:text-4xl font-bold mb-4'>Find your <span className='text-orange-500 '>dream home</span> today!</h2>
            <p className='text-gray-700 mb-6'>Disover the perfect property tailored to your need and preferences with our expert guidance.</p>
            <a href="/" className='inline-flex items-center px-6 py-3 bg-white border transform hover:scale-105 duration-200 ease-in '>Contact Us <span className='text-lg ml-2'>👉🏻</span></a>
            </div>
            <div className=''>
              <img src={cityImg} alt="" className='w-full mx-auto'/>
            </div>
        </div>
    </section>
  )
}
