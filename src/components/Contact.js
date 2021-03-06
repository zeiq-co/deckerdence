import React from 'react';
import styled from 'styled-components';
import Diagram from './Diagram';
import ContactForm from './forms/ContactForm';

const Section = styled.div`
  background-image: url('/images/hire/hireFormBg.png');
  background-size: 100% 100% !important;
  background-repeat: no-repeat !important;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-image: url('/images/hire/divider-2@2x.jpg') 50 round;
`;

const Contact = ({ avatar }) => (
  <Section className="section ">
    <div className="container">
      <Diagram avatar={avatar} />
    </div>
    <div className="columns is-centered">
      <div className="column is-6 has-text-centered">
        <ContactForm
          pera="By submitting this form you agree to our contact terms and
          conditions."
        />
      </div>
    </div>
  </Section>
);

export default Contact;
