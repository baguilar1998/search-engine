import React from 'react';
import NavBar from './NavBar/NavBar';
import ResultsList from './ResultsList/ResultsList';
import './Results.scss';

const Results = (props) => {
    const results = props.location.state.results;
    return(
        <div className="Results-container">
            <div className="Results-header">
                <NavBar />
            </div>
            <div className="Results-body">
                <div className="Results-resultsList">
                    <ResultsList results={results}/>
                </div>
            </div>
        </div>
    )
}

export default Results;