import React, {Component} from 'react';
import './NavBar.scss';
import Logo from '../../../assets/fakenews.png';
class NavBar extends Component {
    /*constructor(props) {
        super(props);
    }*/

    state = ({
        searchInput:'',
        results: []
    });

    render() {
        return(
            <div className="NavBar-container">
                <div className="NavBar-logo">
                    <img className="NavBar-imgLogo" src={Logo} alt='fakenews-logo'/>
                </div>
                <div className="NavBar-search">
                <input className="NavBar-searchBar" type="text" onChange={this.updateSearchInput}/>
                </div>
            </div>
        );
    }

    updateSearchInput = (event) => {
        const input = event.target.value;
        this.setState({
            searchInput: input
        });
        console.log(input);
    }
}
export default NavBar;