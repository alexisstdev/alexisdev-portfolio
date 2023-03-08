import './Contact.css';
import { forwardRef } from 'react';

function Contact({ props }, ref) {
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
          <p>+ 52 867 255 3978</p>
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
      <form className='contact-form'>
        <div className='form-group'>
          <input type='text' id='name' name='name' placeholder='Name' />
        </div>
        <div className='form-group'>
          <input type='email' id='email' name='email' placeholder='Email' />
        </div>
        <div className='form-group'>
          <textarea id='message' name='message' placeholder='Message'></textarea>
        </div>
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}

export default forwardRef(Contact);
