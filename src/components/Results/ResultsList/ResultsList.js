import React from 'react';
import './ResultsList.scss';

const ResultsList = (props) => {
    
    const results = props.results.map(result => {
        return {
            id: result.cacheId,
            link: result.link,
            title: result.title,
            snippet: result.snippet

        };
    });

    const resultsList = results.map(result => {
        return(
            <div className="ResultsList-resultItem" key={Math.random()}>
                <div className="ResultsList-resultItemHeader">
                    <a className="ResultsList-resultItemLinks" href={''+result.link}>
                        <span className="ResultsList-resultItemLink">{result.link}</span>
                        <span className="ResultsList-resultItemTitle">{result.title}</span>
                    </a>
                </div>
                <div className="ResultsList-resultItemBody">
                    <span className="ResultsList-snippet">{result.snippet}</span>
                </div>
            </div>
        );
    });

    return(
        <div className='ResultsList-container'>
            {resultsList}
        </div>
    );
}

export default ResultsList;