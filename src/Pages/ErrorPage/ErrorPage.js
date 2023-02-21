import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className='text-center'>
                <div className=" flex gap-16 text-9xl font-bold text-red-500 mb-6">
                    <div className='-rotate-45 lg:scale-150'>4</div>
                    <div className='lg:scale-150'>0</div>
                    <div className='rotate-45 lg:scale-150'>4</div>
                </div>
                <h3 className="text-3xl my-2">
                    Oops! Something went wrong.
                </h3>
                <p className="text-sm my-2">
                    We're sorry, but there was an error loading the page you requested.
                </p>
                <p className="text-sm my-2">
                    Please try again later or contact support if the problem persists.
                </p>
                <Link to={`/`}>
                    <button className='bg-orange-600 px-8 py-2 rounded-lg mt-5 font-bold text-xl text-white hover:bg-[#333]'>Back To Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;