import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({title}) => {
    return (
        <div className='flex flex-start w-10/12 mx-auto py-3 text-xl font-semibold'>
            <Link className='text-orange-600' to={`/`}>Home</Link>/{title}
        </div>
    );
};

export default Pagination;