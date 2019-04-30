import React from 'react';
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

export default CommentSection;