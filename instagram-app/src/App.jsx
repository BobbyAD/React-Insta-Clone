import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import Fuse from 'fuse.js';
import './App.scss';

//Dummy Data
import dummyData from './dummy-data';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        this.setState({
            posts: dummyData
        })
    }

    // search = (input) => {
    //     var searchArray = this.state.posts.filter(element => {
    //         if (element.username.toLowerCase() === input.toLowerCase()) {
    //             return element;
    //         }
    //         else {
    //             return null;
    //         }
    //     })

    //     if (searchArray.length > 0) {
    //         this.setState({
    //             posts: searchArray
    //         })
    //     }

    //     else {
    //         this.setState({
    //             posts: dummyData
    //         })
    //         alert(`Could not find "${input}"`);
    //     }
    // }

    //Fuse.js
    search = (input) => {
        var options = {
            shouldSort: true,
            threshold: 0.2,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: [
              "username"
            ]
          };
        var fuse = new Fuse(dummyData, options); // "list" is the item array
        var result = fuse.search(input);

        if (result.length > 0) {
            this.setState({
                posts: result
            })
        }

        else {
            this.setState({
                posts: dummyData
            })
            alert(`Could not find "${input}"`);
        }
    }

    render() {
        return (
            <div className="App">
                <SearchBar search={this.search}/>
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
