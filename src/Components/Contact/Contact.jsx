import './Contact.css';
import { forwardRef, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact({ props }, ref) {
  const form = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm('service_ye95lf2', 'template_p7yn7kq', form.current, 'H30h6c7uQGZwbr4CO')
      .then(
        (result) => {
          alert('Message sent');
          console.log('sent' + result.text);
        },
        (error) => {
          console.log('err' + error.text);
        }
      );
  }

  return (
    <div className='container contact-section' ref={ref}>
      <div className='contact-info'>
        <h2>Contact me</h2>
        <p className='contact-text'>
          Feel free to contact me any time. I will get back to you as soon as I can!
        </p>
        <div className='contact-info-info'>
          <h3>Email</h3>
          <p>alexissanmiguel03@gmail.com</p>
          <h3>Phone</h3>
          <p>+52 867 255 3978</p>
        </div>
        <ul className='social-links'>
          <li>
            <a href='https://github.com' target='_blank'>
              <i className='fab fa-github'></i>
            </a>
          </li>
          <li>
            <a href='https://linkedin.com' target='_blank'>
              <i className='fab fa-linkedin'></i>
            </a>
          </li>
          <li>
            <a href='https://gmail.com' target='_blank'>
              <i className='far fa-envelope'></i>
            </a>
          </li>
        </ul>
      </div>
      <form className='contact-form' onSubmit={handleSubmit} ref={form}>
        <div className='form-group'>
          <input type='text' name='user_name' placeholder='Name' />
        </div>
        <div className='form-group'>
          <input type='email' name='user_email' placeholder='Email' />
        </div>
        <div className='form-group'>
          <textarea name='message' placeholder='Message' />
        </div>
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}

export default forwardRef(Contact);
