import React, { useState, useEffect } from "react"
import styled from "styled-components"

const ButtonCardContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const Title = styled.h2`
  text-align: center;
  color: #333;
`

const InputWrapper = styled.div`
  margin-bottom: 20px;
`

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`

const ButtonWrapper = styled.div`
  text-align: center;
`

const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
`

const CurrentText = styled.p`
  text-align: center;
  color: #777;
`

const ChangeButtonTextCard = () => {
  const [newButtonText, setNewButtonText] = useState("")
  const [currentButtonText, setCurrentButtonText] = useState("Default Text")

  useEffect(() => {
    // Fetch the current button text from the backend (GET request)
    const fetchButtonText = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/button")
        const buttonTextData = await response.json()
        setCurrentButtonText(buttonTextData.name)
      } catch (error) {
        console.error("Error fetching button text:", error)
      }
    }

    fetchButtonText()
  }, [])

  const handleChangeText = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/button", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newButtonText }),
      })

      if (response.ok) {
        setCurrentButtonText(newButtonText)
        setNewButtonText("")
        console.log("Button text updated successfully!")
      } else {
        console.error("Error updating button text:", response.statusText)
      }
    } catch (error) {
      console.error("Error updating button text:", error)
    }
  }

  return (
    <ButtonCardContainer>
      <Title>Change Button Text</Title>
      <InputWrapper>
        <StyledInput
          type="text"
          value={newButtonText}
          onChange={(e) => setNewButtonText(e.target.value)}
          placeholder="Enter new text"
        />
      </InputWrapper>
      <ButtonWrapper>
        <StyledButton onClick={handleChangeText}>
          Update Button Text
        </StyledButton>
      </ButtonWrapper>
      <CurrentText>Current Button Text: {currentButtonText}</CurrentText>
    </ButtonCardContainer>
  )
}

export default ChangeButtonTextCard
