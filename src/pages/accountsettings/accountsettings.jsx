import React, { useState, useEffect } from "react";
import "./accountsettings.css"
import defaultprofilepic from "../../assets/defaultPfP.png";

const AccountSettings = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phonenum: "",
    email: "",
    classfication: "",
    courses: "",
    profilePic: null,
    bio: "",
    instagram: ""
  });

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved Data:", formData);
  };

  const [image, setImage] = useState(null);  // state to hold the image

  // Load the saved profile picture from localStorage when the component mounts
  useEffect(() => {
    const savedImage = localStorage.getItem('profilePic');
    if (savedImage) {
      setImage(savedImage); // If there's a saved image, set it to state
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a temporary URL for the image
      setImage(imageUrl); // Set the image URL in state
      localStorage.setItem('profilePic', imageUrl); // Store the image URL in localStorage
    }
  };


  return (
    <article className="settingsContainer">
      <h1 id="astitle">Account Settings</h1>

      <form onSubmit={handleSubmit} className="settingsInfo">
        <div className="mainInfo">
          <div className="entryarea">
            <span>First Name</span>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>

          <div className="entryarea">
            <span>Last Name</span>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>

          <div className="entryarea">
            <span>Phone Number</span>
            <input type="text" name="phonenum" value={formData.phonenum} onChange={handleChange} required />
          </div>

          <div className="entryarea">
            <span>Email</span>
            <input type="text" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="entryarea">
            <span>Courses</span>
            <input type="text" name="courses" value={formData.courses} onChange={handleChange} required />
          </div>

          <div className="entryarea">
            <span>Classification</span>
            <input type="text" name="classification" value={formData.classification} onChange={handleChange} required />
          </div>

        </div>

        <div className="otherInfo">
          <div className="entryarea">
            <span className="aspfpSpan">Edit Profile Picture</span>

              <input type="file"
              name="profilePicUpload"
              accept="image/*"
              onChange={handleImageChange}
              className="asProfileUpload" 
              id="profilePicUpload"
              />

              <label htmlFor="profilePicUpload">

                  <div className="asProfilePic">

                  <img src={image || defaultprofilepic} alt="Profile" className="asprofile-image" />

                  </div>
              </label>
          </div>

          <div className="entryarea">
            <span>Bio</span>
            <input type="text" name="bio" placeholder="Tell us about you! What are your interests, activities, favorites?" value={formData.bio} onChange={handleChange} required />
          </div>

          <div className="entryarea">
            <span>Instagram</span>
            <input type="text" name="instagram" value={formData.instagram} onChange={handleChange} required />
          </div>
          
        </div>

        <div id="sEButton">
          <button type="submit" id="saveEdits">
            Save Edits
          </button>
        </div>
      </form>
    </article>
  );
};

/* Add in autocomplete for courses and classification */

export default AccountSettings;