import React from "react";
import { BiArrowBack } from "react-icons/bi";
import "../index.css";

interface ContactProps {
  onClose: () => void;
  widthSize: number;
}

const Contact = ({ onClose, widthSize }: ContactProps) => {
  return (
    <div className='py-[12px] px-[24px] md:p-[80px] lg:py-[40px] flex flex-col h-full'>
      <menu className='flex justify-between items-center'>
        <div className='flex items-center'>
          <h1 className='mr-2 text-slate-300'>GET IN TOUCH</h1>
          <div className='bg-black bg-opacity-20 w-20 h-px'></div>
        </div>

        <BiArrowBack onClick={onClose} className='' />
      </menu>

      <form action=''>
        <h2 className='text-blue-900 xl:text-7xl mb-6 mt-4 text-5xl'>Contact Us</h2>
        <p className='text-[#000933] mb-8'>
          Tell us about the question, idea, or project you need help with
        </p>
        <label htmlFor='name'>
          <p className='text-base mt-5'>
            What's your name? <span className='text-slate-300'>Required</span>
          </p>

          <input
            type='text'
            id='name'
            name='name'
            required
            className='block w-full p-px'
          />
        </label>
        <label htmlFor='telephone'>
          <p className='text-base mt-5'>What's your phone number?</p>
          <input
            type='telephone'
            id='telephone'
            name='telephone'
            className='block w-full p-px'
          />
        </label>
        <label htmlFor='name'>
          <p className='text-base mt-5 inline-block'>What's your email?</p>
          <span className='text-slate-300'> Required</span>
          <input
            type='email'
            id='email'
            name='email'
            required
            className='block w-full p-px'
          />
        </label>

        <label htmlFor=''>
          <p className='inline-block mt-5'>How can we help?</p>
          <span className='text-slate-300'> Required</span>
          <textarea className='w-full' />
        </label>
        <button
          type='submit'
          className='px-10 py-8 bg-slate-900 text-white mt-10 text-base'
        >
          Send a message
        </button>
      </form>
    </div>
  );
};

export default Contact;
