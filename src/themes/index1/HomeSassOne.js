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
        


        <div className='container'>
          <div
            className='bg-dark shadow-lg p-5 mb-4 rounded-custom  mt-lg-4 mt-3'
            data-aos='fade-up'
            data-aos-delay='250'
          >
            <div className='row align-items-center justify-content-between'>
              <div className='col-lg-7'>
                <div className='cta-content'>
                  <h3 className='mb-2'>Have More Questions?</h3>
                  <p className='mb-lg-0 mb-xl-0'>
                    Drop us a query and we’ll get back to you soon...
                  </p>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='action-btns text-lg-end'>
                  <Link to='/contact-us' className='btn btn-light'>
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CryptoFooter footerGradient />
        
        
        
      </Layout>
    );
  }
}

export default HomeSassOne;
