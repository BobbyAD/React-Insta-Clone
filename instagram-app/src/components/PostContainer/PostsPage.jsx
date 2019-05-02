import React from 'react';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import Fuse from 'fuse.js';

import dummyData from '../../dummy-data';

class PostsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        this.setState({
            posts: dummyData
        })
    }

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

    render () {
        return (
            <>
                <SearchBar search={this.search}/>
                <div className="post-list">
                    {this.state.posts.map(element => (
                        <PostContainer post={element} key={element.timestamp} />
                    ))}
                </div>
            </>
        )
    }
}

export default PostsPage;