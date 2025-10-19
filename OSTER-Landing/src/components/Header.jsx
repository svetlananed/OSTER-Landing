import { NavLink } from "react-router-dom";
import Navbar from './Navbar';
import ContactBtn from './ContactBtn';
import logodark from '../assets/img/logodark.png'
import logolight from '../assets/img/logolight.png'
import BurgerBtn from "./Burger.Btn";
import MobileMenu from "./MobileMenu";
import { useEffect, useState, useRef } from "react";
import toggleDay from "../assets/img/toggle-day.png";
import toggleNight from "../assets/img/toggle-night.png";

function Header ({ theme, toggleTheme, language, toggleLanguage }) {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [accordionOpen, setAccordionOpen] = useState(null);
    const [isVisible, setIsVisible] = useState(true);
    const prevScroll = useRef(0);

    useEffect(() => {
    const handleScroll = () => {
    const currentScroll = window.scrollY;
    const visible = currentScroll < prevScroll.current || currentScroll < 20;

    setIsVisible(visible);

    if (!visible && isMenuOpen) {
    setMenuOpen(false);
    setAccordionOpen(null);
    }

    prevScroll.current = currentScroll;
};

window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
}, [isMenuOpen]);

useEffect(() => {
const isMobile = window.innerWidth < 1024;

    if (isMenuOpen && isMobile) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
        setAccordionOpen(null);
    }
    }, [isMenuOpen]);

    return (
        <>
            <header className="relative z-50 ">
                {/* Desktop menu */}
                <div 
                    className={`flex justify-between items-center mx-auto fixed top-0 left-0 right-0 bg-white dark:bg-black
                        h-[50px] sm:h-[60px] lg:h-[70px] 2xl:h-[100px]
                        max-w-[320px] px-[20px] 
                        sm:max-w-[640px] sm:px-[30px]
                        md:max-w-[768px]
                        lg:max-w-[1024px] lg:px-[40px]
                        xl:max-w-[1280px] xl:px-[50px]
                        2xl:max-w-[1536px] 2xl:px-[60px];
                        ${isVisible ? "translate-y-0" : "-translate-y-full"}
                    `}>
                    <NavLink
                        to="/">
                        <img src={theme === "dark" ? logodark : logolight} alt="Logo" className="h-10 xl:h-16 2xl:h-20"/>
                    </NavLink>
                    <nav className="hidden lg:flex gap-5 cursor-pointer ">
                        <Navbar />

                        {/* Switch Language */}
                        <div className="flex items-center justify-center text-xs" 
                            onClick={toggleLanguage}>
                                {language === "eng" ? 
                                <span>ENG</span> : 
                                <span>UKR</span>}
                        </div>
                        
                        {/*Switch Theme*/}
                        <div className="flex items-center justify-center transition ease-in-out  " 
                            onClick={toggleTheme}>
                                {theme === "light" ? 
                                <img src={toggleNight} 
                                    className="h-4 2xl:h-6 "/> : 
                                <img src={toggleDay} 
                                    className="h-4 2xl:h-6 "/>}
                        </div>
                        <div className=" flex items-center justify-center">
                            <ContactBtn 
                                message={"Contact us"}
                                fontClass={"text-sm 2xl:text-base px-3 py-2 2xl:ml-2"}
                                />
                        </div>

                        
                    </nav>
                    <div className="flex lg:hidden">
                        <BurgerBtn 
                            isMenuOpen={isMenuOpen} 
                            setMenuOpen={setMenuOpen}
                            setAccordionOpen={setAccordionOpen}
                        />
                    </div>
                </div>
                {/* Mobile menu */}
                {isMenuOpen && (
                    <MobileMenu 
                        isMenuOpen={isMenuOpen}
                        setMenuOpen={setMenuOpen}
                        accordionOpen={accordionOpen}
                        setAccordionOpen={setAccordionOpen}
                    />
                )}
            </header>
        </>
    )
}

export default Header