import './About.scss'
import resume from "../../giorgi_mamulashvili_CV.pdf";
import {Link} from "react-router-dom";

function About() {
    return(
        <div className='about--container'>
            <div className='profile-img--container'>
                <img className='profile-img' src={require('../../images/profile.jpg')}/>
            </div>
            <div className='about--description'>
                <h3 className='about--titles'>Name</h3>
                <p className='title-desc'>Giorgi mamulashvili</p>
                <h3 className='about--titles'>Status</h3>
                <p className='title-desc'>student at information technologies </p>
                <h3 className='about--titles'>INTERESTS</h3>
                <p className='title-desc'>I am interested in learning Front-end Development and exploring JS frameworks and
                    libraries</p>
                <Link className='my-cv' to={resume}  target='_blank' download='giorgi_mamulashvili_CV'>My CV</Link>
            </div>
        </div>
    )
}

export default About;