import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from './Components/Image';
import User from './Components/User';
import CommentSection from '../CommentSection/CommentSection';
import InteractionStats from './Components/InteractionStats';
import CommentField from './Components/CommentField';
// import './PostContainer.scss';

const PostContainerDiv = styled.div`
    font-family: 'Roboto', sans-serif;
`

const TimestampDiv = styled.div`
    color: grey;
    font-size: 0.8rem;
    margin: 10px;
`

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
            username: localStorage.getItem('username'),
            text: comment
        }
        this.setState({
            comments: [...this.state.comments, newComment]
        })
    }

    addLike = event => {
        event.preventDefault();
        this.setState({
            likes: (this.state.likes+1)
        })
    }

    render() {
        return(
            <PostContainerDiv>
                <User name={this.props.post.username} thumb={this.props.post.thumbnailUrl}/>
                <Image img={this.props.post.imageUrl} />
                <InteractionStats likes={this.state.likes} addLike={this.addLike} />
                <CommentSection comments={this.state.comments} />
                <TimestampDiv>
                    {this.props.post.timestamp}
                </TimestampDiv>
                <CommentField addComment={this.addComment}/>
            </PostContainerDiv>
        )
    }
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        comments: PropTypes.arrayOf(PropTypes.object),
        likes: PropTypes.number,
        imageUrl: PropTypes.string,
        timestamp: PropTypes.string,
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string
    })
};

export default PostContainer;