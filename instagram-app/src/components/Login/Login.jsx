import React from 'react';

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
            <div className="login">
                <form onSubmit={this.login}>
                    <input 
                        type="text"
                        name="username"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.onUpdate}
                    />
                    <input 
                        type="text"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.onUpdate}
                    />
                    <input 
                        type="submit"
                        value="submit"
                    />
                </form>
            </div>
        )
    }

}

export default Login;