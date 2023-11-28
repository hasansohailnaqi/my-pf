import Image from 'next/image'
import Hero from './component/hero-section/Hero'
import Contact from './component/contact/Contact'
import Project from './component/project/Project'
import About from './component/about/About'
import Services from './component/Services/services'

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
