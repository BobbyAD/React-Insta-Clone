import React from 'react';

class CommentField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }
    };

    onUpdate = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addComment(this.state.input);
        this.setState({ input: "" });
    }

    render() {
        return (
            <div className="commentInput">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="input"
                        value={this.state.input}
                        onChange={this.onUpdate}
                    />
                </form>
            </div>
        )
    }
}

export default CommentField;