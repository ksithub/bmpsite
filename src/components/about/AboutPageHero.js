import React from 'react';
import { Link } from 'react-router-dom';

const AboutPageHero = () => {
  return (
    <>
      <section
        className='about-header-section ptb-150 pb-20 position-relative overflow-hidden bg-dark'
        style={{
          background:
            "url('assets/img/page-header-bg.svg')no-repeat center right",
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='section-heading-wrap d-flex justify-content-between z-5 position-relative'>
                <div className='about-content-left'>
                  <div className='about-info mb-5'>
                    <h1 className='fw-bold display-5'>
                      Grow your Business & Customer Satisfaction with Blockchain Maker Place
                    </h1>
                    <p className='lead'>
                      Dynamically disintermediate technically sound & Creative Teams
                      with compelling quality deliver projects.{' '}
                    </p>
                    <Link to='/contact-us' className='btn btn-primary mt-4 me-3'>
                      Let's cup of coffee
                    </Link>                    
                  </div>                 
                </div>                
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z-2 py-5'></div>
      </section>
    </>
  );
};

export default AboutPageHero;
