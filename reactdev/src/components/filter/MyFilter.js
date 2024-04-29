import React, { useRef, useState } from 'react';
import MySelectButton from '../button/MySelectButton';
import MyInput from '../form/MyInput';


const MyFilter = ({searchPosts}) => {

    const [searchWord, setSearchWord] = useState('')
    const searchQuery = useRef()

    const localSearchPosts = (event) => {
        setSearchWord(event.target.value)
        console.log(searchQuery.current.value);
        searchPosts(searchQuery.current.value)
    }

    return (
        <div>
            <MyInput  
                type="text" 
                ref={searchQuery}
                value={searchWord}
                placeholder="Enter serch word" 
                onChange={localSearchPosts}
            />
            <MySelectButton defaultTitle="Choose filter" options={[
                {title: 'a', href: '#1'},
                {title: 'b', href: '#2'},
                {title: 'c', href: '#3'},
            ]}></MySelectButton>
        </div>
    );
};

export default MyFilter;