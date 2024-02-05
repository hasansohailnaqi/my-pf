import { ModeToggle } from "@/components/ui/toggel-mode"
import { Link } from "lucide-react"
import React from "react"
import {
  AiOutlineGithub,  
  AiOutlineLinkedin,
} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © 2023 Hasan Sohail Naqi<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/Ajmalniz" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
         
          <a
            href="https://www.linkedin.com/in/front-end-developer-headless-cms-ai-blockchain/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
         <ModeToggle />
        </div>
      </div>
    </footer>
  )
}

export default Footer



// import React from 'react'
// import { FaYoutube } from "react-icons/fa";
// import Link from 'next/link';
// import Image from 'next/image';


// const Footer = () => {
//   return (
//     <div className="bg-blue-100">
//       <footer className="text-gray-600 body-font">
//   <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
//     <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
//     <Image src={require("../../../../public/logo/company.png")} alt="meta-solution" 
//     width={100} 
//     height={80}
//     />
//       <span className="ml-3 text-xl">Meta-Solution</span>
//     </a>
//     <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
//       © 2023 Meta-Solution —
//       <a
//         href="https://twitter.com/knyttneve"
//         className="text-gray-600 ml-1"
//         rel="noopener noreferrer"
//         target="_blank"
//       >
//         @Meta-Solution
//       </a>
//     </p>
//     <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
//       <Link
//       target='_blank'
//       href={"https://www.youtube.com/@itmatepakistan"}
//        className="text-gray-500">
//        < FaYoutube className="text-3xl hover:text-[#ff0000]"/>
//       </Link>
//     </span>
//   </div>
// </footer>

//     </div>
//   )
// }

// export default Footer
