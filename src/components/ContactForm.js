import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    merchType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', merchType: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact-form" className="contact-form-section">
      <div className="container">
        <div className="form-header">
          <h2>Get Your Custom Team Gear</h2>
          <p>Tell us about your merchandise needs and we'll get back to you quickly.</p>
        </div>
        
        <form 
          className="contact-form" 
          onSubmit={handleSubmit}
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          {/* Hidden input for Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          
          {/* Honeypot field for spam protection */}
          <div style={{ display: 'none' }}>
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </div>

          {submitStatus === 'success' && (
            <div className="success-message">
              Thank you! Your inquiry has been sent successfully. We'll get back to you soon!
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="error-message">
              Sorry, there was an error sending your message. Please try again or contact us directly at banners@teamscout.co
            </div>
          )}

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="merchType">What type of merchandise are you looking for? *</label>
            <textarea
              id="merchType"
              name="merchType"
              value={formData.merchType}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Describe the type of merchandise you need (jerseys, banners, helmets, etc.) and any specific requirements..."
            />
          </div>
          
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Inquiry'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
