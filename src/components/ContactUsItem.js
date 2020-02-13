import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .card {
    background-image: url('/images/contacts/fame2x.png');
    background-size: contain;
    background-repeat: no-repeat;
    box-shadow: none;
    min-height: 33rem;
    align-items: center;
    display: flex;
  }
  .card-content {
    padding: 0rem 6rem 0rem 4rem;
  }

  h1 {
    border-bottom: 3px solid white;
    padding: 0rem 0rem 1rem 0rem;
  }
`;
const ImageWrapper = styled.div`
  justify-content: center;
`;

const ContactUs = ({ title, icon, para }) => (
  <Section className="column is-4">
    <div className="card">
      <div className="card-content">
        <h1 className="title is-3 has-text-weight-normal is-spaced has-text-centered has-text-white">
          {title}
        </h1>
        <ImageWrapper className="media align">
          <figure className="image is-96x96">
            <img className="is-rounded" src={icon} alt="" />
          </figure>
        </ImageWrapper>
        <div className="content">
          <p className="subtitle is-4 has-text-weight-normal has-text-centered has-text-white">
            {para}
          </p>
        </div>
      </div>
    </div>
  </Section>
);

export default ContactUs;