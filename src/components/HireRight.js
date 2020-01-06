import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  .frame {
    width: 23rem;
    position: relative;
    top: 0;
    left: 0;
  }
  .image {
    width: 19rem;
    position: absolute;
    top: 2.5625rem;
    left: 1.75rem;
  }
  .content {
    padding: 3rem 6.5rem;
  }
  .is-inline-block {
    margin: 0rem 1.5rem 2rem 1.5rem;
  }
  .price {
    margin-top: 2rem !important;
  }
`;

const HireRight = props => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <img className="frame" src={props.frame} />
          <img className="image" src={props.image} />
        </div>
        <div className="column is-8 has-text-centered">
          <section className="section content">
            <div className="container">
              <img src="/images/hire/red.png" alt="" />
              <div className="is-inline-block">
                <h3 className="title is-3 has-text-warning ">{props.option}</h3>
              </div>
              <img src="/images/hire/red-2.png" />
              <h5 className="title is-2 is-spaced has-text-warning ">
                {props.title}
              </h5>
              <h5 className="subtitle is-5 has-text-weight-medium">
                {props.description}
              </h5>
              <h3 className="title is-5 price">hire from {props.price}</h3>
              <button class="button is-primary is-large title is-5">
                Find out more
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  </Section>
);

export default HireRight;
