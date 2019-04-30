import React from 'react';

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
        this.setState({ input: ""});
    }

    render() {
        return(
            <div className="search">
                <form onSubmit={this.handleSubmit}>
                    <input 
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