import React from 'react';
import { Link } from 'react-router-dom';



const TabOneExtend = () => {
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
                      <div className='feature-tab-info text-justify'>
                        <h3>WEB 3.0 Development Company</h3>
                        <p>
                        Web 3.0 is an emerging technology paradigm in which today’s digital World Wide Web of linked webpages evolves to include a wide range of new capabilities and functionalities, such as decentralized web apps and decentralized autonomous organizations (DAOs), which run on blockchain infrastructure. The next generation of internet architecture seeks to bridge the gap between the digital and physical worlds.
                        </p>
                        <p>
                        Our ambitious and passionate blockchain-skilled web3 developers are ready to take the call and support our clients at every step of the web3 development process. The developers of Blockchain Maker Place put their hands together to develop the best engaging web3 application with all the features that attract a wide audience base and also with all the functionalities that are required for your project. Get your high-quality web3 product in the blink of an eye!
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
                        src='assets/img/feature-hero-img.svg'
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

export default TabOneExtend;
