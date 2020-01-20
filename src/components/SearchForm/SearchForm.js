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
        return(
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

    updateSearchInput = (event) => {
        const newSearchInput = event.target.value;
        this.setState({
            searchInput: newSearchInput
        });
    }

    search = (event) => {
        event.preventDefault();
        const searchInput = this.state.searchInput;
        const url = 'http://127.0.0.1:5000/api/search';
        this.props.setLoading(true);
        Axios.get(url, {
            params: {
                query:searchInput
            }
        })
        .then(res => {
            let resultsList = res.data.items;
            this.props.history.push({
                pathname:'/results',
                state: {
                    results:resultsList
                }
            });
            this.props.setLoading(false);
        })
        .catch(err=>{
            console.log('Server is down');
            this.props.setLoading(false);
        });
    }

}

export default SearchForm;