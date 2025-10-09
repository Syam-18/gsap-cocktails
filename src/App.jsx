import gsap from "gsap" 
import { SplitText, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText)


function App() {
  return (
    <div className='flex-center h-[100vh]'>
      <h1 className="text-3xl">abc</h1>
    </div>
  )
}

export default App
