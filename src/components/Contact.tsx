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
    <article id='contact' className='h-screen w-full'>
      <form onSubmit={sendEmail}>
        <label htmlFor="user_name">Name
          <input type="text" name="user_name" title='user_name' placeholder='Chimp Apansson' />
        </label>
        <label>Email</label>
        <input type="email" name="user_email" title='user_email' placeholder='ban@nen.se' />
        <label>Message</label>
        <textarea name="message" title='message' placeholder='Monkey business...' />
        <input type="submit" value="Send" disabled={isSubmitting} />
        {stateMessage && <p>{stateMessage}</p>}
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