import React from 'react';
// import SearchBar from './components/SearchBar/SearchBar';
// import PostContainer from './components/PostContainer/PostContainer';
// import Fuse from 'fuse.js';
import PostsPage from './components/PostContainer/PostsPage'
import Login from './components/Login/Login';
import withAuthenticate from './components/Authentication/withAuthenticate';
import './App.scss';

//Dummy Data
// import dummyData from './dummy-data';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">
                {/* <SearchBar search={this.search}/>
                <div className="post-list">
                    {this.state.posts.map(element => (
                        <PostContainer post={element} key={element.timestamp} />
                    ))}
                </div> */}
                <ComponentFromWithAuthenticate />
            </div>
        )
    }
}

export default App;
