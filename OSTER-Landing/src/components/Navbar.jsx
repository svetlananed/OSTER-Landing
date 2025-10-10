import { links } from "../data/Links";
import DropDown from "./DropDown";
import { NavLink } from "react-router-dom";

function Navbar () {
    return (
        <>
            <div className="flex gap-5 ">
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
                                `${isActive ? "text-red-400" : "hover:text-red-300"
                                } h-full flex items-center  uppercase cursor-pointer`
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