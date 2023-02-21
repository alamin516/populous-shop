import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { useCartContext } from '../../context/CartContext';
import { useAuthContext } from '../../context/AuthProvider';

const Header = () => {
    const { user, logout } = useAuthContext()
    const { total_item } = useCartContext()
    const [navbar, setNavbar] = useState(false);
    const navigate = useNavigate()

    const logOut = () => {
        logout()
            .then(() => {
                navigate('/login')
            })
    }


    return (
        <nav className="w-full shadow relative sticky top-0 z-40 bg-white">
            <div className="justify-between px-4 mx-auto lg:w-10/12 md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to={`/`}>
                            <h2 className="text-2xl font-bold text-orange-600">POPULOUS SHOP</h2>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${navbar ? "block -mt-2 -ml-4 p-4 absolute w-full h-[90vh] bg-white duration-300 z-60" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li>
                                <Link
                                    to={`/`}
                                    className={`text-gray-600 text-[16px] font-semibold uppercase px-6 py-2 hover:text-white hover:bg-orange-600`}
                                    onClick={() => {
                                        // setActive("home"); 
                                        setNavbar(false)
                                    }
                                    }
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/about`}
                                    className={`text-gray-600 text-[16px] font-semibold uppercase px-6 py-2 hover:text-white hover:bg-orange-600`}
                                    onClick={() => {
                                        // setActive("about")
                                        setNavbar(false)
                                    }}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/products`}
                                    className={`text-gray-600 text-[16px] font-semibold uppercase px-6 py-2 hover:text-white hover:bg-orange-600`}
                                    onClick={() => {
                                        // setActive("products")
                                        setNavbar(false)
                                    }}
                                >
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/contact`}
                                    className={`text-gray-600 text-[16px] font-semibold uppercase px-6 py-2 hover:text-white hover:bg-orange-600`}
                                    onClick={() => {
                                        // setActive("contact")
                                        setNavbar(false)
                                    }}
                                >
                                    Contact
                                </Link>
                            </li>
                            {
                                user?.email ?
                                    <>
                                        {user?.displayName === null ? null :
                                            <li>
                                                <span className='text-gray-600 text-[14px] font-semibold uppercase px-6 py-2'>
                                                    {user?.displayName}
                                                </span>
                                            </li>
                                        }
                                        <li>
                                            <button
                                                className={`text-gray-600 text-[16px] font-semibold uppercase px-6 py-2 text-white bg-orange-600 cursor-pointer`}
                                                onClick={() => {
                                                    // setActive("contact")
                                                    setNavbar(false)
                                                    logOut()
                                                }}
                                            >
                                                LogOut
                                            </button>
                                        </li>
                                    </> :
                                    <>
                                        <li>
                                            <Link
                                                to={`/login`}
                                                className={`text-gray-600 text-[16px] font-semibold uppercase px-6 py-2 text-white bg-orange-600`}
                                                onClick={() => {
                                                    // setActive("contact")
                                                    setNavbar(false)
                                                }}
                                            >
                                                Login
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to={`/sign-up`}
                                                className={`text-gray-600 text-[16px] font-semibold uppercase px-6 py-2 text-white bg-orange-600`}
                                                onClick={() => {
                                                    // setActive("contact")
                                                    setNavbar(false)
                                                }}
                                            >
                                                SignUp
                                            </Link>
                                        </li>
                                    </>
                            }
                            <li>
                                <Link
                                    onClick={() => {
                                        // setActive("cart")
                                        setNavbar(false)
                                    }}
                                    to={`/cart`}
                                    className={`text-gray-600 font-semibold px-6 relative`}
                                >
                                    <FiShoppingCart className='w-7 h-7 lg:ml-0 md:ml-0 ml-10 hover:text-orange-600 z-10'></FiShoppingCart>
                                    <span className='absolute lg:ml-0 md:ml-0 ml-10 top-5 left-[70%] bg-orange-600 rounded-full w-6 h-6 text-white flex justify-center items-center'>{total_item}</span>
                                </Link>
                            </li>
                        </ul>
                        <>

                        </>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;