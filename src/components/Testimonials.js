import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  .card {
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-repeat: no-repeat;
    max-height: 24rem;
    opacity: 0.7;
    filter: alpha(opacity=50);
    :hover {
      opacity: 1;
      filter: alpha(opacity=100);
    }
  }
`;

class Testimonials extends React.Component {
  render() {
    const { bgImage, title } = this.props;
    return (
      <Section className="column is-4" bgImage={bgImage}>
        <div className="card section hero is-medium">
          <div className="card-content">
            <h1 className="title is-2 has-text-white has-text-centered">
              {title}
            </h1>
            <figure className="">
              <img
                className=""
                src="/images/gallery/decorative-line@2x.png"
                alt=""
              />
            </figure>
          </div>
        </div>
      </Section>
    );
  }
}

export default Testimonials;