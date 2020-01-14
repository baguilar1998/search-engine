import React, { Component } from 'react';
import './SearchForm.scss';

class SearchForm extends Component {

    constructor() {
        super();
        this.state = {
            searchInput: ''
        }
    }

    render() {
        return(
            <div className="SearchForm-container">
                <form className="SearchForm-form">
                    <input className="SearchForm-searchBar" type="text" onChange={this.updateSearchInput}/>
                    <div className="SearchForm-buttonContainer">
                        <div onClick={this.search} className="SearchForm-searchButton" >
                            <div className="SearchForm-searchButtonInner" >
                                <a className="SearchForm-searchButtonText">
                                    <span className="SearchForm-searchButtonSpan">Search</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    updateSearchInput = (event) => {
        const newSearchInput = event.target.value;
        this.setState({
            searchInput: newSearchInput
        });
        console.log(newSearchInput);
    }

    search = (event) => {
        event.preventDefault();
        console.log('This button works!');
    }

}

export default SearchForm;