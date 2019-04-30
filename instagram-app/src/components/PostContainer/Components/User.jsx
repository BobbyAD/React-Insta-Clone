import React from 'react';

const User = props => {
    return(
        <div className="op-username">
            <img src={props.thumb} alt="User Thumbnail"/>
            <h3>{props.name}</h3>
        </div>
    )
}

export default User;