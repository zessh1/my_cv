import './Navbar.scss'
import {BrowserRouter, Link, Outlet} from "react-router-dom";



function Navbar() {
return(
    <div className='nav-bar'>

            <Link className='nav-bar--links' to='/about'>About</Link>
            <Link className='nav-bar--links' to='/contacts'>Contacts</Link>
            <Link className='nav-bar--links' to='/skills'>Skills</Link>
            <Link className='nav-bar--links' to='/works'>Works</Link>

    </div>
)
}


export default Navbar;