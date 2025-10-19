import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Triangle } from "lucide-react";

function DropDown ( { link }) {
    const [openDropdown, setOpenDropdown] = useState(null);

    return (
        <>
            <div className="relative group"
                onMouseEnter={() => setOpenDropdown(link.id)}
                onMouseLeave={() => setOpenDropdown(null)}
            >   
                <NavLink
                    to={`${link.id}`}
                    className="flex relative h-full items-center gap-2 uppercase dark:text-white dark:hover:text-white dark:hover:drop-shadow-[0_0_5px_#22d3ee,0_0_20px_#22d3ee,0_0_40px_#22d3ee] hover:text-slate-500">
                        <span>{link.name}</span>
                        <Triangle size={10} className="inline-block rotate-180 group-hover:fill-current transition-transform" />
                </NavLink>

                <div className={`absolute top-full left-0 w-50 2xl:w-60 transition-all z-10
                    ${openDropdown === link.id ? "opacity-100 visible" : "opacity-0 invisible"}`}
                >
                    <ul className="flex flex-col px-5 py-2 border-l-3 rounded-br-lg border-black dark:border-cyan-300 bg-white dark:bg-black">
                        {link.dropdown.map((item, index) => (
                            <li key={item.id}
                                className="flex flex-col gap-2  ">
                                <NavLink
                                    to={`/${link.id}/${item.id}`}
                                    onClick={() => setOpenDropdown(null)}
                                    className={({ isActive }) =>
                                    `${isActive ? "text-rose-500 dark:text-cyan-300" : "hover:text-slate-500 dark:hover:text-cyan-200"}
                                    py-2`}
                                >
                                    {item.name}
                                </NavLink>
                                {index !== link.dropdown.length - 1 && (
                                    <hr className="border-t border-black/10 dark:border-white/10" />
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