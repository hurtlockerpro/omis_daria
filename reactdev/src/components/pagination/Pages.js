import React from 'react';
import { getPagesCount, getPagesForView } from '../../utils/PageHelper'
import Pagination from 'react-bootstrap/Pagination';

const Pages = ({totalPostsCount, postsOnPage, active, setCurrentPage}) => {

    return (
        <div>
            <hr />
            {
                getPagesForView(getPagesCount(totalPostsCount, postsOnPage), active, setCurrentPage)
            }
            <hr />
        </div>
    );
};

export default Pages;