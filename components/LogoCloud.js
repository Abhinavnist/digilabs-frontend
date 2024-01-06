import React from "react"
import Image from "next/legacy/image"
import styled from "styled-components"
const MainCont = styled.div`
  display: flex;

  padding: 96px 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  .row {
    display: flex;
    width: 1216px;
    justify-content: space-between;
    align-items: center;
  }
  .logo-container {
    display: flex;
    width: 1216px;
    justify-content: space-between;
    align-items: center;
  }
`

const LogoCloud = () => {
  return (
    <MainCont>
      <div className="logo-container">
        <div className="row">
          <div>
            <Image
              src={"/Clip path group.svg"}
              height={24}
              width={98}
              alt="logo"
            />
          </div>
          <div>
            <Image
              src={"/Company logo.svg"}
              height={24}
              width={68}
              alt="logo"
            />
          </div>
          <div>
            <Image
              src={"/image 20.svg"}
              height={24}
              width={124}
              alt="logo"
            />
          </div>
          <div>
            <Image
              src={"/Company logo(4).svg"}
              height={24}
              width={106}
              alt="logo"
            />
          </div>
          <div>
            <Image
              src={"/Company logo(6).svg"}
              height={24}
              width={98}
              alt="logo"
            />
          </div>
          <div>
            <Image
              src={"/image 18.svg"}
              height={24}
              width={120}
              alt="logo"
            />
          </div>
          <div>
            <Image
              src={"/Company logo(7).svg"}
              height={24}
              width={102}
              alt="logo"
            />
          </div>
          <div>
            <Image
              src={"/Company logo(8).svg"}
              height={24}
              width={132}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </MainCont>
  )
}

export default LogoCloud
