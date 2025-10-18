import { links } from "../data/Links";
import { NavLink } from "react-router-dom";
import logo from '../assets/img/logo.png'

function Footer () {
    const mainLinks = links.filter(link => !link.dropdown && link.id !== "home");
    const linksWithDropdowns = links.filter(
        link => link.dropdown && link.dropdown.length > 0);
    const allDropdowns = linksWithDropdowns.map(
        link => link.dropdown.map (
            item => ({id: item.id, name: item.name, parentId: link.id})
        )
    );
    const dropdownItems = allDropdowns.flat();

    return (
        <>
            <footer className="related section-spacing bg-blue-400 h-auto mx-auto flex flex-col items-center justify-center
                max-w-[320px] p-[20px] gap-[20px]
                sm:max-w-[640px] sm:p-[30px] sm:gap-[30px]
                md:max-w-[768px] 
                lg:max-w-[1024px] lg:p-[40px] lg:gap-[40px]
                xl:max-w-[1280px] xl:p-[50px] xl:gap-[50px]
                2xl:max-w-[1536px] 2xl:p-[60px] 2xl:gap-[20px]"
            >

                {/* Context */}
                <div className="flex flex-col w-full justify-between sm:flex-row text-center sm:text-left items-center">
                    
                    {/* Logo */}
                    <div className="hidden sm:flex">
                        <NavLink
                        to="/">
                            <img src={logo} className="h-10"/>
                        </NavLink>
                        
                    </div>

                    {/* Links to Main Categories */}
                    <div className="flex flex-row sm:flex-col flex-wrap justify-center">
                        {mainLinks.map((link, index) =>
                            !link.dropdown && link.id !== "home" ? (
                                <div>
                                    <NavLink
                                    key={link.id}
                                    to={`/${link.id}`}
                                    >
                                        {link.name}
                                    </NavLink>
                                    {index < mainLinks.length - 1 && (
                                        <span className="mx-2 sm:hidden">
                                            •
                                        </span>
                                    )}
                                </div>
                            ) : (null)
                        )}
                    </div>

                    <hr className="block sm:hidden border-t my-2 border-white/10 w-full" />

                    {/* Links to Subdomains */}
                    <div className="flex flex-row sm:flex-col flex-wrap justify-center">
                        {dropdownItems.map((item, index) =>
                            <div>
                                <NavLink
                                    to={`/${item.parentId}/${item.name}`}>
                                    {item.name}
                                </NavLink>
                                {index < dropdownItems.length - 1 && (
                                        <span className="mx-2 sm:hidden">
                                            •
                                        </span>
                                    )}
                            </div>)}
                    </div>

                    <hr className="block sm:hidden border-t my-2 border-white/10 w-full"/>

                    {/* Contacts */}
                    <ul>
                        <li>Address</li>
                        <li>Tel</li>
                        <li>Mail</li>
                    </ul>
                </div>

            </footer>

            {/* Bottom bar */}
                <div className="mx-auto
                    max-w-[320px]  
                    sm:max-w-[640px]  
                    md:max-w-[768px] 
                    lg:max-w-[1024px]  
                    xl:max-w-[1280px]  
                    2xl:max-w-[1536px] ">

                    {/* Line */}
                    <hr className="border-t border-white/10"/>

                    {/* Copyright */}
                    <div className="flex justify-center items-center text-sm gap-2  text-gray-500
                        p-[10px]
                        sm:p-[15px]
                        lg:p-[20px]
                        xl:p-[25px]
                        2xl:p-[30px]"
                    >
                        <span>
                            © 2025 
                            {new Date().getFullYear() > 2025 && ` - ${new Date().getFullYear()}`}
                        </span>
                        <span className="gap-2 w-1 h-1 rounded-full bg-gray-500 inline-block"/>
                        <span>
                            OSTER Tech
                        </span>
                    </div>
                </div>
            
        </>
    )
}

export default Footer