import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HireOptions from '../components/HireOptions';
import OptionToIncludes from '../components/OptionToIncludes';
import HireForm from '../components/HireForm';
import Measurement from '../components/Measurement';

export default class HirePage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <HireOptions
          hirebgImage="/images/hire/header-photo@2x.png"
          mainTitle="Option 1"
          centerText="Deckerdence Vintage Bus Bar"
          subTitle="BESPOKE DRINKS OPTIONS AVAILABLE"
        />
        <OptionToIncludes />
        <HireForm
          para="Deckerdence Bus Bar with the 1/2 wrap-around marquee is a great option for entertaining. Perfect for pitchside hospitality, or a racecourse or polo match. Our team will come along and carry out a site visit to your location, and then we will work with you to ensure you have everything perfect for your event. We have a range of items that furnish Deckerdence perfectly."
          avatar="/images/hire/icon@2x.png"
          email="Email"
          phone="Phone Number"
          buttonName="DOWNLOAD"
          subtitle="By submitting this form you agree to our contact conditions."
          mainSubtitle="mainSubtitle"
        />
        <Measurement />
      </Layout>
    );
  }
}
