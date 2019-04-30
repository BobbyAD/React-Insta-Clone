import React from 'react';
import Logo from './Logo';
import SearchField from './SearchField';
import Navigation from './Navigation';
import './SearchBar.scss'

const SearchBar = props => {
    return (
        <div className="header-bar">
            <Logo />
            <SearchField />
            <Navigation />
        </div>
    )
}

export default SearchBar;