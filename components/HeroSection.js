import React from "react"
import Image from "next/legacy/image"
import styled from "styled-components"
const MainCont = styled.div`
  display: inline-flex;
  padding: 128px 80px 32px 80px;
  background: var(--White, #fff);
  justify-content: center;
  align-items: center;
  width: 100%;
  .hero {
    display: flex;
    width: 1216px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .content {
    display: flex;
    width: 832px;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  .seamless {
    width: 832px;
    color: var(--Pri-Purple-400, #582066);
    text-align: center;

    /* H50/16/Medium */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 125% */
  }
  .heading {
    align-self: stretch;
    color: var(--Neutral-50, #121417);
    text-align: center;

    /* H700/62/SemiBold */
    font-family: Manrope;
    font-size: 62px;
    font-style: normal;
    font-weight: 600;
    line-height: 72px; /* 116.129% */
  }
  .text {
    width: 648px;
    color: var(--Neutral-400, #5a6475);
    text-align: center;

    /* Para/Medium/Regular */
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
  }
  .button {
    display: flex;
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    background: var(--Pri-Purple-400, #582066);
    cursor: pointer;
  }
  .button-text {
    color: var(--White, #fff);
    text-align: center;

    /* H50/16/Medium */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 125% */
  }
  .no-card {
    width: 832px;
    color: var(--Neutral-400, #5a6475);
    text-align: center;

    /* H25/14/Medium */
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
  }
`

const HeroSection = () => {
  return (
    <MainCont>
      <div className="hero">
        <div className="content">
          <div className="seamless">Seamless experience</div>
          <div className="heading">
            Unleashing the Next Generation of Card Solutions
          </div>
          <p className="text">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </p>
        </div>
        <div>
          <div className="button">
            <div className="button-text">Unlock your Card</div>
            <Image
              src={"/arrow-right.svg"}
              height={20}
              width={20}
              alt="logo"
            />
          </div>
        </div>
        <div className="no-card">*No credit card required</div>
      </div>
    </MainCont>
  )
}

export default HeroSection
