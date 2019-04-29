import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.scss';

//Dummy Data
import dummyData from './dummy-data';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: dummyData,
        }
    }

    render() {
        return (
            <div className="App">
                <SearchBar />
                <div className="post-list">
                    {this.state.posts.map(element => (
                        <PostContainer post={element} key={element.timestamp} />
                    ))}
                </div>
            </div>
        )
    }
}

export default App;
