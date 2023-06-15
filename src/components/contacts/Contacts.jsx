import './Contacts.scss'
import {Link} from "react-router-dom";

const Contacts = () => {
    return(
        <div className='contacts'>
            <div className='contacts--part'>
                <h2>Location: </h2>
                <p>Georgia,Tbilisi</p>
            </div>
            <div className='contacts--part'>
                <h2>Email: </h2>
                <p>giorgi.mamulashvili2003@gmail.com</p>
            </div>
            <div className='contacts--part'>
                <h2>Phone Number: </h2>
                <p>+995 579 09 71 44</p>
            </div>
            <div className='contacts--part'>
                <h2>Linkdin:</h2>
                <Link to='https://www.linkedin.com/in/giorgi-mamulashvili-b8688a235/' target='popup'>giorgi mamulashvili</Link>
            </div>
        </div>
    )
}

export default Contacts