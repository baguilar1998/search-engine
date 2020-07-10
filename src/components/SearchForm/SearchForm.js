import React, { Component } from 'react';
import './SearchForm.scss';
import Axios from 'axios';


class SearchForm extends Component {

    constructor() {
        super();
        this.state = {
            searchInput: ''
        }
    }

    render() {
        const isNavbar = this.props.isNavbar;
        return isNavbar ?(
            <form onSubmit={this.search}>
                <input className="SearchForm-navbarSearchBar" type="text" onChange={this.updateSearchInput}/>
            </form>
        ):
        (
            <div className="SearchForm-container">
                <form onSubmit={this.search} className="SearchForm-form">
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

    /**
     * Updates the search input state every time a
     * user types in the input bar
     * @param event: the html tag that the event was 
     * performed on
     */
    updateSearchInput = (event) => {
        const newSearchInput = event.target.value;
        this.setState({
            searchInput: newSearchInput
        });
    }

    /**
     * Calls on the Google API and searches for
     * web pages based off the given user input
     * @param event: the html tag that the event was performed
     * on
     * @return a list of search results and redirects you
     * to the results page
     */
    search = (event) => {
        event.preventDefault();
        this.props.setLoading(true);
        // Set up the proper information needed for the
        // API call
        const searchInput = this.state.searchInput;
        const url = 'http://127.0.0.1:5000/api/search';
        Axios.get(url, {
            params: {
                query:searchInput
            }
        })
        .then(res => {
            // If input wasnt given, then do not perform the
            // rest of the actions leading to the results page
            const inputGiven = searchInput.length !==0;
            if(!inputGiven) {
                this.props.setLoading(false);
                return;
            }
            // Get the list of results from the API and send it to
            // the Results Page Component.
            let resultsList = res.data.items;
            const path = '/results/'+searchInput.replace(/\s/g,'-');
            this.props.setLoading(false);
            this.props.history.push({
                pathname: path,
                state: {
                    results:resultsList
                }
            });
        })
        .catch(err=>{
            console.log('An error has occured');
            this.props.setLoading(false);
        });
    }

}

export default SearchForm;