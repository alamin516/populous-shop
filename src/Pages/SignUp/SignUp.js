import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const { user, createUser, updateUserProfile, loading, setLoading } = useAuthContext()
    const navigate = useNavigate();
    const location = useLocation()
    const [error, setError] = useState('')

    const from = location?.state?.from.pathname || '/'

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        setError('')
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const paasword = form.password.value

        createUser(email, paasword)
            .then(res => {
                const user = res.user;
                console.log(user)
                updateUserProfile(name)
                    .then(res => {
                        console.log(res)
                        setLoading(false)
                        navigate(from, { replace: true })
                    })  
                    .catch(error => {
                        setError(error.message)
                        setLoading(false)
                      })
  
            })
            .catch(error => {
                setError(error.message)
                setLoading(false)
              })



    }


    return (
        <>
            {user ? navigate('/') :
                <div className='lg:w-8/12 mx-auto lg:flex justify-between items-center min-h-[70vh]'>
                    <div className='px-6 lg:w-1/2'>
                        <figure>
                            <img src="images/signup.jpg" alt="signup" />
                        </figure>
                    </div>
                    <div className='px-6 lg:w-1/2'>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor='name' className='mb-2'>Name</label>
                                <input
                                    type="text"
                                    placeholder='Name'
                                    name='name'
                                    required
                                    className='w-full border border-1 outline-none rounded-lg px-4 py-2 mb-3'
                                />
                            </div>
                            <div>
                                <label htmlFor='email'>Email</label>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder='Email'
                                    required
                                    className='w-full border border-1 outline-none rounded-lg px-4 py-2 mb-3'
                                />
                            </div>
                            <div>
                                <label htmlFor='password'>Password</label>
                                <input
                                    type="password"
                                    name='password'
                                    placeholder='Password'
                                    required
                                    className='w-full border border-1 outline-none rounded-lg px-4 py-2 mb-3'
                                />
                            </div>

                            <button
                                className='w-4/12 text-xl text-white bg-orange-600 rounded-lg px-6 py-2 text-center'
                                type='submit'>
                                {loading ? <><div className='w-8 h-8 border mx-auto border-2 border-dashed rounded-full border-white animate-spin'></div></> : 'SignUp'}
                            </button>
                        </form>
                        <div className='mt-3'>
                            {error ? <p className='text-red-500'>{error}</p> : ''}
                        </div>
                    </div>
                </div>}
        </>
    );
};

export default SignUp;