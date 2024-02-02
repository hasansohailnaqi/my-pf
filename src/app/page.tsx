import Image from 'next/image'

//import nav from './component/nav'
//import Hero from './component/Hero'
import Navbar from '../components/layout/Navbar'
import Contact from '../components/Contact'
//import Project from './component/Project'
import About from '../components/ui/AboutSection'
import HeroSection from '@/components/Hero'
import AboutSection from '../components/ui/AboutSection'
import Project from '@/components/Project'
//import Services from './component/services'


export default function Home() {
  return (
    <div>
     
     {/* <Navbar/>
       <Hero />
         <About />
         <Services />
         <Project />
         <Contact />       
  */}
                <HeroSection/>
                <AboutSection/>
                <Project/>
               <Contact />
               
    </div>

    )
    }
    
    
    




  

