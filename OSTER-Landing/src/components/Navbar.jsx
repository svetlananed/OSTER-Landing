import { links } from "../data/Links";
import DropDown from "./DropDown";
import { NavLink } from "react-router-dom";

function Navbar () {
    return (
        <>
            <div className="flex gap-5 text-lg font-semibold">
                {links.map((link) =>
                    link.dropdown ? (
                        <DropDown
                            key={link.id}
                            link={link} 
                        />
                    ) : (   
                        <NavLink
                            key={link.id}
                            to={link.id === "home" ? "/" : `/${link.id}`}
                            className={({ isActive }) => 
                                `${isActive ? "dark:text-cyan-300" : ""
                                } h-full flex items-center uppercase cursor-pointer  dark:hover:text-white dark:hover:drop-shadow-[0_0_5px_#22d3ee,0_0_20px_#22d3ee,0_0_40px_#22d3ee] hover:text-slate-500`
                            }
                        >
                            {link.name}
                        </NavLink>
                    )
                )}
            </div>
        </>
    )
}

export default Navbar;