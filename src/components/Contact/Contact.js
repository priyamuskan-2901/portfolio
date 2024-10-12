import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css'; // Import your CSS file

function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ message: '', type: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs.sendForm(serviceId, templateId, form.current, userId)
      .then(() => {
        setNotification({ message: 'Email sent successfully!', type: 'success' });
        form.current.reset();
        setIsSubmitting(false);

        // Remove notification after 3 seconds
        setTimeout(() => {
          setNotification({ message: '', type: '' });
        }, 3000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setNotification({ message: 'Failed to send email. Please try again.', type: 'error' });
        setIsSubmitting(false);

        // Remove notification after 3 seconds
        setTimeout(() => {
          setNotification({ message: '', type: '' });
        }, 3000);
      });
  };

  return (
    <Container
      fluid
      className="contact-section mt-4 mb-4"
      id="contact"
      style={{ color: 'white' }}
    >
      <Container>
        <Row>
          <Col md={12} className="contact-header">
            <h1>GET IN TOUCH</h1>
            <p>Feel free to <span className="purple">reach out</span> and contact me</p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col md={6}>
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" id="name" name="user_name" className="form-control" placeholder="Type your name" required disabled={isSubmitting} />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" name="user_email" className="form-control" placeholder="Type your email" required disabled={isSubmitting} />
                  </div>
                </Col>
              </Row>
              <div className="mb-4">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" name="message" className="form-control" placeholder="Type your message" required disabled={isSubmitting} />
              </div>
              <button type="submit" className={`btn ${isSubmitting ? 'btn-secondary' : 'btn-primary'}`} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>

            {/* Notification Section */}
            {notification.message && (
              <div className={`notification ${notification.type}`}>
                {notification.message}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
