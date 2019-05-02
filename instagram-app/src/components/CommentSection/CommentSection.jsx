import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Comments from './Comments';
// import './CommentSection.scss';

const CommentSectionDiv = styled.div`
    margin: 10px 10px 0;
    display: flex;
    flex-direction: column;
`

const CommentSection = props => {
    return(
        <CommentSectionDiv>
            {props.comments.map(element => (
                <Comments comment={element} key={element.text} />
            ))}
        </CommentSectionDiv>
    )
}

CommentSection.propTypes = {
    comments: PropTypes.array
};

export default CommentSection;