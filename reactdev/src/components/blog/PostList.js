import React from 'react';
import PostItem from './PostItem';


const PostList = ({posts, deletePost, editPost}) => {

    return (
        <div>
            {
                posts.map((post, index) => <PostItem key={index} post={post} index={index} deletePost={deletePost} editPost={editPost} />)
            }

        </div>
    );
};

export default PostList;