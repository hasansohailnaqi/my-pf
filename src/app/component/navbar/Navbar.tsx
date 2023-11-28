//import { Anybody } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoCloudDownloadOutline } from 'react-icons/io5'; 


const Navbar = () => {
  return (
  <div>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      {/*image for logo*/}

    <Image src={require("../../../../public/logo/company.png")} alt="mSC3.0" 
    width={100} 
    height={80}
    />
      <span className="ml-3 text-xl">MSc3.0</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-blue-600">Home</Link>
      <Link href={"#About"} className="mr-5 hover:text-blue-600">About</Link>
      <Link href={"#"} className="mr-5 hover:text-blue-600">Contact</Link>
      <Link href={"#"} className="mr-5 hover:text-blue-600">Services</Link>
    </nav>
         
         {/*button edit*/}
         
         <a href="/cv/myCv.pdf" download="your-cv-file-name.pdf"> 
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
    >Download cv 
      <IoCloudDownloadOutline className="text-xl ml-2" />
      </button>
      </a>
  </div>
</header>
          </div>
  )
}

export default Navbar
