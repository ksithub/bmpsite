import React from 'react';
import { Link } from 'react-router-dom';



const TabOneNft = () => {
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
                      <img
                        src='assets/img/undraw_creative_team_nft.svg'
                        alt='feature tab'
                        className='img-fluid mt-4 mt-lg-0 mt-xl-0'
                      />
                    </div>
                    <div className='col-lg-6'>
                      <div className='feature-tab-info text-justify'>
                        <h3>NFT Service Company - Blockchain Maker Place</h3>
                        <p>
                        Creating an NFT is simple on any supported blockchain, such as Ethereum, Tron, Solana, and Binance Smart Chain, All that you'll need is an Integrated crypto wallet that supports NFTs and an NFT marketplace account. Metamask, Trust Wallet, and Coinbase are three wallets that are compatible with NFTs.
                        </p>
                        <p>
                        In terms of its significance in enhancing control over intellectual property for the art sector, NFTs are a one-of-a-kind solution. It also gives you access to a larger global network of collectors that are interested in NFT and other collectibles. As a result, using an NFT minting technique to democratize ownership, sales, and acquisitions of unique digital assets could be a viable option.
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
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TabOneNft;
