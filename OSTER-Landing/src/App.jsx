import { useState } from 'react'
import { Routes, Route, Router, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Tools from './pages/Tools';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Header from "./components/Header";
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange';

function App() {
  return (
    <>
      <div className="relative z-10">

        <Header />

        <main>
          <ScrollToTopOnRouteChange />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/projects" element={<Projects />} />
            <Route path='/blog' element={<Blog />} />
            <Route path="/tools" element={<Tools />} />
           
          </Routes>
        </main>
        
        <Footer />  
        <ScrollToTop />
        
      </div>
    </>
  )
}

export default App
