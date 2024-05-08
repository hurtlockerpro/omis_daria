import React, { useRef, useState } from 'react';
import MySelectButton from '../button/MySelectButton';
import MyInput from '../form/MyInput';


const MyFilter = ({filter, setFilter}) => {

    const searchQuery = useRef()

    return (
        <div>
            <MyInput  
                type="text" 
                ref={searchQuery}
                value={filter.searchWord}
                placeholder="Enter search word" 
                onChange={event => setFilter({...filter, searchWord:event.target.value})}
            />
            <MySelectButton defaultTitle="Choose filter" options={[
                {title: 'id', href: '#1'},
                {title: 'title', href: '#1'},
                {title: 'body', href: '#2'},
            ]}
            setFilter={setFilter}
            filter={filter}
            ></MySelectButton>
        </div>
    );
};

export default MyFilter;