
import './App.css';

import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";


function App() {
  return (
    <div className='app--container'>

        <BrowserRouter>
            <Navbar></Navbar>
            <div className='app-content--container'>
                <Routes>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contacts' element={<Contacts/>}/>
                    <Route path='/skills' element={<Skills/>}/>
                    <Route path='/works' element={<Works/>}/>
                </Routes>
            </div>


        </BrowserRouter>
    </div>
  );
}

export default App;
