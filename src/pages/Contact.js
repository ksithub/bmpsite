import React from 'react';
import PageHeader from '../components/common/PageHeader';
import PageMeta from '../components/common/PageMeta';
import ContactBox from '../components/contact/ContactBox';
import ContactFormTwo from '../components/contact/ContactFormTwo';
import CryptoFooter from '../layout/Footer/CryptoFooter';
import Navbar from '../layout/Header/Navbar';
import Layout from '../layout/Layout';

const Contact = () => {
  return (
    <Layout>
      <PageMeta title="Contact-Blockchain &amp; NFT Solutions - Company" />
      <Navbar navDark />
      <PageHeader
        title="Contact Us"
        desc="Let us know which of our services you’re interested in, and our dedicated team will get back to you shortly!"
      />
      <ContactFormTwo />
      <ContactBox />      
      <CryptoFooter
        style={{
          background:
            "url('assets/img/page-header-bg.svg')no-repeat bottom right",
        }}
      />
    </Layout>
  );
};

export default Contact;
