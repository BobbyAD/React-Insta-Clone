import React from 'react';
import Image from './Components/Image';
import User from './Components/User';
import CommentSection from '../CommentSection/CommentSection';
import InteractionStats from './Components/InteractionStats';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.post.comments,
            likes: this.props.post.likes
        }
    }

    addComment() {
        
    }

    render() {
        return(
            <div className="post-container">
                <User name={this.props.post.username} thumb={this.props.post.thumbnailUrl}/>
                <Image img={this.props.post.imageUrl} />
                <InteractionStats likes={this.state.likes} />
                <CommentSection comments={this.state.comments} />
                {this.props.post.timestamp}
            </div>
        )
    }
}

export default PostContainer;