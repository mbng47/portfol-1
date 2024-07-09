'use client'
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const serviceId = 'contact_service';
const templateId = "contact_form";
const publicKey = "xmS6JMCyCIQ3SY39O";
console.log(serviceId, templateId, publicKey);



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
        serviceId ?? "",
        templateId ?? "",
        e.target,
        publicKey ?? ""
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
          // setStateMessage('Message sent');
          setIsSubmitting(false);
          // setTimeout(() => {
          //   setStateMessage(null);
          // }, 5000); // hide message after 5 seconds
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
          // setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          // setTimeout(() => {
          //   setStateMessage(null);
          // }, 5000); // hide message after 5 seconds
        }
      );

    // Clears form after sending email
    e.target.reset();
  };

  return (
    <article id='contact' className='h-screen w-full pt-20 md:pt-36 2xl:pt-52 px-7 sm:px-20 flex flex-col'>
                  <h2 className='uppercase font-[999] text-5xl sm:text-7xl'>Contact me</h2>
                  <p className='text-xl font-normal mt-5 max-w-700px'>You can send me an email via this form.</p>
      <form className={'pt-4 flex flex-col gap-2'} onSubmit={sendEmail}>
        <input className={'p-1 bg-white text-black font-medium rounded sm:max-w-2xl'} type="text" name="user_name" title='user_name' placeholder='Name' />
        <input className={'p-1 bg-white text-black font-medium rounded sm:max-w-2xl'} type="email" name="user_email" title='user_email' placeholder='Email' />
        <textarea className={'p-1 bg-white text-black font-medium rounded max-w-3xl basis-52'} name="message" title='message' placeholder='Message' />
        <input className={'bg-white text-black max-w-14 cursor-pointer rounded border border-black focus:outline focus:outline-sky-400'} type="submit" value="Send" disabled={isSubmitting} />
      </form>
      <ToastContainer transition={Flip}/>
    </article>
  );
};