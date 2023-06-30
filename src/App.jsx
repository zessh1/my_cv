
import './App.css';

import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";

function closeBurgerMenu() {
    let openBurgerIcon = document.querySelector('.burger-component')
    openBurgerIcon.classList.remove('active')
}

function App() {
  return (
    <div className='app--container'>
        <BrowserRouter>
            <Navbar></Navbar>
            <div className='app-content--container'>
                <Routes>
                    <Route path='/' element={<About/>}/>
                    <Route path='/contacts' element={<Contacts/>}/>
                    <Route path='/skills' element={<Skills/>}/>
                    <Route path='/works' element={<Works/>}/>
                </Routes>
            </div>
            <div className='burger-component'>
                <div className='burger-nav'>
                    <Link className='burger-nav-link' to='/'>About</Link>
                    <Link className='burger-nav-link' to='/contacts'>Contacts</Link>
                    <Link className='burger-nav-link' to='/skills'>Skills</Link>
                    <Link className='burger-nav-link' to='/works'>Works</Link>
                </div>
                <img onClick={closeBurgerMenu} className='burger-icon' src={require('../src/images/burger-icon.png')}/>
            </div>


        </BrowserRouter>
    </div>
  );
}

export default App;
