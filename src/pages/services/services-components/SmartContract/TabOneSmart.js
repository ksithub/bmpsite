import React from 'react';
import { Link } from 'react-router-dom';



const TabOneSmart = () => {
  return (
    <>
      <section className='feature-tab-section ptb-120 bg-light'>
        <div className='container'>          
          <div className='row'>
            <div className='col-12'>
            <div
                  className='tab-pane fade active show'
                  id='tab-1'
                  role='tabpanel'
                >
                  <div className='row justify-content-center align-items-center justify-content-around'>
                    <div className='col-lg-6'>
                      <div className='feature-tab-info '>
                        <h3>Smart Contract Development Company</h3>
                        <p className='text-justify'>
                        Smart contracts are programs or self-executing protocols written on the blockchain network that gets executed automatically when prescribed conditions are met. The Smart contract automatically records the transaction details in a traceable, transparent, and immutable manner on the distributed ledger or blockchain network. The purpose of a smart contract is to simplify the business processes or trade between anonymous or known parties without the need for middlemen
                        </p>
                        <p className='text-justify'>
                        Smart contract development company, helps enterprises build a customized and robust smart contract protocol to automate and enhance their business operations without compromising reliability and authenticity. Our smart contract developers are highly proficient in developing self-enforcing protocols or smart contracts to improve the efficiency and transparency of enterprise operations while helping them save considerable costs and time. We have delivered impeccable Smart contract development services on various blockchain networks for many enterprises.
                        </p>
                        <Link
                          to='/contact-us'
                          className='read-more-link text-decoration-none mt-4 d-block'
                        >
                          Contact Now
                          <i className='far fa-arrow-right ms-2'></i>
                        </Link>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <img
                        src='assets/img/undraw_agreement_re_smart_contract.svg'
                        alt='feature tab'
                        className='img-fluid mt-4 mt-lg-0 mt-xl-0'
                      />
                    </div>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TabOneSmart;
