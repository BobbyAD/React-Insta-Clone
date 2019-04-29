import React from 'react';
import Image from './Components/Image';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="post-container">
                <h1>lul</h1>
                <Image img={this.props.post.imageUrl}/>
            </div>
        )
    }
}

export default PostContainer;