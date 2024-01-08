import React, { useState, useEffect } from "react"
import styled from "styled-components"

const AnnouncementCardContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  label {
    margin-bottom: 5px;
  }

  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`

const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`

const AnnouncementCard = () => {
  const [newAnnouncement, setNewAnnouncement] = useState("")
  const [currentAnnouncement, setCurrentAnnouncement] = useState("")

  useEffect(() => {
    fetchAnnouncement()
  }, [])

  const fetchAnnouncement = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/announcement")
      const data = await response.json()
      setCurrentAnnouncement(data.announcement)
    } catch (error) {
      console.error("Error fetching announcement:", error)
    }
  }

  const handleAnnouncementChange = (event) => {
    setNewAnnouncement(event.target.value)
  }

  const handleUpdateAnnouncement = async () => {
    try {
      // Send the new announcement to the backend (POST request)
      const response = await fetch("http://localhost:5000/api/announcement", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ announcement: newAnnouncement }),
      })

      if (response.ok) {
        console.log("Announcement updated successfully!")
        fetchAnnouncement()
      } else {
        console.error("Error updating announcement:", response.statusText)
      }
    } catch (error) {
      console.error("Error updating announcement:", error)
    }
  }

  return (
    <AnnouncementCardContainer>
      <h2>Announcement Card</h2>
      <InputContainer>
        <label>New Announcement:</label>
        <input
          type="text"
          value={newAnnouncement}
          onChange={handleAnnouncementChange}
        />
      </InputContainer>
      <ButtonContainer>
        <StyledButton onClick={handleUpdateAnnouncement}>
          Update Announcement
        </StyledButton>
        <StyledButton onClick={fetchAnnouncement}>
          Fetch Announcement
        </StyledButton>
      </ButtonContainer>
      <div>
        <p>Current Announcement: {currentAnnouncement}</p>
      </div>
    </AnnouncementCardContainer>
  )
}

export default AnnouncementCard
