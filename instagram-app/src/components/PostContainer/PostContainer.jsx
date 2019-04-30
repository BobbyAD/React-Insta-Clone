import React from 'react';
import Image from './Components/Image';
import User from './Components/User';
import CommentSection from '../CommentSection/CommentSection';
import InteractionStats from './Components/InteractionStats';
import CommentField from './Components/CommentField';
import './PostContainer.scss';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.post.comments,
            likes: this.props.post.likes
        }
    }

    addComment = (comment) => {
        const newComment = {
            username: "testUser",
            text: comment
        }
        this.setState({
            comments: [...this.state.comments, newComment]
        })
    }

    render() {
        return(
            <div className="post-container">
                <User name={this.props.post.username} thumb={this.props.post.thumbnailUrl}/>
                <Image img={this.props.post.imageUrl} />
                <InteractionStats likes={this.state.likes} />
                <CommentSection comments={this.state.comments} />
                <div className="timestamp">
                    {this.props.post.timestamp}
                </div>
                <CommentField addComment={this.addComment}/>
            </div>
        )
    }
}

export default PostContainer;