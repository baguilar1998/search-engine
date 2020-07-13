import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Loading from '../Loading/Loading';
import fakenewslogo from '../../assets/fakenews.png';
import './MainPage.scss';

const MainPage = (props) => {
    const { history } = props;
    const [loading, setLoading] = useState(false);
    const isNavbar = false;

    return !loading ? (   
        <div className="MainPage-container">
            <div className="MainPage-header">
                <div className="MainPage-imageHeader">
                    <img className="MainPage-logo" src={fakenewslogo} alt='fakenews-logo' />
                </div>
            </div>
            <div className="MainPage-Body">
                <SearchForm searchInput={''} isNavbar={isNavbar} history={history} setLoading={setLoading} />
            </div>
            <div className="MainPage-Footer">
                <span>
                    Created By <a href='https://github.com/baguilar1998'>Brian Aguilar</a>
                </span>
            </div>
        </div>
    ):
    (
        <Loading/>
    );

}

export default MainPage;