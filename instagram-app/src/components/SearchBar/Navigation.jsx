import React from 'react';
import styled from 'styled-components';

const StyledNavDiv = styled.div`
    margin: 0 10px;
`

const StyledIcon = styled.i`
    padding: 0 10px;
`

const Navigation = () => {
    return(
        <StyledNavDiv>
            <StyledIcon className="far fa-compass"></StyledIcon>
            <StyledIcon className="far fa-heart"></StyledIcon>
            <StyledIcon className="far fa-user"></StyledIcon>
        </StyledNavDiv>
    )
}

export default Navigation;