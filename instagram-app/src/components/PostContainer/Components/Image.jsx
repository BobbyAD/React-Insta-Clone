import React from 'react';

const Image = (props) => {
    return(
        <div className="img">
            <img src={props.img}/>
        </div>
    )
}

export default Image;