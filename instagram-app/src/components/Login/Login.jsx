import React from 'react';
import styled from 'styled-components';
import './Login.scss';

const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
`

const StyledForm = styled.form`
    padding: 30px 50px 35px;
    display: flex;
    flex-direction: column;
    border: 1px solid grey;
    border-radius: 10px;
`

const StyledH1 = styled.h1`
    align-self: center;
    font-size: 1.8rem;
    margin-bottom: 10px;
    font-family: 'Roboto', sans-serif;
`

const StyledInput = styled.input`
    margin: 10px;
    text-align: center;
    padding: 4px 25px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: rgb(245,247,250);
`

const SubmitButton = styled.input`
    margin: 10px;
    text-align: center;
    padding: 4px 25px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: rgb(245,247,250);
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
`

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    login = event => {
        event.preventDefault();
        localStorage.setItem('username', this.state.username);
        this.setState({
            username: '',
            password: ''
        })
        window.location.reload();
    }

    onUpdate = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <LoginDiv>
                <StyledForm onSubmit={this.login}>
                    <StyledH1>Login</StyledH1>
                    <StyledInput 
                        type="text"
                        name="username"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.onUpdate}
                    />
                    <StyledInput 
                        type="text"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.onUpdate}
                    />
                    <SubmitButton 
                        type="submit"
                        value="LOGIN"
                        className="submit-button"
                    />
                </StyledForm>
            </LoginDiv>
        )
    }

}

export default Login;