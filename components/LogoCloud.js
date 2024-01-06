import React from "react"
import Image from "next/legacy/image"
import styled from "styled-components"
const MainCont = styled.div`
  display: flex;
  padding: 96px 80px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  .Logo-row {
    display: flex;
    /* width: 1216px; */
    justify-content: center;
    align-items: center;
    gap: 32px;
    @media (min-width: 768px) and (max-width: 992px) {
      display: grid;
      grid-template-columns: repeat(5, 1fr);

      gap: 32px;
      justify-content: center;
    }
    @media (max-width: 600px) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);

      gap: 32px;
    }
  }

  .logocol1,
  .logocol2 {
    display: flex;
    gap: 32px;
    padding: 8px;
  }
  .logo-container {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`

const LogoCloud = () => {
  return (
    <MainCont>
      <div className="logo-container">
        <div className="Logo-row">
          <Image
            src={"/Clip path group.svg"}
            height={24}
            width={98}
            alt="logo"
          />

          <Image
            src={"/Company logo.svg"}
            height={24}
            width={68}
            alt="logo"
          />

          <Image
            src={"/image 20.svg"}
            height={24}
            width={124}
            alt="logo"
          />

          <Image
            src={"/Company logo(4).svg"}
            height={24}
            width={106}
            alt="logo"
          />

          <Image
            src={"/Company logo(6).svg"}
            height={24}
            width={98}
            alt="logo"
          />

          <Image
            src={"/image 18.svg"}
            height={24}
            width={120}
            alt="logo"
          />

          <Image
            src={"/Company logo(7).svg"}
            height={24}
            width={102}
            alt="logo"
          />

          <Image
            src={"/Company logo(8).svg"}
            height={24}
            width={132}
            alt="logo"
          />
        </div>
      </div>
    </MainCont>
  )
}

export default LogoCloud
