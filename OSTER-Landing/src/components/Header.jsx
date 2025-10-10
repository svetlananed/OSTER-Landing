import { NavLink } from "react-router-dom";
import Navbar from './Navbar';
import ContactBtn from './ContactBtn';
import logo from '../assets/img/logo.png'
import BurgerBtn from "./Burger.Btn";

function Header () {
    return (
        <>
            <div className="header-container bg-blue-400 z-50">
                <NavLink
                    to="/">
                    <img src={logo} alt="Logo" className="h-10"/>
                </NavLink>
                <nav className="hidden lg:flex gap-10 h-full">
                    <Navbar />
                    <ContactBtn className="flex h-full items-center"/>
                </nav>
                <div className="flex lg:hidden">
                    <BurgerBtn />
                </div>
            </div>
        </>
    )
}

export default Header