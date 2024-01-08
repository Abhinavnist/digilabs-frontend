import React, { useState, useEffect } from "react"
import styled from "styled-components"

const ProfileCardContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    border-radius: 4px;
  }

  input[type="file"] {
    margin-bottom: 10px;
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
`

const ProfileUpdateCard = () => {
  const [profile, setProfile] = useState({}) // Store the current profile
  const [newPhoto, setNewPhoto] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/profile")
        const profileData = await response.json()
        setProfile(profileData)
      } catch (error) {
        console.error("Error fetching profile:", error)
      }
    }

    fetchProfile()
  }, [])

  const handlePhotoChange = (e) => {
    setNewPhoto(e.target.files[0])
  }

  const handleUpdatePhoto = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData()
      formData.append("photo", newPhoto)

      const response = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      })

      if (response.true) {
        console.log("Profile photo updated successfully!")

        fetchProfile()
      } else {
        console.error("Error updating profile photo:", response.statusText)
      }
    } catch (error) {
      console.error("Error updating profile photo:", error)
    }
  }

  return (
    <ProfileCardContainer>
      <h2>Update Profile Photo</h2>
      {profile.photo && (
        <img
          src={profile.photo}
          alt="Current Profile"
        />
      )}
      <ProfileForm onSubmit={handleUpdatePhoto}>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
        />
        <button type="submit">Update Profile Photo</button>
      </ProfileForm>
    </ProfileCardContainer>
  )
}

export default ProfileUpdateCard