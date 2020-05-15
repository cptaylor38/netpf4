import React, { useState } from 'react';
import './Contact.css';
import { FormGroup, Input, Button } from 'reactstrap';
const axios = require('axios');

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const [formState, setFormState] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setFormData({ [e.target.name]: e.target.value });
    if (
      formData.email !== '' &&
      formData.subject !== '' &&
      formData.message !== ''
    ) {
      try {
        setFormState(false);
        await axios
          .post('/contact/email', {
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          })
          .then((response) => {
            setFormData({ email: '', subject: '', message: '' });
            setFormState(true);
          });
      } catch (error) {
        console.log('client request', error);
      }
    }
  };

  return (
    <div>
      {formState ? (
        <form onSubmit={sendEmail}>
          <FormGroup>
            <Input
              type='email'
              name='email'
              id='exampleEmail'
              placeholder='jSmith@email.com'
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type='text'
              name='subject'
              placeholder='Subject..'
              id='subjectText'
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type='textarea'
              name='message'
              placeholder='Message...'
              rows='5'
              id='messageText'
              onChange={handleChange}
            />
          </FormGroup>
          <Button>Send</Button>
        </form>
      ) : (
        <p id='emailLoadIndicator'>Sending...</p>
      )}
    </div>
  );
};

export default Contact;
