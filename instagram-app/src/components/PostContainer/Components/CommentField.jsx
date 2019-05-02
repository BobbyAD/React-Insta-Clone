import React from 'react';
import styled from 'styled-components';

const CommentInput = styled.div`
    border-top: 1px solid grey;
`

const StyledInput = styled.input`
    border: none;
    padding-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
    width: 90%;
`

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
            <CommentInput>
                <form onSubmit={this.handleSubmit}>
                    <StyledInput 
                        type="text"
                        name="input"
                        placeholder="Add a comment..."
                        value={this.state.input}
                        onChange={this.onUpdate}
                    />
                </form>
            </CommentInput>
        )
    }
}

export default CommentField;