import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import PageMeta from '../../components/common/PageMeta';
import FeatureImgContentThree from '../../components/feature-img-content/FeatureImgContentThree';
import FeatureImgEight from '../../components/features/FeatureImgEight';
import RequestForDemo from '../../components/others/RequestForDemo';
import RequestForDemoSmall from '../../components/others/RequestForDemoSmall';
import PromoThree from '../../components/promo/PromoThree';
import CryptoFooter from '../../layout/Footer/CryptoFooter';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';
import TabOneSmart from './services-components/SmartContract/TabOneSmart.js';
import FeatureFourSmart from './services-components/SmartContract/FeatureFourSmart.js';

const SmartContractDevelopment = () => {
  return (
    <Layout>
      <PageMeta title='Smart Contract Development - Blockchain &amp; NFT Solutions - Company - Blockchain Maker Place' />
      <Navbar navDark />
      <PageHeader
        title="Quality of Smart Contract Development Service"
        desc="Leading Smart contract development services. We delivered custom-built Smart contracts on public, private, and hybrid blockchains across numerous industries."
      />
         
      <TabOneSmart/>
      <PromoThree hasBg />
      <RequestForDemoSmall />
      <CryptoFooter  />
    </Layout>
  );
};

export default SmartContractDevelopment;
