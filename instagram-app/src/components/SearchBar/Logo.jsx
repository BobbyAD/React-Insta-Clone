import React from 'react';
import styled from 'styled-components';

const LogoDiv = styled.div`
    font-family: 'Satisfy';
    margin: 0 10px;
`

const StyledIcon = styled.i`
    padding-right: 10px;
    margin-right: 10px;
    border-right: 1px solid black;
`

const Logo = () => {
    return(
        <LogoDiv>
            <StyledIcon className="fas fa-camera-retro"></StyledIcon>
            <strong>Instagram</strong>
        </LogoDiv>
    )
}

export default Logo;