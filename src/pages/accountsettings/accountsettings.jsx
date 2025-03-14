import React, { useState } from "react";
import "./accountsettings.css"

const AccountSettings = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phonenum: "",
    email: "",
    courses: "",
    profilePic: null,
    bio: "",
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
        </div>

        <div className="otherInfo">
          <div className="entryarea">
            <span>Profile Picture</span>
            <input type="file" name="profilePic" accept="image/*" onChange={handleChange} />
          </div>

          <div className="entryarea">
            <span>Bio</span>
            <input type="text" name="bio" placeholder="Tell us about you! What are your interests, activities, favorites?" value={formData.bio} onChange={handleChange} required />
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

export default AccountSettings;