import React from 'react';
import AboutPageHero from '../components/about/AboutPageHero';
import OurStory from '../components/about/OurStory';
import PageMeta from '../components/common/PageMeta';
import CtaTwo from '../components/cta/CtaTwo';
import FeatureImgThree from '../components/features/FeatureImgThree';
import Team from '../components/team/Team';
import TestimonialTwo from '../components/testimonial/TestimonialTwo';
import CryptoFooter from '../layout/Footer/CryptoFooter';
import Navbar from '../layout/Header/Navbar';
import Layout from '../layout/Layout';

const About = () => {
  return (
    <Layout>
      <PageMeta title='Why Choose Us - Blockchain &amp; NFT Solutions - Company - Blockchain Maker Place' />
      <Navbar navDark />
      <AboutPageHero />
      <OurStory />
      <FeatureImgThree />
      <Team />
      <TestimonialTwo />
      <CtaTwo />
      <CryptoFooter />
    </Layout>
  );
};

export default About;
