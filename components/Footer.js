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
    align-items: flex-start;
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
    width: 1216px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .top-content {
    display: flex;
    width: 512px;
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
    width: 1216px;
    height: 1px;
    background: #f1f1f2;
  }
  .bottom-container {
    display: flex;
    width: 1216px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .bottom-content {
    display: flex;
    align-items: flex-start;
    gap: 32px;
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
                      Mode UI is a comprehensive design system that empowers
                      designers and developers to create cohesive and visually
                      stunning user interfaces across various platforms and
                      devices
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
                  <div className="content-links"></div>
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
