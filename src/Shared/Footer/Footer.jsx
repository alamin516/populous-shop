import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { FiInstagram, FiYoutube } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PhoneLink from '../../Components/Contact/PhoneLink';
import SocialLink from '../../Components/SocialLink/SocialLink';

const Footer = () => {
    return (
        <div className='pt-6'>
            <div className='lg:px-0 px-2'>
                <div className='lg:w-8/12 flex justify-between bg-gray-200 mx-auto lg:p-10 p-5 rounded-lg relative z-20'>
                    <div>
                        <h3 className='lg:text-xl'>Ready to get started?</h3>
                        <h3 className='lg:text-xl'>Talk to us today</h3>
                    </div>
                    <div>
                        <Link to={`/contact`}>
                            <button className='text-xl text-white bg-orange-600 lg:px-6 px-3 py-2 hover:bg-black duration-200'>Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='w-full bg-black lg:pt-32 pt-20 pb-2 lg:-mt-16 -mt-10'>
                <div className='lg:w-9/12 mx-auto lg:grid grid lg:grid-cols-4 justify-between text-white gap-y-10 gap-x-5 mb-10 md:px-10 px-2'>
                    <div>
                        <h3 className='text-2xl font-bold text-orange-600 mb-3'>Populous Shop</h3>
                        <h3 className='lg:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    </div>
                    <div>
                        <h3 className='text-xl mb-3'>Subscribe to our important updates</h3>
                        <form action="#">
                            <div>
                                <input className='border border-gray-400 w-full p-2 mb-3 focus:outline-none text-black' type="email" placeholder='Your Email' name='email' />
                            </div>
                            <input className='text-xl text-white bg-orange-600 px-6 py-2 cursor-pointer' type="submit" value='Subscribe' />
                        </form>
                    </div>
                    <div>
                        <h3 className='text-xl mb-3'>Follow Us</h3>
                        <div className='flex gap-5'>
                            <div className='border border-gray-400 rounded-full p-2'>
                                <SocialLink href={'https://www.discord.com'}>
                                    <FaDiscord className='text-2xl' />
                                </SocialLink>
                            </div>
                            <div className='border border-gray-400 rounded-full p-2'>
                                <SocialLink href={'https://www.instagram.com'}>
                                    <FiInstagram className='text-2xl' />
                                </SocialLink>
                            </div>
                            <div className='border border-gray-400 rounded-full p-2'>
                                <SocialLink href={'https://www.youtube.com'}>
                                    <FiYoutube className='text-2xl' />
                                </SocialLink>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-xl mb-3'>Contact Us</h3>
                        <PhoneLink />
                    </div>
                </div>
                <hr />
                <div className='py-4'>
                    <div className='lg:w-9/12 mx-auto px-2 flex justify-around text-white'>
                        <div>
                            <p>&copy;{new Date().getFullYear()} Populous shop. All Right Reserved </p>
                        </div>
                        <div>
                            <p>Privacy & Policy </p>
                            <p>Terms & Conditions </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;