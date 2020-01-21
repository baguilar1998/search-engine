import React, { useState } from 'react';
import NavBar from './NavBar/NavBar';
import ResultsList from './ResultsList/ResultsList';
import Loading from '../Loading/Loading';
import './Results.scss';

const Results = (props) => {
    const { history } = props;
    const results = props.location.state.results;
    const [loading, setLoading] = useState(false);

    return !loading ?(
      <div className="Results-container">
            <div className="Results-header">
                <NavBar history={history} setLoading = {setLoading}/>
            </div>
            <div className="Results-body">
                <div className="Results-resultsList">
                    <ResultsList results={results}/>
                </div>
            </div>
        </div>
    ):
    (
        <Loading />
    );

}

export default Results;