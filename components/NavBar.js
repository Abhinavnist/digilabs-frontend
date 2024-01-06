import Image from "next/legacy/image"
import React from "react"
import styled from "styled-components"
const MainCont = styled.div`
  .navbar {
    display: flex;
    padding: 20px 80px;
    border-bottom: 1px solid var(--Neutral-1000, #e6e7e9);
    background: var(--White, #fff);
    justify-content: space-between;
  }
  .start {
    display: flex;
    padding: 8px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
  }
  .logo {
    width: 84px;
    height: 16px;
    cursor: pointer;
  }
  .card {
    display: flex;
    gap: 8px;
  }
  .nav-item {
    display: flex;
    align-items: center;
    gap: 32px;
    color: var(--Neutral-200, #363c46);
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 125% */
    cursor: pointer;
  }
  .login {
    display: flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    background: var(--Neutral-1200, #eeefef);
    cursor: pointer;
  }
  .login-text {
    color: var(--Neutral-400, #5a6475);
    text-align: center;

    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
  .log-in {
    width: 20px;
    height: 20px;
  }
`

const NavBar = () => {
  return (
    <MainCont>
      <div className="navbar">
        <div className="start">
          <div className="logo">
            <Image
              src={"/Logo.svg"}
              height={16}
              width={84}
              alt="logo"
              className="logo"
            />
          </div>
        </div>
        <div className="nav-item">
          <div className="card">
            <div>Card access</div>
            <Image
              src={"/chevron-down.svg"}
              height={20}
              width={20}
              alt="down"
              className="log-in"
            />
          </div>
          <div>Banking</div>
          <div>Processing</div>
          <div>About</div>
          <div>Carrier</div>
          <div>Contact</div>
        </div>
        <div className="login">
          <div className="login-text">Login</div>
          <Image
            src={"/log-in.svg"}
            height={20}
            width={20}
            alt="logo"
            className="log-in"
          />
        </div>
      </div>
    </MainCont>
  )
}

export default NavBar
