import React from 'react';
import { BrowserRouter, Route, Switch, Routes, Link } from 'react-router-dom';
import Posts from './pages/Posts';
import About from './pages/About';
import Error from './pages/Error';
import PostDetails from './pages/PostDetails';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
                
            </div>
            <Routes>
                <Route path='/about' element={<About/>} />
                <Route path='/posts' element={<Posts />} />
                <Route path='/post-details/:id' element={<PostDetails />} />
                <Route path='*' element={<Error />} />

            </Routes>
        </BrowserRouter>
    );
};

export default App;