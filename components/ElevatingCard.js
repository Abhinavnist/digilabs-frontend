import React from "react"
import Image from "next/legacy/image"
import styled from "styled-components"
const MainCont = styled.div`
  .elevating {
    display: flex;

    /* width: 1440px; */
    padding: 96px 80px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
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
  }
  .content {
    display: flex;
    /* width: 704px; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
  .content-heading {
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
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }
  p {
    /* width: 576px; */
    color: var(--Pri-Purple-400, #582066);
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
  .action {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }
  .card {
    display: flex;
    /* width: 592px; */
    height: 490px;
    padding: 33px 87px 0px 39px;
    align-items: center;
    flex-shrink: 0;
  }
  .column {
    display: flex;
    /* width: 1216px; */

    justify-content: center;
    align-items: center;
    gap: 32px;
    @media (min-width: 768px) and (max-width: 992px) {
      display: flex;
      flex-direction: column;
      display: flex;
      /* width: 1216px; */
      align-items: center;
      gap: 32px;
    }
    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
      display: flex;

      align-items: center;
      gap: 32px;
    }
  }
`

const ElevatingCard = () => {
  return (
    <MainCont>
      <div className="elevating">
        <div className="container">
          <div className="row">
            <div className="subtitle">
              <div className="content">
                <div className="content-heading">
                  Elevating Card Programs with <br /> Cutting-Edge Technology
                </div>
                <p>
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut <br /> labore et dolore magna aliqua.
                </p>
              </div>
              <div className="action">
                <div className="button">
                  <div className="button-text">Compare all Pro features</div>
                  <Image
                    src={"/arrow-right(1).svg"}
                    height={20}
                    width={20}
                    alt="arrow-right"
                    className="arrow"
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <Image
                src={"/elevating card.svg"}
                height={490}
                width={592}
                alt="arrow-right"
                className="card"
              />
              <Image
                src={"/elevating card 2.svg"}
                height={490}
                width={592}
                alt="arrow-right"
                className="card"
              />
            </div>
          </div>
        </div>
      </div>
    </MainCont>
  )
}

export default ElevatingCard
