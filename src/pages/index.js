import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import HomePageSection from '../components/HomePageSection';

export const homeQuery = graphql`
  query homepage {
    sanitySiteSettings {
      homeHeroBackgroundImage {
        asset {
          url
        }
      }
      homeHeroBannerImage {
        asset {
          url
        }
      }
      email
      telephone
    }
  }
`;

const Index = ({ data }) => {
  const settings = data.sanitySiteSettings;
  return (
    <Layout>
      <Seo title="Home" description="Deckerdence Unique Mobile Venue" />
      <HomeHero items={settings} />
      <HomePageSection
        button
        title="WEDDINGS"
        description="Say yes to the perfect wedding venue.
        Have your special day at our event space in the Warwickshire countryside or take our
        vintage mobile venue to a location of your choosing. Whether you
        want to go traditional with silver service or festival-style
        with the best street food vendors, we can create your dream
        wedding."
        bgImg="/images/events/photo@3x.png"
        bannerImg="/images/events/box-1.png"
      />
      <HomePageSection
        flex
        button
        title="PARTIES"
        description="Throw the best party in town.
        No matter what the occasion, our vintage bus provides an incredible
        focal point for your party. Serving up traditional drinks and cocktails,
        with an old English drawing room inspired lounge on-board, we can deliver
        the vintage party for you."
        bgImg="/images/events/party@3x.png"
        bannerImg="/images/events/box-2.png"
      />
      <HomePageSection
        button
        title="EVENTS"
        description="Make your event stand out from the crowd.
      With a classical bar and luxurious cocktail lounge, our vintage bus provides a stunning
      feature for your event. Perfect for festivals, fates, fairs and exhibitions, our unique
      mobile venue can travel anywhere in the UK."
        bgImg="/images/events/event@3x.png"
        bannerImg="/images/events/box-3.png"
      />
      <HomePageSection
        button
        flex
        title="Hospitality"
        description="Deliver an event with a difference.
      Whether you’re hosting a corporate event, fashion show, award ceremony or ball, Deckerdence
      provides a unique space to entertain. Complete with bar, cocktail lounge and a bird’s eye
      view at sporting events, our vintage bus will give your clients a day to remember."
        bgImg="/images/events/Hospitality@3x.png"
        bannerImg="/images/events/box-4.png"
      />
    </Layout>
  );
};

export default Index;
