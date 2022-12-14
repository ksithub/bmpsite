import React from 'react';
import { Link } from 'react-router-dom';

const RequestForDemoSmall = () => {
    return (
        <>
            <section className="">
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
            </section>
        </>
    )
}

export default RequestForDemoSmall
