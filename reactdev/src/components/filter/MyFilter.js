import React, { useRef, useState } from 'react';
import MySelectButton from '../button/MySelectButton';
import MyInput from '../form/MyInput';


const MyFilter = ({searchPosts, setSelectedSort}) => {

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
                placeholder="Enter search word" 
                onChange={localSearchPosts}
            />
            <MySelectButton defaultTitle="Choose filter" options={[
                {title: 'title', href: '#1'},
                {title: 'body', href: '#2'},
            ]}
            setSelectedSort={setSelectedSort}
            ></MySelectButton>
        </div>
    );
};

export default MyFilter;