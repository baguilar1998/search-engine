import React, {Component} from 'react';
import './NavBar.scss';
import Logo from '../../../assets/fakenews.png';
class NavBar extends Component {
    /*constructor(props) {
        super(props);
    }*/

    render() {
        return(
            <div className="NavBar-container">
                <div className="NavBar-logo">
                    <img src={Logo} alt='fakenews-logo'/>
                </div>
            </div>
        );
    }
}
export default NavBar;