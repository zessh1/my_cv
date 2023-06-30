import './Navbar.scss'
import { Link} from "react-router-dom";


function openBurgerMenu() {
    let closeBurgerIcon = document.querySelector('.burger-component')
        closeBurgerIcon.classList.add('active')

}

function Navbar() {

    return(
        <div className='nav-bar-container'>
            <div className='nav-bar'>
                <Link className='nav-bar--links' to='/'>About</Link>
                <Link className='nav-bar--links' to='/contacts'>Contacts</Link>
                <Link className='nav-bar--links' to='/skills'>Skills</Link>
                <Link className='nav-bar--links' to='/works'>Works</Link>
            </div>
            <img onClick={openBurgerMenu} className='burger-icon' src={require('../../images/burger-icon.png')}/>
        </div>

    )
}



export default Navbar;