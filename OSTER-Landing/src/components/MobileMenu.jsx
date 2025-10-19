import { links } from "../data/Links";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import ContactBtn from "./ContactBtn";

function MobileMenu ({ isMenuOpen, setMenuOpen, accordionOpen, setAccordionOpen }) {
    
    return (
        <>
            <nav
                className={`lg:hidden fixed left-0 right-0 mx-auto bottom-0 bg-stone-950/95 transition-all duration-300 ease-in-out 
                    top-[50px] sm:top-[60px] 
                    max-w-[320px] 
                    sm:max-w-[640px]  
                    md:max-w-[768px]
                ${isMenuOpen ? "opacity-100 visible translate-y-0 overflow-y-auto" : "opacity-0 invisible -translate-y-5"}`}
            >
                <div className="flex flex-col py-4 w-full items-center">
                    {links.map((link) => 
                        link.dropdown ? (
                            <div key={link.id}
                                className="w-full"
                            >
                                <NavLink
                                    className=""
                                    to={`${link.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setAccordionOpen(accordionOpen === link.id ? null : link.id);
                                    }}
                                >
                                    <span 
                                        className={`flex flex-row gap-1 py-3 items-center justify-center uppercase
                                            ${accordionOpen === link.id ? "text-red-200" : ""
                                            }
                                        `}
                                    >
                                        {link.name}
                                        <ChevronDown 
                                            size={20}
                                            className={`
                                                ${accordionOpen === link.id ? "text-red-200" : "text-white"
                                            }`}
                                        />
                                    </span>
                                </NavLink>

                                {/* Dropdown */}
                                <div 
                                    className={`w-full overflow-hidden duration-300 ease-in-out  
                                        ${accordionOpen === link.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                                >
                                    <ul className="w-full">
                                        <hr className="border-t border-white/10"/>
                                        {link.dropdown.map((item) => (
                                            <li key={item.id}
                                                className="w-full">
                                                <NavLink
                                                    to={`/${link.id}/${item.id}`}
                                                    className="block w-full py-3 text-center"
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
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive}) =>
                                    `uppercase py-3
                                    ${isActive ? "text-red-400" : ""}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    <ContactBtn />
                </div>
            </nav>
        </>
    )
}
export default MobileMenu;