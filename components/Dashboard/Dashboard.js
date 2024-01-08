import React, { useState } from "react"
import styled from "styled-components"
import Sidebar from "./Sidebar"
import LogoUpdate from "./Logo"
import ChangeButtonTextCard from "./Button"
import FetchEmailsTable from "./Table"
import ProfileUpdateCard from "./Logo"
import AnnouncementCard from "./Announcement"

const DashboardContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap; /* Reverse the wrapping order for small screens */
  justify-content: space-between;
`

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("profile")

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "logo":
        return <LogoUpdate />
      case "button":
        return <ChangeButtonTextCard />
      case "emails":
        return <FetchEmailsTable />
      case "announcement":
        return <AnnouncementCard />
      default:
        return null
    }
  }

  return (
    <DashboardContainer>
      <Sidebar setActiveComponent={setActiveComponent} />
      {renderActiveComponent()}
    </DashboardContainer>
  )
}

export default Dashboard
