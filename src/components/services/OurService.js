import React from "react";
import { Link } from "react-router-dom";

const OurService = () => {
  return (
    <section className="cyber-features pt-100 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-12">
            <div className="section-heading text-center mb-5">
              {/* <h5 className="h6 text-primary">Service</h5> */}
              <h2>High Quality Providing Solution & Service</h2>
              <p>
                
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="cyber-single-service bg-white rounded-custom mb-30">
              <div className="feature-icon pb-5 rounded bg-primary-soft text-primary mb-4">
                <i className="far fa-feather"></i>
              </div>
              <div className="cyber feature-info-wrap">
                <h3 className="h5">NFT Services</h3>
                <p>
                Are you looking to generate a unique NFT collection? If so, you're in the right place! NFTs, or non-fungible tokens, are a revolutionary new way to collect digital art, music, games, and more
                </p>
              </div>
              <Link
                to="/nft-services"
                className="link-with-icon text-decoration-none"
              >
                Explore More <i className="far fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cyber-single-service bg-white rounded-custom mb-30">
              <div className="feature-icon pb-5 rounded bg-primary-soft text-primary mb-4">
                <i className="far fa-file-lines"></i>
              </div>
              <div className="cyber feature-info-wrap">
                <h3 className="h5">Smart Contract Development</h3>
                <p>
                Are you looking for a Smart Contract Development Company? Look no further! We specialize in building custom smart contracts and (dApps) using top blockchain
                </p>
              </div>
              <Link
                to="/smart-contract-development-company"
                className="link-with-icon text-decoration-none"
              >
                Explore More <i className="far fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cyber-single-service bg-white rounded-custom mb-30">
              <div className="feature-icon pb-5 rounded bg-primary-soft text-primary mb-4">
                <i className="far fa-cube"></i>
              </div>
              <div className="cyber feature-info-wrap">
                <h3 className="h5">Web3 Development</h3>
                <p>
                Are you looking for a Web3 Development Company to help you create innovative and cutting-edge solutions? Look no further! We specialize in Web3 development,
                </p>
              </div>
              <Link
                to="/web3-development-company"
                className="link-with-icon text-decoration-none"
              >
                Explore More <i className="far fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default OurService;
