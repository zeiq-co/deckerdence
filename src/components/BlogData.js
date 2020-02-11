import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: url('${props => props.boxImage}');
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: space-around;
  display: grid;
  .text {
    color: ${props =>
      props.color
        ? props.theme.textColorLite
        : props.theme.backgroundColor} !important;
  }
  button {
    border: 1px solid ${props => (props.color ? '#000' : '#fff')} !important;
  }
  .has-text-centered {
    align-self: end;
  }
`;

const BlogData = ({ title, subtitle, boxImage, color }) => (
  <Wrapper className="tile is-child box" boxImage={boxImage} color={color}>
    <p className="title has-text-weight-normal has-text-centered text">
      {title}
    </p>
    <p className="subtitle is-4 has-text-centered has-text-weight-semibold text">
      {subtitle}
    </p>
    <div className="has-text-centered">
      <button
        className="button is-normal has-text-weight-bold text"
        type="button"
      >
        READ MORE
      </button>
    </div>
  </Wrapper>
);

export default BlogData;
