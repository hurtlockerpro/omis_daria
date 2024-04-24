import React from 'react';
import PostItem from './PostItem';


const PostList = ({posts}) => {

    return (
        <div>
            {
                posts.map((post, index) => <PostItem post={post} index={index} />)
            }

        </div>
    );
};

export default PostList;