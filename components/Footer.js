import React from "react"
import Image from "next/legacy/image"
import styled from "styled-components"
const MainCont = styled.div`
  .footer {
    display: flex;
    padding: 96px 80px 40px 80px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-top: 1px solid var(--Neutral-1000, #e6e7e9);
    background: var(--White, #fff);
  }
  .container {
    display: flex;
    padding: 0px 32px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .row {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 96px;
  }
  .top-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 64px;
  }
  .top-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 64px;
  }
  .content-container {
    display: flex;
    /* width: 1216px; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .top-content {
    display: flex;
    /* width: 512px; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
  .top-text {
    align-self: stretch;
    color: var(--Neutral-400, #5a6475);
    text-align: center;

    /* Para/Small/Medium */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 175% */
  }
  .divider {
    /* width: 1216px; */
    height: 1px;
    background: #f1f1f2;
  }
  .bottom-container {
    display: flex;
    /* width: 1216px; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .bottom-content {
    display: flex;
    align-items: flex-start;
    gap: 32px;
    @media (min-width: 768px) and (max-width: 992px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-self: flex-start;
    }
    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
      align-self: flex-start;
      /* margin-left: 370px; */
    }
  }
  .bottom-content-container {
    display: flex;
    width: 208px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
  .bottom-container-heading {
    align-self: stretch;
    color: var(--Neutral-100, #24282f);

    /* H50/16/Bold */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 125% */
  }
  .content-links {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .social-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
  .social-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
  .social-group {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }
  .copyright {
    /* width: 1216px; */
    color: var(--Neutral-400, #5a6475);
    text-align: center;

    /* H25/14/Regular */
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
`

const Footer = () => {
  return (
    <MainCont>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="top-container">
              <div className="top-content">
                <div className="content-container">
                  <div className="top-content">
                    <Image
                      src={"/Logo.svg"}
                      height={16}
                      width={84}
                      alt="logo"
                      className="logo"
                    />
                    <div className="top-text">
                      Mode UI is a comprehensive design system that empowers{" "}
                      <br />
                      designers and developers to create cohesive and visually
                      stunning <br /> user interfaces across various platforms
                      and devices
                    </div>
                    <div className="divider"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-container">
              <div className="bottom-content">
                <div className="bottom-content-container">
                  <div className="bottom-container-heading">Company</div>
                  <div className="content-links">
                    <span>About us</span>
                    <span>Pricing</span>
                    <span>Contact Us</span>
                    <span>Feature</span>
                  </div>
                </div>
                <div className="bottom-content-container">
                  <div className="bottom-container-heading">Product</div>
                  <div className="content-links">
                    <span>Resource</span>
                    <span>Legal</span>
                    <span>Contact Us</span>
                    <span>Feature</span>
                  </div>
                </div>
                <div className="bottom-content-container">
                  <div className="bottom-container-heading">Resource</div>
                  <div className="content-links">
                    <span>About us</span>
                    <span>Pricing</span>
                    <span>Contact Us</span>
                    <span>Feature</span>
                  </div>
                </div>
                <div className="bottom-content-container">
                  <div className="bottom-container-heading">Legal</div>
                  <div className="content-links">
                    <span>About us</span>
                    <span>Pricing</span>
                    <span>Contact Us</span>
                    <span>Feature</span>
                  </div>
                </div>
                <div className="bottom-content-container">
                  <div className="bottom-container-heading">Support</div>
                  <div className="content-links">
                    <span>About us</span>
                    <span>Pricing</span>
                    <span>Contact Us</span>
                    <span>Feature</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="social-container">
              <div className="social-content">
                <div className="social-group">
                  <Image
                    src={"/Frame(1).svg"}
                    height={20}
                    width={20}
                    alt="logo"
                  />
                  <Image
                    src={"/Social.svg"}
                    height={20}
                    width={20}
                    alt="logo"
                  />
                  <Image
                    src={"/Social(1).svg"}
                    height={20}
                    width={20}
                    alt="logo"
                  />
                </div>
                <div className="copyright">
                  © 2023 Mode UI Inc. All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainCont>
  )
}

export default Footer
