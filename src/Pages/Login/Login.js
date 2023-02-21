import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthProvider';

const Login = () => {
    const {user, signin, loading, setLoading } = useAuthContext()
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from.pathname || '/'


    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        const form = event.target
        const email = form.email.value
        const paasword = form.password.value

        signin(email, paasword)
            .then(res => {
                // const user = res.user;
                // console.log(user)
                setLoading(false)
                navigate(from, { replace: true })
            })
            .then(error => {
                setLoading(false)
            })
    }


    return (
        <>
            {user ? navigate('/') :
                <div className='lg:w-8/12 mx-auto lg:flex justify-between items-center min-h-[70vh]'>
                    <div className='px-6 lg:w-1/2'>
                            <figure>
                                <img src="images/login.jpg" alt="login" />
                            </figure>
                    </div>
                    <div className='px-6 lg:w-1/2'>
                        <form onSubmit={handleSubmit}>
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
                                {loading ? <><div className='w-7 h-7 border mx-auto border-2 border-dashed rounded-full border-white animate-spin'></div></> : 'Login'}
                            </button>
                        </form>
                    </div>
                </div>
            }
        </>
    );
};

export default Login;