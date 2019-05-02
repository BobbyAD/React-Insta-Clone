import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 640px;
    margin-bottom: 10px;
`

const StrongStyled = styled.strong`
    font-weight: 700;
    margin-right: 5px;
`

const Comments = props => {
    return(
        <CommentDiv>
            <StrongStyled>{props.comment.username}</StrongStyled> {props.comment.text}
        </CommentDiv>
    )
}

Comments.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default Comments;