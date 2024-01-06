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
  }
  .container {
    display: flex;
    width: 1280px;
    padding: 0px 32px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .row {
    display: flex;
    width: 1216px;
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

    /* H400/40/SemiBold */
    font-family: Manrope;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px; /* 120% */
  }
  .action {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;
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
  }
`

const CallToAction = () => {
  return (
    <MainCont>
      <div className="call-to-action">
        <div className="container">
          <div className="row">
            <div className="subtittle">
              <div className="subtittle-heading">
                Unlock Limitless Possibilities with Our New Card Solutions
              </div>
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
                  <div className="button-text-2">Unlock your card</div>
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
