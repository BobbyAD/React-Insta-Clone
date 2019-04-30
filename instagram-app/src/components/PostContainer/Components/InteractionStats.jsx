import React from 'react';

const InteractionStats = props => {
    return(
        <div className="interaction-stats">
            <div className="interact-icons">
                <i class="far fa-heart"></i> 
                <i class="far fa-comment"></i>
            </div>
            <strong>{props.likes} likes</strong>
        </div>
    )
}

export default InteractionStats;