import React from 'react';

const Comments = props => {
    return(
        <div className="comment">
            <strong>{props.comment.username}</strong> {props.comment.text}
        </div>
    )
}

export default Comments;