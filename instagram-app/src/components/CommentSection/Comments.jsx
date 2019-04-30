import React from 'react';
import PropTypes from 'prop-types';

const Comments = props => {
    return(
        <div className="comment">
            <strong>{props.comment.username}</strong> {props.comment.text}
        </div>
    )
}

Comments.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default Comments;