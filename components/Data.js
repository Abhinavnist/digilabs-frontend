import React from "react"
import Image from "next/legacy/image"
import styled from "styled-components"
const MainCont = styled.div`
  .data {
    display: flex;
    padding: 96px 80px;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .container {
    display: flex;
    padding: 0px 32px;

    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .row {
    display: flex;

    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .column {
    display: flex;
    align-items: flex-start;
    gap: 32px;
  }
  .matric-box {
    display: flex;
    padding: 16px;

    justify-content: center;
    align-items: center;
    gap: 25px;
    @media (min-width: 768px) and (max-width: 992px) {
      display: flex;
      flex-direction: column;
      gap: 32px;
      padding: 16px;
    }
    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
      gap: 32px;
      padding: 16px;
    }
  }
  .content {
    display: flex;
    width: 248px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
  .number {
    align-self: stretch;
    color: var(--Pri-Purple-400, #582066);
    text-align: center;

    /* H500/48/SemiBold */
    font-family: Manrope;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 56px; /* 116.667% */
  }
  .content-data {
    display: flex;
    width: 248px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .content-heading {
    width: 248px;
    color: var(--Neutral-50, #121417);
    text-align: center;

    /* H50/16/Medium */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 125% */
  }
  p {
    width: 248px;
    color: var(--Neutral-400, #5a6475);
    text-align: center;

    /* Para/Small/Regular */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 175% */
  }
`

const Data = () => {
  return (
    <MainCont>
      <div className="data">
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="matric-box">
                <div className="content">
                  <div className="number">2 Million</div>
                  <div className="content-data">
                    <div className="content-heading">Customers</div>
                    <p>
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut
                    </p>
                  </div>
                </div>
                <div className="content">
                  <div className="number">1K</div>
                  <div className="content-data">
                    <div className="content-heading">Downloads</div>
                    <p>
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut
                    </p>
                  </div>
                </div>
                <div className="content">
                  <div className="number">$73 Million</div>
                  <div className="content-data">
                    <div className="content-heading">Transaction</div>
                    <p>
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut
                    </p>
                  </div>
                </div>
                <div className="content">
                  <div className="number">2.0</div>
                  <div className="content-data">
                    <div className="content-heading">Latest Version</div>
                    <p>
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut
                    </p>
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

export default Data
