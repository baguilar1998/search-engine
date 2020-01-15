import React from 'react';
import NavBar from './NavBar/NavBar';
import './Results.scss';

const Results = (props) => {
    return(
        <div className="Results-container">
            <div className="Results-header">
                <NavBar />
            </div>
            Results Page!
        </div>
    )
}

export default Results;