import React from 'react';
import styled from 'styled-components';

const OPUsername = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const StyledThumb = styled.img`
    width: 36px;
    height: auto;
    border-radius: 100%;
    margin: 15px;
`

const User = props => {
    return(
        <OPUsername>
            <StyledThumb src={props.thumb} alt="User Thumbnail"/>
            <h3>{props.name}</h3>
        </OPUsername>
    )
}

export default User;