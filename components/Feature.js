import React from "react"
import Image from "next/legacy/image"
import styled from "styled-components"
const MainCont = styled.div`
  display: flex;
  width: 100vw;

  /* padding: 96px 80px; */
  justify-content: center;
  align-items: center;
  gap: 8px;
  .container {
    display: flex;
    /* width: 1280px;
    padding: 0px 32px; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .row {
    display: flex;
    /* width: 1216px; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 96px;
  }
  .subtitle {
    display: flex;
    /* width: 1216px; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    @media (max-width: 600px) {
      transform: scale(0.7);
    }
  }
  .content-head {
    display: flex;
    /* width: 704px; */
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
  .content {
    display: flex;
    /* width: 704px; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
  .heading {
    align-self: stretch;
    color: var(--Neutral-50, #121417);
    text-align: center;

    /* H400/40/SemiBold */
    font-family: Manrope;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px; /* 120% */
  }
  p {
    /* width: 576px; */
    color: var(--Neutral-400, #5a6475);
    text-align: center;

    /* Para/Medium/Regular */
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
  }
  .action {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .buttons {
    display: flex;
    align-items: flex-start;
  }
  .base-button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .text {
    color: var(--Pri-Purple-400, #582066);
    text-align: center;

    /* H50/16/Medium */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 125% */
  }
  .arrow {
    width: 20px;
    height: 20px;
    color: #582066;
  }
  .column {
    display: flex;
    align-items: center;
    gap: 32px;
    @media (min-width: 768px) and (max-width: 992px) {
      display: flex;
      flex-direction: column;
    }
    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
    }
  }
  .column-1 {
    display: flex;
    padding: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .column-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .content-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  .content-heading {
    width: 352px;
    color: var(--Neutral-50, #121417);
    text-align: center;

    /* H50/16/Medium */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 125% */
  }
  .content-para {
    width: 320px;
    color: var(--Neutral-400, #5a6475);
    text-align: center;

    /* Para/xSmall/Medium */
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
  }
  .big-icons {
    display: flex;
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 240px;
    background: var(--Pri-Purple-900, #f4eff6);
  }
`

const Feature = () => {
  return (
    <MainCont>
      <div className="container">
        <div className="row">
          <div className="subtitle">
            <div className="content-head">
              <div className="content">
                <p className="heading">
                  Elevating Card Programs with Cutting-Edge Technology
                </p>
                <p>
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="action">
                <div className="buttons">
                  <div className="base-button">
                    <div className="text">Compare all Pro features</div>
                    <Image
                      src={"/arrow-right(1).svg"}
                      height={20}
                      width={20}
                      alt="logo"
                      className="arrow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="column-1">
              <div className="column-content">
                <div className="big-icons">
                  <Image
                    src={"/globe.svg"}
                    height={24}
                    width={24}
                    alt="logo"
                  />
                </div>
                <div className="content-text">
                  <div className="content-heading">Globally Accepted</div>
                  <div className="content-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                  </div>
                </div>
              </div>
            </div>
            <div className="column-1">
              <div className="column-content">
                <div className="big-icons">
                  <Image
                    src={"/key.svg"}
                    height={24}
                    width={24}
                    alt="logo"
                  />
                </div>
                <div className="content-text">
                  <div className="content-heading">Biometric Integrated</div>
                  <div className="content-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                  </div>
                </div>
              </div>
            </div>
            <div className="column-1">
              <div className="column-content">
                <div className="big-icons">
                  <Image
                    src={"/globe.svg"}
                    height={24}
                    width={24}
                    alt="logo"
                  />
                </div>
                <div className="content-text">
                  <div className="content-heading">Fully Secured</div>
                  <div className="content-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainCont>
  )
}

export default Feature
