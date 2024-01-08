import React, { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  border: 1px solid #e6e7e9;
  border-radius: 8px;
  max-width: 300px;
`

const EmailInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s;
  font-size: 14px;

  &:focus {
    border-color: #582066;
  }
`

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #582066;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #401751;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`

const Message = styled.div`
  margin-top: 12px;
  color: ${({ success }) => (success ? "#008000" : "#FF0000")};
`

const Card = () => {
  const [email, setEmail] = useState("")
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [message, setMessage] = useState("")

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
    setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value))
  }

  const handleSubmit = () => {
    if (isEmailValid) {
      fetch("http://localhost:5000/api/store-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Email sent successfully", data)
          setMessage("Email sent successfully")
          setEmail("")
        })
        .catch((error) => {
          console.error("Error sending email:", error)
          setMessage("Error sending email")
        })
    }
  }

  return (
    <Container>
      <MainCont>
        <h3>Get Connected with Us</h3>
        <EmailInput
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <SubmitButton
          onClick={handleSubmit}
          disabled={!isEmailValid}
        >
          Submit
        </SubmitButton>
        {message && (
          <Message success={message.includes("successfully")}>
            {message}
          </Message>
        )}
      </MainCont>
    </Container>
  )
}

export default Card
