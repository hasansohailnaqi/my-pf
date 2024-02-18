// import { Link } from 'lucide-react'
import React from 'react'
import Link from "next/link";
import Image from 'next/image';


const Project = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My projects
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      "My project built on Node.js and TypeScript demonstrates the synergy of these technologies
       offering a modern and type-safe development environment for building scalable and maintainable server-side applications"</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/2 sm:w-1/2 p-8">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://dummyimage.com/601x361"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2>
              Meta Solutions Corp
            </h2>
             <h1 className="title-font text-lg font-medium text-gray-900 mb-3  hover:bg-stone-transition-transform">
             <Link href="https://msc-photo-album-fhzfa8guy-msc-project.vercel.app"target="_blank">Photo-App</Link> 
            </h1>
            <p className="leading-relaxed">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 sm:w-1/2 p-8">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://dummyimage.com/601x361"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The Catalyzer
            </h1>
            <p className="leading-relaxed">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="lg:w-1/2 sm:w-1/2 p-8">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://dummyimage.com/603x363"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The 400 Blows
            </h1>
            <p className="leading-relaxed">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 sm:w-1/2 p-8">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://dummyimage.com/602x362"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Neptune
            </h1>
            <p className="leading-relaxed">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
          </div>
        </div>
      </div> */}
      {/* <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://dummyimage.com/605x365"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Holden Caulfield
            </h1>
            <p className="leading-relaxed">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
          </div>
        </div>
      </div> */}
      {/* <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://dummyimage.com/606x366"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Alper Kamu
            </h1>
            <p className="leading-relaxed">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</section>

    </div>
  )
}

export default Project





// import Image from 'next/image'
// //import { client } from '../lib/sanity';
// import Link from 'next/link';
// import { StaticImport } from 'next/dist/shared/lib/get-img-props';
// import { Key, ReactElement, JSXElementConstructor, ReactNode, PromiseLikeOfReactNode } from 'react';
// // async function getData() {
// //   const query = `*[_type == "project"]{
// //     _id,
// //     _createdAt,
// //     name,
// //     "slug": slug.current,
// //     "image": image.asset->url,
// //     url,
// //     content
// //   }`;
// //   const data = await client.fetch(query);
// //   return data;
// // }
// export const dynamic = "force-dynamic";
// export default async function Project() {
//   const projects= await getData()
//   return (
//     <div className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
    
//     <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>

//     <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">{projects.map((project: { slug: any; _id: Key | null | undefined; image: string | StaticImport; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | PromiseLikeOfReactNode | null | undefined; }) => (
//       <Link href={`/projects/${project.slug}`} key={project._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">
//         {project.image && (
//           <Image
//             src={project.image}
//             alt='project'
//             width={750}
//             height={300}
//             className="object-cover rounded-lg border border-gray-500"
//           />
//         )}
//         <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
//           {project.name}
//         </div>
//       </Link>
//     ))}
//     </div>




//   </div>
// )}







// // import React from 'react'

// // const Project = () => {
// //   return (
// //     <div>
// //       <section className="text-gray-600 body-font">
// //   <div className="container px-5 py-24 mx-auto">
// //     <div className="flex flex-col text-center w-full mb-20">
// //       <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
// //         My projects
// //       </h1>
// //       <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
// //       "My project, built on Node.js and TypeScript, demonstrates the synergy of these technologies,
// //        offering a modern and type-safe development environment for building scalable and maintainable server-side applications.
// //       </p>
// //     </div>
// //     <div className="flex flex-wrap -m-4">
// //       <div className="lg:w-1/3 sm:w-1/2 p-4">
// //         <div className="flex relative">
// //           <img
// //             alt="gallery"
// //             className="absolute inset-0 w-full h-full object-cover object-center"
// //             src="https://dummyimage.com/600x360"
// //           />
// //           <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
// //             <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
// //               THE SUBTITLE
// //             </h2>
// //             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
// //               Shooting Stars
// //             </h1>
// //             <p className="leading-relaxed">
// //               Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
// //               microdosing tousled waistcoat.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="lg:w-1/3 sm:w-1/2 p-4">
// //         <div className="flex relative">
// //           <img
// //             alt="gallery"
// //             className="absolute inset-0 w-full h-full object-cover object-center"
// //             src="https://dummyimage.com/601x361"
// //           />
// //           <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
// //             <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
// //               THE SUBTITLE
// //             </h2>
// //             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
// //               The Catalyzer
// //             </h1>
// //             <p className="leading-relaxed">
// //               Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
// //               microdosing tousled waistcoat.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="lg:w-1/3 sm:w-1/2 p-4">
// //         <div className="flex relative">
// //           <img
// //             alt="gallery"
// //             className="absolute inset-0 w-full h-full object-cover object-center"
// //             src="https://dummyimage.com/603x363"
// //           />
// //           <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
// //             <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
// //               THE SUBTITLE
// //             </h2>
// //             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
// //               The 400 Blows
// //             </h1>
// //             <p className="leading-relaxed">
// //               Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
// //               microdosing tousled waistcoat.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="lg:w-1/3 sm:w-1/2 p-4">
// //         <div className="flex relative">
// //           <img
// //             alt="gallery"
// //             className="absolute inset-0 w-full h-full object-cover object-center"
// //             src="https://dummyimage.com/602x362"
// //           />
// //           <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
// //             <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
// //               THE SUBTITLE
// //             </h2>
// //             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
// //               Neptune
// //             </h1>
// //             <p className="leading-relaxed">
// //               Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
// //               microdosing tousled waistcoat.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="lg:w-1/3 sm:w-1/2 p-4">
// //         <div className="flex relative">
// //           <img
// //             alt="gallery"
// //             className="absolute inset-0 w-full h-full object-cover object-center"
// //             src="https://dummyimage.com/605x365"
// //           />
// //           <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
// //             <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
// //               THE SUBTITLE
// //             </h2>
// //             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
// //               Holden Caulfield
// //             </h1>
// //             <p className="leading-relaxed">
// //               Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
// //               microdosing tousled waistcoat.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="lg:w-1/3 sm:w-1/2 p-4">
// //         <div className="flex relative">
// //           <img
// //             alt="gallery"
// //             className="absolute inset-0 w-full h-full object-cover object-center"
// //             src="https://dummyimage.com/606x366"
// //           />
// //           <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
// //             <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
// //               THE SUBTITLE
// //             </h2>
// //             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
// //               Alper Kamu
// //             </h1>
// //             <p className="leading-relaxed">
// //               Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
// //               microdosing tousled waistcoat.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   </div>
// // </section>

// //     </div>
// //   )
// // }

// // export default Project
