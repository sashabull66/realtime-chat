import React from 'react';

const Loader = () => {
    return (
        <div className={'preloadContainer'}>
            <div className="lds-spinner">
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
            </div>
        </div>
    );
};

export default Loader;