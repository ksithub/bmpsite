import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import PageMeta from '../../components/common/PageMeta';
import FeatureImgContentThree from '../../components/feature-img-content/FeatureImgContentThree';
import FeatureImgEight from '../../components/features/FeatureImgEight';
import RequestForDemoSmall from '../../components/others/RequestForDemoSmall';
import PromoThree from '../../components/promo/PromoThree';
import CryptoFooter from '../../layout/Footer/CryptoFooter';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';
import TabOneWeb3 from './services-components/Web3/TabOneWeb3';
import FeatureFourWeb3 from './services-components/Web3/FeatureFourWeb3';


const Web3Development = () => {
  return (
    <Layout>
      <PageMeta title='Web3 Development - Blockchain &amp; NFT Solutions - Company - Blockchain Maker Place' />
      <Navbar navDark />
      <PageHeader
        title="Premium Web3 Development Company"
        desc="Avail the advanced web3 solutions in the market from the industry-leading web3.0 development company with the team of experts in web3 development."
      />   
      <TabOneWeb3 />
      {/* <FeatureImgEight paddingTop />
      <FeatureImgContentThree /> */}
      <FeatureFourWeb3/>
      <PromoThree hasBg />
      <RequestForDemoSmall />
      <CryptoFooter footerLight />
    </Layout>
  );
};

export default Web3Development;
