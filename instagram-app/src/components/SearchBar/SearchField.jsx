import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    text-align: center;
    padding: 4px 25px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: rgb(245,247,250);
`

class SearchField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        };
    }

    onUpdate = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.search(this.state.search);
        this.setState({ search: ""});
    }

    render() {
        return(
            <div className="search">
                <form onSubmit={this.handleSubmit}>
                    <StyledInput 
                        type="text"
                        name="search"
                        placeholder="🔎︎ Search"
                        value={this.state.search}
                        onChange={this.onUpdate}
                    />
                </form>
            </div>
        )
    }
}

export default SearchField;