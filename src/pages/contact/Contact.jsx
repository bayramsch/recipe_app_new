import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const ContactText = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1rem;
`;

const ContactLink = styled.a`
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 400px;
`;

const FormLabel = styled.label`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
  width: 100%;
`;

const FormTextarea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  height: 150px;
  margin-bottom: 1rem;
  width: 100%;
`;

const FormSubmitButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      <ContactInfo>
        <ContactText>For any inquiries or questions, please reach out to us:</ContactText>
        <ContactLink href="mailto:contact@example.com">bayramkmz7240@gmail.com</ContactLink>
      </ContactInfo>
      <ContactForm onSubmit={handleSubmit}>
        <FormLabel htmlFor="name">Name:</FormLabel>
        <FormInput type="text" id="name" required />
        <FormLabel htmlFor="email">Email:</FormLabel>
        <FormInput type="email" id="email" required />
        <FormLabel htmlFor="message">Message:</FormLabel>
        <FormTextarea id="message" required />
        <FormSubmitButton type="submit">Send Message</FormSubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default ContactPage;
