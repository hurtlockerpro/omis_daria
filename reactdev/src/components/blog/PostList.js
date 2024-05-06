import React from 'react';
import PostItem from './PostItem';
import Alert from 'react-bootstrap/Alert';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css'


const PostList = ({posts, deletePost, editPost}) => {

    if (posts.length == 0){
        return <Alert variant='info' className='m-2'>No items found</Alert>
    }

    return (
        <div>
            <TransitionGroup className="posts">
            {
                posts.map((post, index) => 
                <CSSTransition
                key={index*index}
                timeout={500}
                classNames="postItem">
                    <PostItem key={index} post={post} index={index} deletePost={deletePost} editPost={editPost} />
                </CSSTransition>
                )

            }
            </TransitionGroup>
        </div>
    );
};

export default PostList;