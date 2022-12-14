import React, { Component } from 'react';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';
import HeroOne from './HeroOne';
import FeatureImgContentFour from '../../components/feature-img-content/FeatureImgContentFour';
import FeatureImg from '../../components/features/FeatureImg';
import WorkProcessTwo from "../../components/work-process/WorkProcessTwo";
import PageMeta from '../../components/common/PageMeta';
import TestimonialOne from '../../components/testimonial/TestimonialOne';
import WorkProcess from '../../components/work-process/WorkProcess';
import PriceOne from '../../components/prices/PriceOne';
import FaqOne from '../../components/faqs/FaqOne';
import IntegrationOne from '../../components/integration/IntegrationOne';
import CtaOne from '../../components/cta/CtaOne';
import FooterOne from '../../layout/Footer/FooterOne';
import CryptoFooter from '../../layout/Footer/CryptoFooter';
import FooterSocial from '../../layout/Footer/FooterSocial';
import FooterTwo from '../../layout/Footer/FooterTwo';
import GameFooter from '../../layout/Footer/GameFooter';
import OurService from "../../components/services/OurService";
import FeatureFour from '../../components/features/FeatureFour';
import RequestForDemoSmall from '../../components/others/RequestForDemoSmall';
import { Link } from 'react-router-dom';

class HomeSassOne extends Component {
  render() {
    return (
      <Layout>
        <PageMeta title='Blockchain &amp; NFT Solutions - Company' />
        <Navbar navDark />
        <HeroOne />
        <FeatureFour />
        <WorkProcessTwo />
        <OurService/>
        {/* <FeatureImgContentFour /> */}
        {/* <FeatureImg /> */}
        {/* <TestimonialOne darkBg /> */}
        {/* <WorkProcess /> */}
        {/* <PriceOne paddingTop='pt-60 pb-120' haspriceTitleWithHeader /> */}
        {/* <FaqOne /> */}
        {/* <IntegrationOne /> */}
        {/* <CtaOne /> */}
        {/* <FooterOne footerGradient /> */}
        <RequestForDemoSmall/>


        

        <CryptoFooter footerGradient />
        
        
        
      </Layout>
    );
  }
}

export default HomeSassOne;
