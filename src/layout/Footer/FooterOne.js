import React from 'react';
import { Link } from 'react-router-dom';

const FooterOne = ({ footerLight, style, footerGradient }) => {
  return (
    <>
      <footer className='footer-section'>
        <div
          className={`footer-top ${footerLight ? 'footer-light' : 'bg-dark'} ${
            footerGradient ? 'bg-gradient' : ''
          }  text-white ptb-120`}
          style={style}
        >
          <div className='container'>
            <div className='row text-center justify-content-center'>
              <div className='col-md-12 col-lg-4 mb-md-4 mb-lg-0'>
                <div className='footer-single-col'>
                  <div className='footer-single-col mb-4 center-block'>
                    <img
                      src='assets/img/logo-white.png'
                      alt='logo'
                      className='img-fluid logo-white center-block'
                    />
                    <img
                      src='assets/img/logo-color.png'
                      alt='logo'
                      className='img-fluid logo-color center-block'
                    />
                  </div>
                  <p>
                    Our latest news, articles, and resources, we will sent to
                    your inbox weekly.
                  </p>

                  <form className='newsletter-form position-relative d-block d-lg-flex d-md-flex'>
                    <input
                      type='text'
                      className='input-newsletter form-control me-2'
                      placeholder='Enter your email'
                      name='email'
                      required=''
                      autoComplete='off'
                    />
                    <input
                      type='submit'
                      value='Subscribe'
                      data-wait='Please wait...'
                      className='btn btn-primary mt-3 mt-lg-0 mt-md-0'
                    />
                  </form>
                  <div className='ratting-wrap mt-4'>
                    <h6 className='mb-0'>10/10 Overall rating</h6>
                    <ul className='list-unstyled rating-list list-inline mb-0'>
                      <li className='list-inline-item'>
                        <i className='fas fa-star text-warning'></i>
                      </li>
                      <li className='list-inline-item'>
                        <i className='fas fa-star text-warning'></i>
                      </li>
                      <li className='list-inline-item'>
                        <i className='fas fa-star text-warning'></i>
                      </li>
                      <li className='list-inline-item'>
                        <i className='fas fa-star text-warning'></i>
                      </li>
                      <li className='list-inline-item'>
                        <i className='fas fa-star text-warning'></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div
          className={`footer-bottom ${
            footerLight ? 'footer-light' : 'bg-dark'
          } ${footerGradient ? 'bg-gradient' : ''} text-white py-4`}
        >
          <div className='container'>
            <div className='row justify-content-between align-items-center'>
              <div className='col-md-7 col-lg-7'>
                <div className='copyright-text'>
                  <p className='mb-lg-0 mb-md-0'>
                    &copy; 2022 Blockchain Maker Place
                    
                  </p>
                </div>
              </div>
              <div className='col-md-4 col-lg-4'>
                <div className='footer-single-col text-start text-lg-end text-md-end'>
                  <ul className='list-unstyled list-inline footer-social-list mb-0'>
                    <li className='list-inline-item'>
                      <Link to='/#'>
                        <i className='fab fa-facebook-f'></i>
                      </Link>
                    </li>
                    <li className='list-inline-item'>
                      <Link to='/#'>
                        <i className='fab fa-instagram'></i>
                      </Link>
                    </li>
                    <li className='list-inline-item'>
                      <Link to='/#'>
                        <i className='fab fa-linkedin'></i>
                      </Link>
                    </li>
                    <li className='list-inline-item'>
                      <Link to='/#'>
                        <i className='fab fa-youtube'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
