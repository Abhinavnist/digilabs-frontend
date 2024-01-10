import React, { useState, useEffect } from "react"
import styled from "styled-components"

const TableContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`

const TableHeader = styled.th`
  background-color: #4caf50;
  color: white;
  padding: 12px;
  text-align: left;
`

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`

const DeleteButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px;
  cursor: pointer;
`

const FetchEmailsTable = () => {
  const [emails, setEmails] = useState([])

  useEffect(() => {
    // Fetch email IDs from the backend (replace the URL with your actual API endpoint)
    const fetchEmails = async () => {
      try {
        const response = await fetch(
          "https://digilabs-backend-phi.vercel.app/api/get-emails"
        )
        const emailData = await response.json()
        setEmails(emailData.emails)
      } catch (error) {
        console.error("Error fetching emails:", error)
      }
    }

    fetchEmails()
  }, [])

  const handleDeleteEmail = async (id) => {
    try {
      const response = await fetch(
        `https://digilabs-backend-phi.vercel.app/api/email/delete/${id}`,
        {
          method: "DELETE",
        }
      )

      if (response.ok) {
        // Update the state to reflect the updated list of emails
        const updatedEmails = emails.filter((email) => email._id !== id)
        setEmails(updatedEmails)

        console.log("Email deleted successfully!")
      } else {
        console.error("Error deleting email:", response.statusText)
      }
    } catch (error) {
      console.error("Error deleting email:", error)
    }
  }

  return (
    <TableContainer>
      <h2>Emails Table</h2>
      <Table>
        <thead>
          <tr>
            <TableHeader>Email ID</TableHeader>
            <TableHeader>Action</TableHeader>
          </tr>
        </thead>
        <tbody>
          {emails.map((email) => (
            <TableRow key={email._id}>
              <TableCell>{email.email}</TableCell>
              <TableCell>
                <DeleteButton onClick={() => handleDeleteEmail(email._id)}>
                  Delete
                </DeleteButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  )
}

export default FetchEmailsTable
