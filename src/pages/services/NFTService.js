import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import PageMeta from '../../components/common/PageMeta';
import FeatureImgContentThree from '../../components/feature-img-content/FeatureImgContentThree';
import FeatureImgEight from '../../components/features/FeatureImgEight';
import RequestForDemoSmall from '../../components/others/RequestForDemoSmall';
import PromoThree from '../../components/promo/PromoThree';
import CryptoFooter from '../../layout/Footer/CryptoFooter';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';
import TabOneNft from './services-components/Nft/TabOneNft.js';
import FeatureFourNft from './services-components/Nft/FeatureFourNft.js';

const NFTService = () => {
  return (
    <Layout>
      <PageMeta title='NFT Services - Blockchain &amp; NFT Solutions - Company - Blockchain Maker Place' />
      <Navbar navDark />
      <PageHeader
        title="Quality of NFT Services"
        desc="We provide NFT services that enable users to establish a feature-rich NFT marketplace on several blockchain networks like as Ethereum, BSC, and others."
      />
      <TabOneNft />
      {/* <FeatureFourNft />       */}
      <RequestForDemoSmall />
      <CryptoFooter  />
    </Layout>
  );
};

export default NFTService;
