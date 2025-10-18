import { NavLink } from "react-router-dom";
import Navbar from './Navbar';
import ContactBtn from './ContactBtn';
import logo from '../assets/img/logo.png'
import BurgerBtn from "./Burger.Btn";
import MobileMenu from "./MobileMenu";
import { useEffect, useState, useRef } from "react";

function Header () {
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
            <header className="relative z-50">
                {/* Desktop menu */}
                <div 
                    className={`flex justify-between items-center mx-auto fixed top-0 left-0 right-0 h-15
                        max-w-[320px] px-[20px] 
                        sm:max-w-[640px] sm:px-[30px]
                        md:max-w-[768px]
                        lg:max-w-[1024px] lg:px-[40px]
                        xl:max-w-[1280px] xl:px-[50px]
                        2xl:max-w-[1536px] 2xl:px-[60px];
                        bg-blue-400 transition-transform duration-500 ease-in-out
                        ${isVisible ? "translate-y-0" : "-translate-y-full"}
                    `}>
                    <NavLink
                        to="/">
                        <img src={logo} alt="Logo" className="h-10"/>
                    </NavLink>
                    <nav className="hidden lg:flex gap-10 h-full items-center">
                        <Navbar />
                        <ContactBtn />
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