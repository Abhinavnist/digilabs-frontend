import React from "react"
import styled from "styled-components"
const MainCont = styled.div`
  .hello {
    background-color: red;
  }
`

const AnnouncementBar = () => {
  return (
    <MainCont>
      <div className="hello">AnnouncementBar</div>
    </MainCont>
  )
}

export default AnnouncementBar
