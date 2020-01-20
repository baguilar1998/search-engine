import React from 'react';
import LoadingGIF from '../../assets/loading.gif';
import './Loading.scss';
const Loading = ()=> {
    return(
        <div className="Loading-container">
            <img src={LoadingGIF} alt='loading'/>
        </div>
    );
}

export default Loading;