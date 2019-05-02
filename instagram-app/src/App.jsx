import React from 'react';
import styled from 'styled-components';
import PostsPage from './components/PostContainer/PostsPage'
import Login from './components/Login/Login';
import withAuthenticate from './components/Authentication/withAuthenticate';
// import './App.scss';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);
const AppDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

class App extends React.Component {
    render() {
        return (
            <AppDiv>
                <ComponentFromWithAuthenticate />
            </AppDiv>
        )
    }
}

export default App;
