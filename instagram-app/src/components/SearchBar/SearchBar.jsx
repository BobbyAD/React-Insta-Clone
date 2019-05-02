import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import SearchField from './SearchField';
import Navigation from './Navigation';
// import './SearchBar.scss'

const HeaderBarDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 20px 0;
    font-size: 1.6rem;
    align-items: center;
`

const SearchBar = props => {
    return (
        <HeaderBarDiv>
            <Logo />
            <SearchField search={props.search}/>
            <Navigation />
        </HeaderBarDiv>
    )
}

export default SearchBar;