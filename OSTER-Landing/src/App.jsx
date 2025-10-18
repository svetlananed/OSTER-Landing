import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
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

//Theme
const [theme, setTheme] = useState("dark");
const toggleTheme = () => {
  const newTheme = theme === "light" ? "dark" : "light";
  setTheme(newTheme);
  document.documentElement.classList.toggle("dark", newTheme === "dark");
  localStorage.setItem("theme", newTheme);
};

useEffect(() => {
  const storedTheme = localStorage.getItem("theme") || "dark";
  setTheme(storedTheme);
  document.documentElement.classList.toggle("dark", storedTheme === "dark");
},[]);

//Language
const [language, setLanguage] = useState("eng");
const toggleLanguage = () => {
  const newLanguage = language === "eng" ? "ukr" : "eng";
  setLanguage(newLanguage);
  document.documentElement.classList.toggle("eng", newLanguage === "eng");
  localStorage.setItem("language", newLanguage);
}
useEffect(() => {
  const storedLang = localStorage.getItem("language") || "eng";
  setLanguage(storedLang);
  document.documentElement.classList.toggle("eng", storedLang === "eng");
}, []);

  return (
    <>
      <div className="relative font-oxanium z-10">

        <Header 
          theme={theme} toggleTheme={toggleTheme} 
          language={language} toggleLanguage={toggleLanguage}
        />

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
