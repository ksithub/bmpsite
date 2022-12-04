import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OffCanvasMenu from './OffCanvasMenu';

const Navbar = ({ navDark }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const stickyheader = document.querySelector('.main-header');
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <>
      <header
        className={`main-header ${
          navDark ? 'position-absolute ' : ''
        } w-100 position-absolute `}
      >
        <nav
          className={`navbar navbar-expand-xl z-10 ${
            navDark ? 'navbar-dark' : 'navbar-light'
          } sticky-header ${scroll > headerTop ? 'affix' : ''}`}
        >
          <div className="container d-flex align-items-center justify-content-lg-between position-relative">
            <Link
              to="/"
              className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none"
            >
              <img
                src="assets/img/logo-white.png"
                alt="logo"
                className="img-fluid logo-white"
              />
              <img
                src="assets/img/logo-color.png"
                alt="logo"
                className="img-fluid logo-color"
              />
            </Link>
            <Link
              className="navbar-toggler position-absolute right-0 border-0"
              to="#offcanvasWithBackdrop"
              role="button"
            >
              <span
                className="far fa-bars"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBackdrop"
                aria-controls="offcanvasWithBackdrop"
              ></span>
            </Link>

            <div className="collapse navbar-collapse justify-content-center">
              <ul className="nav col-12 col-md-auto justify-content-center main-menu">
                <li className="nav-item dropdown">
                <li>
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                
                  {/* <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Home
                  </Link> */}
                  <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                    <div className="dropdown-grid rounded-custom width-full">
                      <div className="dropdown-grid-item">
                        <h6 className="drop-heading">Different Demos</h6>
                        <Link to="/" className="dropdown-link">
                          <span className="demo-list bg-primary rounded text-white fw-bold">
                            1
                          </span>
                          <div className="dropdown-info">
                            <div className="drop-title">Saas Company 1</div>
                            <p>
                              It's for <strong>SaaS Software</strong> Company
                            </p>
                          </div>
                        </Link>
                        <Link to="/home-sass-two" className="dropdown-link">
                          <span className="demo-list bg-primary rounded text-white fw-bold">
                            2
                          </span>
                          <div className="dropdown-info">
                            <div className="drop-title">Saas Company 2</div>
                            <p>
                              Modern <strong>Saas agency</strong>
                            </p>
                          </div>
                        </Link>
                        <Link to="/home-desktop-app" className="dropdown-link">
                          <span className="demo-list bg-primary rounded text-white fw-bold">
                            3
                          </span>
                          <div className="dropdown-info">
                            <div className="drop-title">Desktop App</div>
                            <p>
                              <strong>Web Software</strong> Company
                            </p>
                          </div>
                        </Link>
                        <Link to="/home-app-landing" className="dropdown-link">
                          <span className="demo-list bg-primary rounded text-white fw-bold">
                            4
                          </span>
                          <div className="dropdown-info">
                            <div className="drop-title">App Landing</div>
                            <p>
                              App and <strong>Software</strong> Landing
                            </p>
                          </div>
                        </Link>
                        <Link to="/home-soft-app" className="dropdown-link">
                          <span className="demo-list bg-primary rounded text-white fw-bold">
                            5
                          </span>
                          <div className="dropdown-info">
                            <div className="drop-title">
                              Software Application
                            </div>
                            <p>
                              IT solutions and <strong>SaaS Application</strong>
                            </p>
                          </div>
                        </Link>
                        <Link to="/home-startup" className="dropdown-link">
                          <span className="demo-list bg-primary rounded text-white fw-bold">
                            6
                          </span>
                          <div className="dropdown-info">
                            <div className="drop-title">Startup Agency</div>
                            <p>
                              Different type of <strong>Agency</strong>&lrm;
                            </p>
                          </div>
                        </Link>
                        <Link
                          to="/home-data-analysis"
                          className="dropdown-link"
                        >
                          <span className="demo-list bg-primary rounded text-white fw-bold">
                            7
                          </span>
                          <div className="dropdown-info">
                            <div className="drop-title">Data Analysis</div>
                            <p>
                              Software &amp; <strong>Data Analysis</strong>&lrm;
                            </p>
                          </div>
                        </Link>
                        <Link to="/home-app-two" className="dropdown-link">
                          <span className="demo-list bg-primary rounded text-white fw-bold">
                            8
                          </span>
                          <div className="dropdown-info">
                            <div className="drop-title">App Landing Two</div>
                            <p>
                              App and <strong>Software</strong> Landing
                            </p>
                          </div>
                        </Link>
                      </div>
                      <div className="dropdown-grid-item radius-right-side bg-light">
                        <h6 className="drop-heading">Different Demos</h6>
                        <Link to="/home-nine" className="dropdown-link">
                          <span className="demo-list bg-primary rounded text-white fw-bold">
                            9
                          </span>
                          <div className="dropdown-info">
                            <div className="drop-title">IT Solution</div>
                            <p>
                              <strong>Software</strong> & IT solutions, Saas
                            </p>
                          </div>
                        </Link>
                        <Link to="/home-ten" className="dropdown-link">
                          <span className="demo-list bg-primary rounded text-white fw-bold">
                            10
                          </span>
                          <div className="dropdown-info">
                            <div className="drop-title">Cyber Security</div>
                            <p>
                              <strong>Cyber Security</strong> landing page
                            </p>
                          </div>
                        </Link>
                        <Link to="/home-eleven" className="dropdown-link">
                          <span className="demo-list bg-primary rounded text-white fw-bold">
                            11
                          </span>
                          <div className="dropdown-info">
                            <div className="drop-title">Crypto Currency</div>
                            <p>
                              <strong>Crypto Currency</strong> landing page
                            </p>
                          </div>
                        </Link>
                        <Link to="/home-twelve" className="dropdown-link">
                          <span className="demo-list bg-primary rounded text-white fw-bold">
                            12
                          </span>
                          <div className="dropdown-info">
                            <div className="drop-title">Game Solution</div>
                            <p>
                              <strong>Game Server</strong> landing page
                            </p>
                          </div>
                        </Link>
                        <Link to="/home-thirteen" className="dropdown-link">
                          <span className="demo-list bg-primary rounded text-white fw-bold">
                            13
                          </span>
                          <div className="dropdown-info">
                            <div className="drop-title">Payment Gateway</div>
                            <p>
                              <strong>Payment Gateway</strong> landing page
                            </p>
                          </div>
                        </Link>
                        <Link to="/home-fourteen" className="dropdown-link">
                          <span className="demo-list bg-primary rounded text-white fw-bold">
                            14
                          </span>
                          <div className="dropdown-info">
                            <div className="drop-title">Digital Marketing</div>
                            <p>
                              <strong>Digital Marketing</strong> landing page
                            </p>
                          </div>
                        </Link>
                        <Link to="/home-fifteen" className="dropdown-link">
                          <span className="demo-list bg-primary rounded text-white fw-bold">
                            15
                          </span>
                          <div className="dropdown-info">
                            <div className="drop-title">Conference & Event</div>
                            <p>
                              <strong>Conference & Event</strong> landing
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                {/* <li>
                  <Link to="/services" className="nav-link">
                    Services
                  </Link>
                </li> */}
                <li>
                  <Link to="/about-us" className="nav-link">
                    About
                  </Link>
                </li>
                 
                

                { <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                    <div className="dropdown-grid rounded-custom width-full">
                      <div className="dropdown-grid-item width-full">                        
                        <Link to="/nft-services" className="dropdown-link px-0">
                          <span className="me-2">
                            <i className="far fa-feather"></i>
                          </span>
                          <div className="drop-title">NFT Services</div>
                        </Link>
                        <Link
                          to="/smart-contract-development-company"
                          className="dropdown-link px-0"
                        >
                          <span className="me-2">
                            <i className="far fa-file-lines"></i>
                          </span>
                          <div className="drop-title">Smart Contract Development</div>
                        </Link>
                        <Link to="/web3-development-company" className="dropdown-link">
                          <span className="me-2">
                            <i className="far fa-cube"></i>
                          </span>
                          <div className="drop-title">Web3 Development</div>
                        </Link>                        
                      </div>                      
                    </div>
                  </div>
                </li> }
                <li>
                  <Link to="/why-choose-us" className="nav-link">
                    Why Choose Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
              {/* <Link
                to="/login"
                className="btn btn-link text-decoration-none me-2"
              >
                Sign In
              </Link> */}
              <Link to="/contact-us" className="btn btn-primary">
                Contact
              </Link>
            </div>
            <OffCanvasMenu />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
