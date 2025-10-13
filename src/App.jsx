import gsap from "gsap" 
import { SplitText, ScrollTrigger } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
gsap.registerPlugin(ScrollTrigger, SplitText)


function App() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      
    </main>
  )
}

export default App
