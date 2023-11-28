"use client";
import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect';


const Hero = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        i am
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: [ "Web Developer", "UI/UX Designer","Real Estate Consultant"],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <p className="mb-8 leading-relaxed">
      Meet the visionary behind Hi Meta Solutions, Hasan Sohail Naqi. 
      As the CEO, Hasan brings a wealth of experience and a passion for transformative technology. 
      His leadership is rooted in a commitment to pushing boundaries and inspiring the Hi Meta team to exceed expectations.
      </p>
      
      
      <div className="flex lg:flex-row md:flex-col text-gray-300">
        <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 h-6"
            viewBox="0 0 512 512"
          >
            <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
          </svg>
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="text-xs text-gray-400 mb-1">GET IT ON</span>
            <span className="title-font font-medium">Google Play</span>
          </span>
        </button>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded mx-auto w-[18rem]"
        alt="hero"
        width={100}
        height={80}
        src={require('../../../public/img/65.jpg')}
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero
