import Image from "next/legacy/image"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Link from "next/link"

const MainCont = styled.div`
  .navbar {
    display: flex;
    padding: 1% 5%;
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

    @media (max-width: 992px) {
      display: ${({ showMenu }) => (showMenu ? "flex" : "none")};
      flex-direction: column;
      position: absolute;
      top: 60px; /* Adjust as needed */
      left: 0;
      width: 100%;
      background: var(--White, #fff);
      padding: 20px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      z-index: 1;
    }
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

  .menu-icon {
    display: none;
    cursor: pointer;

    @media (min-width: 0px) and (max-width: 992px) {
      display: block;
    }
  }
`

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [logo, setLogo] = useState(null)
  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/photo")
        const logoData = await response.json()
        setLogo(logoData.photo)
      } catch (error) {
        console.error("Error fetching logo:", error)
      }
    }

    fetchLogo()
  }, [])

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const closeMenu = () => {
    setShowMenu(false)
  }
  return (
    <MainCont showMenu={showMenu}>
      <div className="navbar">
        <div className="start">
          <div className="logo">
            {logo ? (
              <Image
                src={logo}
                height={16}
                width={84}
                alt="logo"
                className="logo"
              />
            ) : (
              <Image
                src="/Logo.svg"
                height={16}
                width={84}
                alt="logo"
                className="logo"
              />
            )}
          </div>
        </div>
        <div className="nav-item">
          <div className="card">
            <div>Card access</div>
            <Image
              src="/chevron-down.svg"
              height={20}
              width={20}
              alt="down"
              className="log-in"
            />
          </div>
          <Link
            href="/"
            onClick={closeMenu}
          >
            Banking
          </Link>
          <Link
            href="/"
            onClick={closeMenu}
          >
            Processing
          </Link>
          <Link
            href="/"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="/"
            onClick={closeMenu}
          >
            Carrier
          </Link>
          <Link
            href="/"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
        <button className="login">
          <div className="login-text">Login</div>
          <Image
            src={"/log-in.svg"}
            height={20}
            width={20}
            alt="logo"
            className="log-in"
          />
        </button>
        <div
          className="menu-icon"
          onClick={toggleMenu}
        >
          ☰
        </div>
      </div>
    </MainCont>
  )
}

export default NavBar
