import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuthContext()
    const location = useLocation()

    if (loading) {
        return <div className='flex justify-center items-center min-h-[50vh]'>
            <span className='w-10 h-10 border-4 border-dashed border-orange-600 rounded-full animate-spin duration-500 block'></span>
            <span className='w-8 h-8 border-4 border-dashed border-orange-600 rounded-full animate-spin duration-500 block'></span>
            <span className='w-6 h-6 border-4 border-dashed border-orange-600 rounded-full animate-spin duration-500 block'></span>
            <p className='text-xl font-bold ml-4'> Loading...</p>
        </div>
    }

    if (user && user.uid) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
}

export default PrivateRoute
