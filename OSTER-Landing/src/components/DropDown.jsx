import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { links } from "../data/Links";
import { ChevronDown } from "lucide-react";

function DropDown ( { link }) {
    const [openDropdown, setOpenDropdown] = useState(null);

    return (
        <>
            <div className="relative"
                onMouseEnter={() => setOpenDropdown(link.id)}
                onMouseLeave={() => setOpenDropdown(null)}
            >   
                <NavLink
                    to={`${link.id}`}
                    className="flex h-full items-center gap-1 uppercase">
                        <span>{link.name}</span>
                        <ChevronDown size={20} />
                </NavLink>

                <div className={`absolute top-full left-0 w-60 bg-[#111111] transition-all duration-200 z-10
                    ${openDropdown === link.id ? "opacity-100 visible" : "opacity-0 invisible"}`}
                >
                    <ul className="flex flex-col px-5 py-2">
                        {link.dropdown.map((item, index) => (
                            <li key={item.id}
                                className="flex flex-col gap-2  ">
                                <NavLink
                                    to={`/${link.id}/${item.id}`}
                                    onClick={() => setOpenDropdown(null)}
                                    className={({ isActive }) =>
                                    `${isActive ? "text-red-400" : "hover:text-red-300"}
                                    py-2`}
                                >
                                    {item.name}
                                </NavLink>
                                {index !== link.dropdown.length - 1 && (
                                    <hr className="border-t border-white/10" />
                                )}
                                
                            </li>
                        ))}
                    </ul>

                </div>
                
            </div>
        </>
    )
}
export default DropDown;