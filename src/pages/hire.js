import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HireHero from '../components/HireHero';
import HireOptionItem from '../components/HireOptionItem';

export default class HirePage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <HireHero
          title="Unique Mobile Venue"
          subtitle=" Find the perfect Deckerdence Hire option for your event"
          para="  Deckerdence is a unique mobile venue that is avalible to hire in
          4 different options. All these options are fully customisable so
          that you can create the perfect setup for your event."
        />
        <HireOptionItem
          image="/images/hire/bus.png"
          option="Hire Option 1"
          title="Vintage Bus Bar"
          description="You can hire our fabulous vintage bus bar
          to give your event a stand out bar."
          price="£500.00"
        />
        <HireOptionItem
          flex
          image="/images/hire/bus-house.png"
          option="Hire Option 2"
          title="Vintage Bus Bar"
          description="You can hire our fabulous vintage bus bar
          to give your event a stand out bar."
          price="£500.00"
        />
        <HireOptionItem
          image="/images/hire/bar-bus.png"
          option="Hire Option 3"
          title="Vintage Bus Bar"
          description="You can hire our fabulous vintage bus bar
          to give your event a stand out bar."
          price="£500.00"
        />
        <HireOptionItem
          flex
          image="/images/hire/bus-decoration.png"
          option="Hire Option 4"
          title="Vintage Bus Bar"
          description="You can hire our fabulous vintage bus bar
          to give your event a stand out bar."
          price="£500.00"
        />
        {/*
        <HireRight
          frame="/images/hire/frame-1.png"
          image="/images/hire/photo.png"
          option="Hire Option 1"
          title="Vintage Bus Bar"
          description="You can hire our fabulous vintage bus bar
          to give your event a stand out bar."
          price="£500.00"
        />
        <HireLeft
          frame="/images/hire/frame-2.png"
          image="/images/hire/bar.png"
          option="Hire Option 2"
          title="Vintage bus bar
          with SIDE awning"
          description="You can hire Deckerdence with an awning,
          giving you shade in the sunshine or some cover
          in unpredictable weather conditions."
          price="£1000.00"
        />
        <HireRight
          frame="/images/hire/frame-1.png"
          image="/images/hire/photo-3.png"
          option="Hire Option 3"
          title="Vintage Bus Bar with ½ Marquee"
          description="You can hire our fabulous vintage Deckerdence Bus Bar for your occasion to create a memorable experience. Set up either on the day or the day
          before depending on timings."
          price="£5000.00"
        />
        <HireLeft
          frame="/images/hire/frame-2.png"
          image="/images/hire/photo-4.png"
          option="Hire Option 4"
          title="Deckerdence full
          Marquee venue "
          description="You can hire Deckerdence with the full
          wrap around marquee & additional
          marquee structures can be attached
          for more space if needed."
          price="£5952.00"
        /> */}
      </Layout>
    );
  }
}
