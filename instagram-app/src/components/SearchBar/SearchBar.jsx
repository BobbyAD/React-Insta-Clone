import React from 'react';
import Logo from './Logo';
import SearchField from './SearchField';
import Navigation from './Navigation';

const SearchBar = props => {
    return (
        <div className="header-bar">
            <h1>Howdy</h1>
            <Logo />
            <SearchField />
            <Navigation />
        </div>
    )
}

export default SearchBar;