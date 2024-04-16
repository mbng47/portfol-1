'use client'
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';


const serviceId = process.env.EMAILJS_SERVICE_ID;
const templateId = process.env.EMAILJS_TEMPLATE_ID;
const publicKey = process.env.EMAILJS_PUBLIC_KEY;
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
        process.env.EMAILJS_TEMPLATE_ID ?? "",
        e.target,
        process.env.EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };

  return (
    <article id='contact' className='h-screen w-full pt-52 md:max-xl:pt-40 px-7 sm:px-20 flex flex-col border-2 border-black border-dotted'>
                  <h2 className='uppercase font-[999] text-5xl sm:text-7xl'>Contact me</h2>
                  {/* <h3 className='uppercase font-[900] text-5xl sm:text-6xl'>I always answer</h3> */}
                  <p className='text-xl font-normal mt-5 max-w-700px'>Welcome to my site. I'm a software developer from Sweden residing in Malmö.</p>
      <form className={'pt-4 flex flex-col gap-2'} onSubmit={sendEmail}>
        <input className={'p-1 bg-white text-black font-medium rounded sm:max-w-2xl'} type="text" name="user_name" title='user_name' placeholder='Name' />
        <input className={'p-1 bg-white text-black font-medium rounded sm:max-w-2xl'} type="email" name="user_email" title='user_email' placeholder='Email' />
        <textarea className={'p-1 bg-white text-black font-medium rounded max-w-3xl basis-52'} name="message" title='message' placeholder='Message' />
        <input className={'bg-white text-black max-w-14 cursor-pointer rounded border border-black focus:outline focus:outline-sky-400'} type="submit" value="Send" disabled={isSubmitting} />
        {stateMessage && console.log(stateMessage)}
      </form>
    </article>
  );
};




// ----------------------------------------------------------

// export default function Contact() {


//     return (
//             <article id='contact' className='h-screen w-full border-2 border-black border-dotted'>
//             <form action="">
//                 <input type="text" title='fname' placeholder='Chimp Apansson' />
//             </form>
//             </article>
//     )
// }