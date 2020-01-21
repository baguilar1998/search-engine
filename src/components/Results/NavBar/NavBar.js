import React from 'react';
import SerachForm from '../../SearchForm/SearchForm';
import './NavBar.scss';
import Logo from '../../../assets/fakenews.png';

const NavBar = (props) =>{
    const { history } = props;
    const isNavbar = true;
    return(
        <div className="NavBar-container">
            <div className="NavBar-logo">
                <img className="NavBar-imgLogo" src={Logo} alt='fakenews-logo'/>
            </div>
            <div className="NavBar-search">
                <SerachForm history={history} setLoading={props.setLoading} isNavbar={isNavbar}/>
            </div>
        </div>
    );
}

export default NavBar;