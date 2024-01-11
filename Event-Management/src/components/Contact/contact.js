import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formValues.name) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formValues.email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formValues.phone) {
      errors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formValues.phone)) {
      errors.phone = 'Invalid phone number';
      isValid = false;
    }

    if (!formValues.message) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        alert(`Thank you for your message, ${formValues.name}!`);
        setFormValues({ name: '', email: '', phone: '', message: '' });
      
        setIsSubmitting(false);
      }, 2000);
    }
    console.log(formValues)
  };

  return (

    <div className="contact-form">
    <h1>Contact Us</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
          required
        />
        {formErrors.name && <span className="error">{formErrors.name}</span>}
      </div>
      <div className="form-field">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
          required
        />
        {formErrors.email && <span className="error">{formErrors.email}</span>}
      </div>
      <div className="form-field">
        <label htmlFor="phone">Phone No:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formValues.phone}
          onChange={handleInputChange}
          required
        />
        {formErrors.phone && <span className="error">{formErrors.phone}</span>}
      </div>
      <div className="form-field">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formValues.message}
          onChange={handleInputChange}
          rows="5">
         
  
  </textarea>
        {formErrors.message && <span className="error">{formErrors.message}</span>}
      </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default Contact;


