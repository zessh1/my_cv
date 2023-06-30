import './Works.scss'
import {Link} from "react-router-dom";

const Works = () => {
    return(
        <div className='work-component'>
            <div className='work-container'>
                <div className='image--square'>
                    <Link className='work-links' to='https://zessh1.github.io/shelter/pages/main/index.html'>
                        <img className='work-images' src={require('../../images/cozy-house.png')}/>
                        <p className='work-container-desc'>shelter for pets in boston</p>
                    </Link>
                </div>
                <div className='image--square'>
                    <Link className='work-links' to='https://zessh1.github.io/books-shop/book.html'>
                        <img className='work-images' src={require('../../images/book-shop.PNG')}/>
                        <p className='work-container-desc'>Online Shop For Books</p>
                    </Link>
                </div>
                <div className='image--square'>
                    <Link className='work-links' to='https://zessh1.github.io/english-for-kids'>
                        <img className='work-images' src={require('../../images/english-for-kids.PNG')}/>
                        <p className='work-container-desc'>Game For Kids To Learn English</p>
                    </Link>
                </div>
                <div className='image--square'>
                    <Link className='work-links' to='https://zessh1.github.io/shelter/pages/main/index.html'>
                        <img className='work-images' src={require('../../images/star-match.PNG')}/>
                        <p className='work-container-desc'>A Game Where You Add Up Numbers To Get A Given Number Of Stars</p>
                    </Link>
                </div>
                <div className='image--square'>
                    <Link className='work-links' to='https://zessh1-monsters-rolodex.netlify.app/'>
                        <img className='work-images' src='https://robohash.org/1?set=set2&size=180x180'/>
                        <p className='work-container-desc'>Monsters Rolodex</p>
                    </Link>
                </div>
                <div className='image--square'>
                    <Link className='work-links' to='https://zessh1.github.io/tic-tac-toe/page/index.html'>
                        <img className='work-images' src={require('../../images/tic-tac-toe.PNG')}/>
                        <p className='work-container-desc'>Tic-Tac-Toe</p>
                    </Link>
                </div>

            </div>
        </div>

    )
}

export default Works;