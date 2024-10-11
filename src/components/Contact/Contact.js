import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Row, Col } from 'react-bootstrap';

function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
      .then(
        () => {
          toast.success('Message sent successfully!');
          form.current.reset(); // Reset the form after successful submission
          setIsSubmitting(false);
        },
        (error) => {
          toast.error('Failed to send message.');
          console.log('FAILED...', error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <Container
      fluid
      className="contact-section mt-4 mb-4"  // Added Bootstrap margin classes
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
                    <input type="text" id="name" name="user_name" className="form-control" placeholder="Type your name" required />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" name="user_email" className="form-control" placeholder="Type your email" required />
                  </div>
                </Col>
              </Row>
              <div className="mb-4">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" name="message" className="form-control" placeholder="Type your message" required />
              </div>
              <button type="submit" className={`btn ${isSubmitting ? 'btn-secondary' : 'btn-primary'}`} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </Container>
  );
}

export default Contact;
