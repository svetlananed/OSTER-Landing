import { X, Menu } from "lucide-react";
import { useEffect, useState } from "react";

function BurgerBtn ({ isMenuOpen, setMenuOpen, setAccordionOpen }) {
    
    const [scrollPosition, setScrollPosition] = useState(0);

    return (
        <>
            {/* Burger Button */}

            <button 
                className="relative w-13 h-13 ml-auto flex items-center justify-center"
                onClick={() => {
                    const newState = !isMenuOpen;
                    setMenuOpen(newState);
                    if (!newState) setAccordionOpen(null);
                }}>
                <Menu 
                    className={`absolute inset-0 m-auto transition-all duration-300 ${
                        isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                    }`} 
                />
                <X 
                    className={`absolute inset-0 m-auto transition-all duration-300 ${
                        isMenuOpen ? "opacity-100 rotate-180" : "opacity-0 rotate-90"
                    }`}
                />
            </button>
        </>
    )
}

export default BurgerBtn;