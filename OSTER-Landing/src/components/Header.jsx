import { NavLink } from "react-router-dom";
import Navbar from './Navbar';
import ContactBtn from './ContactBtn';
import logo from '../assets/img/logo.png'

function Header () {
    return (
        <>
            <div className="header-container bg-blue-400">
                <NavLink
                    to="/">
                    <img src={logo} className="h-10"/>
                </NavLink>
                <nav>
                    <Navbar />
                    <ContactBtn />
                </nav>
            </div>
        </>
    )
}

export default Header