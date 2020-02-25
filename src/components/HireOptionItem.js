import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: ${props => (props.flex ? '#AAB3B6' : '')};
  .columns {
    flex-direction: ${props => (props.flex ? 'row-reverse' : '')};
  }
  .column {
    align-self: center;
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
  h5,
  h3,
  .button {
    color: ${props => (props.flex ? '#fff' : '')};
  }
  .button {
    background: transparent;
    border: 2px solid ${props => (props.flex ? '#fff' : '')};
    font-family: ${props => props.theme.secondaryFontFamily};
    letter-spacing: 1px;
  }
  .is-square {
    width: 100%;
    height: 100%;
  }
  .is-square .img-top {
    display: none;
    position: absolute;
    z-index: 99;
  }
  .is-square:hover .img-top {
    display: inline;
  }
`;

const HireOptionItem = ({ item, onMouseOver }) => (
  <Section className="section" flex={item.columnReverse}>
    <div className="container">
      <div className="columns">
        <div className="column">
          <figure className="image is-square">
            <img
              src={item.hireOptionColoredImage.asset.url}
              onFocus={onMouseOver}
              alt="coloredImage"
            />
            <img
              src={item.hireOptionBlackImage.asset.url}
              className="img-top"
              alt="blackImage"
            />
          </figure>
        </div>
        <div className="column is-8 has-text-centered">
          <img src="/images/hire/red.png" alt="" />
          <div className="is-inline-block">
            <h3 className="title is-3 has-text-warning ">
              {item.hireOptionTitle}
            </h3>
          </div>
          <img src="/images/hire/red-2.png" alt="" />
          <h5 className="title is-2 is-spaced has-text-warning ">
            {item.hireOptionSubtitle}
          </h5>
          <h5 className="subtitle is-5 has-text-weight-medium">
            {item.hireOptionDescription}
          </h5>
          <h3 className="title is-5 price">Hire from {item.hireOptionPrice}</h3>
          <button type="button" className="button is-large  is-size-5">
            FIND OUT MORE
          </button>
        </div>
      </div>
    </div>
  </Section>
);

export default HireOptionItem;
