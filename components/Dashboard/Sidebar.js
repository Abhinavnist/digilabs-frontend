import React from "react"
import styled from "styled-components"

const SidebarContainer = styled.div`
  width: 200px;
  height: 100vh;
  background-color: #333;
  color: white;
  padding: 20px;
  @media (max-width: 992px) {
    width: 100%;
    height: 20vh;
  }
`

const SidebarItem = styled.div`
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const Sidebar = ({ setActiveComponent }) => {
  const handleItemClick = (component) => {
    setActiveComponent(component)
  }

  return (
    <SidebarContainer>
      <SidebarItem onClick={() => handleItemClick("button")}>
        Change Button Text
      </SidebarItem>
      <SidebarItem onClick={() => handleItemClick("emails")}>
        Fetch Emails
      </SidebarItem>
      <SidebarItem onClick={() => handleItemClick("announcement")}>
        Announcement
      </SidebarItem>
      <SidebarItem onClick={() => handleItemClick("logo")}>
        Update Logo
      </SidebarItem>
    </SidebarContainer>
  )
}

export default Sidebar
