import React from 'react';
import leftArrow from '../../assets/left.png';
import rightArrow from '../../assets/right.png';
import './Footer.scss';

export default function Footer(props) {

    const nextPage = () => {
        console.log('Next Page');
    }

    const previousPage = () => {
        console.log("Previous Page")
    }

    const navigateToPageByNumber = (event) => {
        console.log(event);
    }

    return (
        <div className="Footer-container">
            <a onClick={previousPage}>
                <img className="Footer-arrowImage" alt="previous" src={leftArrow} />
            </a>
            <div className="Footer-pageNumbers">
                <a onClick={navigateToPageByNumber}>1</a>
            </div>
            <a onClick={nextPage}>
                <img className="Footer-arrowImage" alt="next" src={rightArrow} />
            </a>
        </div>
    );
}