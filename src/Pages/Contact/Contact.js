import { useForm, ValidationError } from '@formspree/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthProvider';


const Contact = () => {
  const {user} = useAuthContext()
  const [state, handleSubmit] = useForm(`xgebanll`);
  
  if (state.succeeded) {
    return <div className='text-center min-h-screen flex justify-center items-center'>
      <div>
        <p className='text-3xl text-green-500 text-center py-4'>'Thanks for joining!'</p>
        <Link to={`/`}>
          <button className='bg-orange-600 px-8 py-2 mt-5 font-bold text-xl text-white hover:bg-[#333]'>Back To Home</button>
        </Link>
      </div>
    </div>
  }

  return (
    <div className='py-10'>
      <div>
        <h2 className='text-3xl text-center font-bold mb-10'>Feel Free To Contact</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7304.972876310689!2d90.38828259999998!3d23.730027000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1676181602683!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">

        </iframe>
      </div>
      <div className='lg:w-4/12 mx-auto py-10 px-2'>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className='border border-gray-400 w-full p-2 mb-3 focus:outline-none'
              type="text"
              name='username'
              placeholder='Username'
              defaultValue={user?.displayName}
              readOnly={user?.displayName}
              autoComplete='off'
              required />
            <ValidationError field="username" prefix="Username" errors={state.errors} />
          </div>
          <div>
            <input
              className='border border-gray-400 w-full p-2 mb-3 focus:outline-none'
              type="email"
              name='email'
              defaultValue={user?.email}
              readOnly={user?.email}
              placeholder='Email'
              autoComplete='off'
              required />
            <ValidationError field="email" prefix="Email" errors={state.errors} />
          </div>
          <div>
            <textarea
              className='border border-gray-400 w-full p-2 mb-3 focus:outline-none'
              name='message'
              cols="30"
              rows="10"
              placeholder='Enter Your Message'
              required
            ></textarea>

          </div>
          <input className='bg-orange-600 px-6 py-2 text-xl text-white font-semibold cursor-pointer w-full'
            type="submit"
            value='Send'
            disabled={state.submitting}

          />
        </form>
      </div>

    </div>
  )
};

export default Contact;
