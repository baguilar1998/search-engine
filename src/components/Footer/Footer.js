import React from 'react';
import leftArrow from '../../assets/left.png';
import rightArrow from '../../assets/right.png';
import './Footer.scss';

export default function Footer(props) {

    const pageNumberList = [1,2,3,4,5];
    
    const nextPage = () => {
        console.log('Next Page');
    }

    const previousPage = () => {
        console.log("Previous Page")
    }

    const navigateToPageByNumber = (event) => {
        const selectedPageNumber = event.target.getAttribute("value");
        console.log(selectedPageNumber);
    }

    const pageNumberTags = pageNumberList.map(pageNumber=>{
        return (
            <div className="Footer-pageNumberItem" key={pageNumber}>
                <a onClick={navigateToPageByNumber} value={pageNumber}>{pageNumber}</a>
            </div>
        )
    });

    return (
        <div className="Footer-container">
            <div className="Footer-button">
                <a onClick={previousPage}>
                    <img className="Footer-arrowImage" alt="previous" src={leftArrow} />
                </a>
            </div>
            <div className="Footer-pageNumbers">
                {pageNumberTags}
            </div>
            <div className="Footer-button">
                <a onClick={nextPage}>
                    <img className="Footer-arrowImage" alt="next" src={rightArrow} />
                </a>
            </div>
        </div>
    );
}