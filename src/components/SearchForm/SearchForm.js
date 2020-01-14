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
            <div className="SearchForm-formContainer">
                <form className="SearchForm-form">
                    <input className="SearchForm-searchBar" type="text" onChange={this.updateSearchInput}/>
                    <button className="SearchForm-searchButton">Search</button>
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

}

export default SearchForm;