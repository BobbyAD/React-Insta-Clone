import React from 'react';
import styled from 'styled-components';

const StatsDiv = styled.div`
    margin: 10px;
`

const InteractIcons = styled.div`
    display: flex;
`

const StyledIcons = styled.i`
    margin-right: 15px;
    margin-bottom: 10px;
    font-size: 1.6rem;
`

const StyledStrong = styled.strong`
    font-weight: 700;
`

const InteractionStats = props => {
    return(
        <StatsDiv>
            <InteractIcons>
                <div onClick={props.addLike}><StyledIcons className="far fa-heart"></StyledIcons></div>
                <StyledIcons className="far fa-comment"></StyledIcons>
            </InteractIcons>
            <StyledStrong>{props.likes} likes</StyledStrong>
        </StatsDiv>
    )
}

export default InteractionStats;