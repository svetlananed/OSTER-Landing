import { X, Menu, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { links } from "../data/Links";
import { NavLink } from "react-router-dom";

function BurgerBtn () {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [accordionOpen, setAccordionOpen] = useState(null);
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

            {/* Mobile menu */}

            <nav
                className={`fixed transition-all duration-300 ease-in-out 
                ${isMenuOpen ? "opacity-100 visible overflow-y-auto" : "opacity-0 invisible"}`}
            >
                <div>
                    {links.map((link) => 
                        link.dropdown ? (
                            <div key={link.id}>
                                <NavLink
                                    to={`${link.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setAccordionOpen(accordionOpen === link.id ? null : link.id);
                                    }}
                                >
                                    <span 
                                        className={`
                                            ${accordionOpen === link.id ? "text-red-200" : ""
                                            }
                                        `}
                                    >
                                        {link.name}
                                        <ChevronDown 
                                            size={20}
                                        />
                                    </span>
                                </NavLink>

                                {/* Dropdown */}
                                <div 
                                    className={`w-full overflow-hidden duration-300 ease-in-out 
                                        ${accordionOpen === link.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                                >
                                    <ul>
                                        <hr className="border-t border-white/10"/>
                                        {link.dropdown.map((item) => (
                                            <li key={item.id}>
                                                <NavLink
                                                    to={`/${link.id}/${item.id}`}
                                                    onClick={() => setMenuOpen(false)}
                                                >
                                                    {item.name}
                                                </NavLink>
                                                <hr className="border-t border-white/10"/>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <NavLink
                                key={link.id}
                                to={link.id === "home" ? "/" : `/${link.id}`}
                                className={({ isActive}) =>
                                    isActive ? "text-red-400" : "hover:text-red-300"}>

                            </NavLink>
                        ))}
                </div>

            </nav>
        </>
    )
}

export default BurgerBtn;