import React from 'react';
import axios from 'axios'

class PostService {
    static async getServiceResponse(limit = 10, page = 1){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params: {
                _limit: limit,
                _page: page
            }
        })
        console.log('HEADER', response.headers.get('X-Total-Count'));
        return response
    }
};

export default PostService;