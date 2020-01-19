import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import fakenewslogo from '../../assets/fakenews.png';
import './MainPage.scss';

const MainPage = (props) => {
    const { history } = props;
    return(
        <div className="MainPage-container">
            <div className="MainPage-header">
                <div className="MainPage-imageHeader">
                    <img className="MainPage-logo" src={fakenewslogo} alt='fakenews-logo' />
                </div>
            </div>
            <div className="MainPage-Body">
                <SearchForm history={history}/>
            </div>
            <div className="MainPage-Footer">
                <span>
                    Created By <a href='https://github.com/baguilar1998'>Brian Aguilar</a>
                </span>
            </div>
        </div>
    );
}

export default MainPage;