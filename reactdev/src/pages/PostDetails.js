import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const params = useParams()
    console.log(params);
    return (
        <div>
            Post details ... 
        </div>
    );
};

export default PostDetails;