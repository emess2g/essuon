
import { Route, Routes } from "react-router-dom";
import About from './components/About'
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Projects from "./components/Projects";
function App() {
 

  return (
    <div className="min-h-screen p- bg-[#0B0A09]">
    <div className=' max-w-2xl mx-auto p-4 ' id='man' >
    
        {/* <ScrollToTop /> */}
        <div className=" ">
          <div className="   ">
            <Navbar />        
          </div>
          <div className="">
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/about" element={<About />} />
              {/* <Route path="/projects" element={<Projects />} /> */}
              {/* <Route path="/blog" element={<Blog />} /> */}
              {/* <Route path="/contact" element={<Contact />} /> */}
              {/* <Route path="/getinvolve" element={<GetInvolve />} /> */}
            </Routes>
          </div>
          <Footer />
        </div>
       
    </div>  
    </div>
  )
}

export default App
