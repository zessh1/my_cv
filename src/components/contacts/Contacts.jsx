import './Contacts.scss'
import {Link} from "react-router-dom";

const Contacts = () => {
    return(
        <div className='contacts-container'>
            <div>
                <div className='contacts--part'>
                    <h2 className='contacts-title'>Location: </h2>
                    <p className='contacts-desc'>Georgia,Tbilisi</p>
                </div>
                <div className='contacts--part'>
                    <h2 className='contacts-title'>Email: </h2>
                    <p className='contacts-desc'>giorgi.mamulashvili2003@gmail.com</p>
                </div>
                <div className='contacts--part'>
                    <h2 className='contacts-title'>Phone Number: </h2>
                    <p className='contacts-desc'>+995 579 09 71 44</p>
                </div>
                <div className='contacts--part'>
                    <h2 className='contacts-title'>Linkdin:</h2>
                    <Link className='linkedin-link' to='https://www.linkedin.com/in/giorgi-mamulashvili-b8688a235/' target='popup'>giorgi mamulashvili</Link>
                </div>
            </div>
        </div>

    )
}

export default Contacts