import Image from 'next/image'
import Hero from './component/Hero'
import Contact from './component/Contact'
import Project from './component/Project'
import About from './component/About'
import Services from './component/services'

export default function Home() {
  return (
    <div>
         <Hero />
         <About />
         <Services />
         <Project />
         <Contact /> 
    </div>
   
  )
}
