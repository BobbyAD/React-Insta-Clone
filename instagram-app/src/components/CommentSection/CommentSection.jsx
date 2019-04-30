import React from 'react';
import PropTypes from 'prop-types';
import Comments from './Comments';
import './CommentSection.scss';

const CommentSection = props => {
    return(
        <div className="comment-section">
            {props.comments.map(element => (
                <Comments comment={element} key={element.text} />
            ))}
        </div>
    )
}

CommentSection.propTypes = {
    comments: PropTypes.array
};

export default CommentSection;