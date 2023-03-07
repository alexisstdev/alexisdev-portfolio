import './Contact.css';
import { forwardRef } from 'react';

function Contact({ props }, ref) {
  return (
    <div ref={ref} className='container'>
      <h1>Contact Section</h1>
      <h2>dasjf</h2>
      <h2>dasjf</h2>
      <h2>dasjf</h2>
      <h2>dasjf</h2>
    </div>
  );
}

export default forwardRef(Contact);
