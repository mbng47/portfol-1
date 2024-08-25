'use client'
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'dotenv/config';
console.log(process.env);

// const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
// const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
// const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
// console.log(serviceId, templateId, publicKey);


// ---------------------------------------------------

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState<typeof stateMessage | null>(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "",
        e.target,
        process.env.NEXT_PUBLIC_PUBLIC_KEY ?? ""
      )
      .then(
        (result) => {
          toast.success('Your email has been delivered', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setIsSubmitting(false);
        },
        (error) => {
          toast.error('Something went wrong, please try again later', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setIsSubmitting(false);
        }
      );
    // Clears form after sending email
    e.target.reset();
  };

  return (
    <article id='contact' className='h-screen w-full pt-14 md:pt-36 2xl:pt-52 px-7 sm:px-20 flex flex-col'>
      <h2 className='uppercase font-[999] text-5xl sm:text-6xl'>Contact me</h2>
      <div className='mt-5 inline sm:block'>
        <p className='text-lg font-normal inline sm:block sm:max-w-2xl'>Send me an email using this form. You'll get notified whether it went through or not, </p>
        <p className='text-lg font-normal inline sm:block sm:max-w-3xl'>then an auto response is sent to your email. Please check for that so that I got yours right.</p>
      </div>
      <form className={'pt-4 flex flex-col gap-2'} onSubmit={sendEmail}>
        <input className={'p-1 bg-white text-black font-medium rounded sm:max-w-2xl'} type="text" name="user_name" title='user_name' placeholder='Name' />
        <input className={'p-1 bg-white text-black font-medium rounded sm:max-w-2xl'} type="email" name="user_email" title='user_email' placeholder='Email' />
        <textarea className={'p-1 bg-white text-black font-medium rounded max-w-3xl basis-52 sm:basis-48'} name="message" title='message' placeholder='Message' />
        <input className={'bg-white text-black max-w-14 cursor-pointer rounded border border-black focus:outline focus:outline-sky-400'} type="submit" value="Send" disabled={isSubmitting} />
      </form>
      <ToastContainer transition={Flip} />
    </article>
  );
};

