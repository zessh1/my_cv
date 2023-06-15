import './Works.scss'
import {Link} from "react-router-dom";


const Works = () => {
    return(
        <div className='work-container'>
            <div className='image--square'>

                <Link className='test' to='https://zessh1.github.io/shelter/pages/main/index.html'></Link>
                <img className='work-images' src={require('../../images/shelter.PNG')}/>
            </div>
            <div className='image--square'>
                <img className='work-images' src={require('../../images/book-shop.PNG')}/>
            </div>
            <div className='image--square'>
                <img className='work-images' src={require('../../images/english-for-kids.PNG')}/>
            </div>
            <div className='image--square'>
                <img className='work-images' src={require('../../images/star-match.PNG')}/>
            </div>
        </div>
    )
}

export default Works;