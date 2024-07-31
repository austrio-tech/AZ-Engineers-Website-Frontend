// components/Contact.js
import React from 'react';
import './style/Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <form>
          <label>Name:</label>
          <input type="text" name="name" required />
          <label>Email:</label>
          <input type="email" name="email" required />
          <label>Message:</label>
          <textarea name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
