import React from "react"
import styled from "styled-components"
const MainCont = styled.div`
  .announ {
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background: var(--White, #fff);
  }
  .Badges {
    display: flex;
    padding: 4px 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 240px;
    border: 1px solid var(--Neutral-1000, #e6e7e9);
    background: var(--Neutral-1300, #f1f1f2);
  }
  .Badges-text {
    color: var(--Neutral-200, #363c46);
    text-align: center;

    /* H05/12/Medium */
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 133.333% */
  }
  .announce {
    color: var(--Neutral-50, #121417);
    text-align: center;

    /* H25/14/Medium */
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
  }
  .border {
    border: 1px solid var(--Neutral-1000, #e6e7e9);
  }
`

const AnnouncementBar = () => {
  return (
    <MainCont>
      <div className="announ">
        <div className="Badges">
          <div className="Badges-text">Annoouncement</div>
        </div>
        <div className="announce">
          We are happy to announce that we raise $2 Million in Seed Funding
        </div>
      </div>
      <div className="border"></div>
    </MainCont>
  )
}

export default AnnouncementBar
