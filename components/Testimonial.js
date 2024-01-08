import React from "react"
import Image from "next/legacy/image"
import styled from "styled-components"
const MainCont = styled.div`
  .tesimonial {
    display: flex;

    padding: 96px 80px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background: var(--White, #fff);
    @media (min-width: 768px) and (max-width: 992px) {
      transform: scale(0.8);
    }
  }
  .container {
    display: flex;
    /* width: 1280px; */
    padding: 32px;
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
    gap: 8px;
  }
  .column {
    display: flex;
    /* width: 824px; */
    flex-direction: column;
    align-items: center;
    gap: 48px;
  }
  .content {
    display: flex;
    /* width: 824px; */
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
  .text {
    align-self: stretch;
    color: var(--Neutral-100, #24282f);
    text-align: center;

    /* H300/32/Medium */
    font-family: Manrope;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px; /* 125% */
    @media (max-width: 600px) {
    }
  }
  .avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
  .avatar-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
  .base-avatar {
    display: flex;
    width: 64px;
    height: 64px;
    justify-content: center;
    align-items: center;
  }
  .image {
    width: 64px;
    height: 64px;
    flex-shrink: 0;
    border-radius: 64px;
    border: 2px solid var(--White, #fff);
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  }
  .avatar-content {
    display: flex;
    width: 134px;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
  .avatar-heading {
    align-self: stretch;
    color: var(--Neutral-50, #121417);
    text-align: center;

    /* H50/16/Medium */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 125% */
  }
  .avatar-p {
    align-self: stretch;
    color: var(--Neutral-400, #5a6475);
    text-align: center;

    /* H25/14/Regular */
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
  .rating {
    display: flex;
    padding: 4px 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;
  }
  .frame {
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }
`

const Testimonial = () => {
  return (
    <MainCont>
      <div className="tesimonial">
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="content">
                <Image
                  src={"/Company logo(4).svg"}
                  height={24}
                  width={98}
                  alt="logo"
                />
                <div className="text">
                  I had the pleasure of experiencing the next generation of card
                  solutions with this incredible product. It's refreshing to see
                  such innovation in the financial industry.
                </div>
              </div>
              <div className="avatar">
                <div className="avatar-name">
                  <div className="base-avatar">
                    <Image
                      src={"/Image.svg"}
                      height={64}
                      width={64}
                      alt="image"
                      className="image"
                    />
                  </div>
                  <div className="avatar-content">
                    <div className="avatar-heading">Nick Babich</div>
                    <div className="avatar-p">Lead Designer</div>
                  </div>
                </div>
                <div className="rating">
                  <div className="frame">
                    <Image
                      src={"/Frame.svg"}
                      height={16}
                      width={16}
                      alt="star"
                    />
                    <Image
                      src={"/Frame.svg"}
                      height={16}
                      width={16}
                      alt="star"
                    />
                    <Image
                      src={"/Frame.svg"}
                      height={16}
                      width={16}
                      alt="star"
                    />
                    <Image
                      src={"/Frame.svg"}
                      height={16}
                      width={16}
                      alt="star"
                    />
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

export default Testimonial
