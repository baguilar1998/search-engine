import React from 'react';
import NavBar from './NavBar/NavBar';
import ResultsList from './ResultsList/ResultsList';
import './Results.scss';

const Results = (props) => {
    return(
        <div className="Results-container">
            <div className="Results-header">
                <NavBar />
            </div>
            <div className="Results-body">
                <ResultsList/>
            </div>
        </div>
    )
}

export default Results;