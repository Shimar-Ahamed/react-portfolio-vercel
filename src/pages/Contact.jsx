import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Pages.css';  // Assuming your CSS file is named Contact.css

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ygi3fb5', 'template_swwswqp', form.current, '2jSbGziRv5UitoY7j')
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          toast.success('Message sent successfully!');
        },
        (error) => {
          console.error('Email sending failed:', error.text);
          toast.error('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="ContactMe">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Send" />
      </form>
      <ToastContainer />
    </div>
  );
};
