import './About.scss'

function About() {
    return(
        <div className='about--container'>
            <div className='profile-img--container'>
                <img className='profile-img' src={require('../../images/profile.jpg')}/>
            </div>
        <div className='about--description'>
            <h3 className='name about--titles'>Name: <p>Giorgi Mamulashvili</p></h3>
            <h3 className='about--titles'>INTERESTS</h3>
            <p>I am interested in learning Front-end Development and exploring JS frameworks and
                libraries</p>
        </div>

        </div>
    )
}

export default About;