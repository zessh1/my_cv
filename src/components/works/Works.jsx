import './Works.scss'
import {Link} from "react-router-dom";


const Works = () => {
    return(
        <div className='work-container'>
            <div className='image--square'>
                <Link className='work-links' to='https://zessh1.github.io/shelter/pages/main/index.html'>
                    <img className='work-images' src={require('../../images/shelter.PNG')}/>
                </Link>
                <p className='test'>sss</p>
            </div>
            <div className='image--square'>
                <Link className='work-links' to='https://zessh1.github.io/shelter/pages/main/index.html'>
                    <img className='work-images' src={require('../../images/book-shop.PNG')}/>
                </Link>
            </div>
            <div className='image--square'>
                <Link className='work-links' to='https://zessh1.github.io/shelter/pages/main/index.html'>
                    <img className='work-images' src={require('../../images/english-for-kids.PNG')}/>
                </Link>
            </div>
            <div className='image--square'>
                <Link className='work-links' to='https://zessh1.github.io/shelter/pages/main/index.html'>
                    <img className='work-images' src={require('../../images/star-match.PNG')}/>
                </Link>
            </div>
        </div>
    )
}

export default Works;