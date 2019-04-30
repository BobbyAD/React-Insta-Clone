import React from 'react';

const InteractionStats = props => {
    return(
        <div className="interaction-stats">
            <div className="interact-icons">
                <i className="far fa-heart"></i> 
                <i className="far fa-comment"></i>
            </div>
            <strong>{props.likes} likes</strong>
        </div>
    )
}

export default InteractionStats;