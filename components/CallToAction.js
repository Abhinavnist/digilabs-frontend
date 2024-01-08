import React from "react"
import Image from "next/legacy/image"
import styled from "styled-components"
const MainCont = styled.div`
  .call-to-action {
    display: flex;

    padding: 96px 80px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    @media (min-width: 768px) and (max-width: 992px) {
      transform: scale(0.6);
    }
    /* @media (max-width: 600px) {
      transform: scale(0.5);
    } */
  }
  .container {
    display: flex;
    /* width: 1280px; */
    padding: 0px 32px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .row {
    display: flex;
    /* width: 1216px; */
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
  .subtittle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;
  }
  .subtittle-heading {
    color: var(--Neutral-50, #121417);
    text-align: center;
    font-family: Manrope;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px;
    @media (max-width: 600px) {
      flex: 1 0 0;
      font-size: 2rem;
      font-style: normal;
      font-weight: 600;
      line-height: 2.5rem;
    }
  }
  .action {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    @media (max-width: 600px) {
      flex-direction: column;
      width: 21.4375rem;
      gap: 0.5rem;
    }
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .base-button {
    display: flex;
    padding: 12px 16px;
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
  .base-button-2 {
    display: flex;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    background: var(--Neutral-1200, #eeefef);
  }
  .button-text-2 {
    color: var(--Neutral-400, #5a6475);
    text-align: center;

    /* H50/16/Medium */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 125% */
    cursor: pointer;
  }
`

const CallToAction = () => {
  return (
    <MainCont>
      <div className="call-to-action">
        <div className="container">
          <div className="row">
            <div className="subtittle">
              <p className="subtittle-heading">
                Unlock Limitless Possibilities with Our New Card Solutions
              </p>
            </div>
            <div className="action">
              <div className="button">
                <div className="base-button">
                  <div className="button-text">Unlock your card</div>
                  <Image
                    src={"/credit-card.svg"}
                    height={20}
                    width={20}
                    alt="credit-card"
                  />
                </div>
              </div>
              <div className="button">
                <div className="base-button-2">
                  <div className="button-text-2">Customer Support</div>
                  <Image
                    src={"/headphones.svg"}
                    height={20}
                    width={20}
                    alt="credit-card"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainCont>
  )
}

export default CallToAction
