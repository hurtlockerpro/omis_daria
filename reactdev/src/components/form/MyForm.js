import React, { useState } from 'react';
import MyInput from './MyInput';
import MyButton from '../MyButton/MyButton';

const MyForm = () => {

    const [post, setPost] = useState({title: '', description: ''})

    /*
    function createPost(){
        
        posts.push({title: 'sdfbdf', description: 'sdfgdfg'})
        setPosts(posts)
    }
    */

    return (
        <form>
            <MyInput 
                type="text"
                placeholder='Insert title' 
                value={post.title}
                onChange={event => setPost({...post, title: event.target.value })}
            />

            <MyInput 
                type="text"
                placeholder='Insert description'
                value={post.description}
                onChange={event => setPost({...post, description: event.target.value })}
            />

            <MyButton title="Save item" />
        </form>
    );
};

export default MyForm;