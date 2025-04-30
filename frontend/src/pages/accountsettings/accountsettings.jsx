import React, { useState, useEffect } from "react";
import "./accountsettings.css";
import defaultprofilepic from "../../assets/defaultPfP.png"; // Fallback
import cat from "../../assets/acnhpfps/cat.jpeg";
import duck from "../../assets/acnhpfps/duck.jpeg";
import pig from "../../assets/acnhpfps/pig.jpeg";
import raccoon from "../../assets/acnhpfps/raccoon.jpeg";
import raccoonwsunglasses from "../../assets/acnhpfps/raccoonwsunglasses.jpeg";
import sleepingdog from "../../assets/acnhpfps/sleepingdog.jpeg";
import tomnook from "../../assets/acnhpfps/tomnook.jpeg";
import yellowduck from "../../assets/acnhpfps/yellowduck.jpeg";

// Array of preset profile picture URLs or paths
const presetProfilePics = [
  cat,
  duck,
  pig,
  raccoon,
  raccoonwsunglasses,
  sleepingdog,
  tomnook,
  yellowduck,
  // Add more paths or URLs to your preset images
];

const AccountSettings = () => {
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem('accountSettingsData');
    if (storedData) {
      return JSON.parse(storedData);
    } else {
      return {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        courses: "",
        classification: "",
        description: "",
        username: "",
        password: "",
        profileImageUrl: ""
      };
    }
  });

  useEffect(() => {
    localStorage.setItem('accountSettingsData', JSON.stringify(formData));
    window.dispatchEvent(new Event('profilePictureUpdated')); // Dispatch custom event
  }, [formData.profileImageUrl]);

  useEffect(() => {
    localStorage.setItem('accountSettingsData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePresetImageSelect = (imageUrl) => {
    setFormData({ ...formData, profileImageUrl: imageUrl });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Account settings saved to local storage:", formData);
    alert("Account settings saved!"); // Change to a pop-up alert
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
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          </div>

          <div className="entryarea">
            <span>Email</span>
            <input type="text" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="entryarea">
            <span>Courses</span>
            <input type="text" name="courses" value={formData.courses} onChange={handleChange} />
          </div>

          

          <div className="entryarea">
            <span>Classification</span>
            <input type="text" name="classification" value={formData.classification} onChange={handleChange} required />
          </div>

          <div className="entryarea">
            <span>Bio</span>
            <input type="text" name="description" placeholder="Tell us about you!" value={formData.description} onChange={handleChange} required />
          </div>
        </div>

        <div className="otherInfo">
          <div className="entryarea">
            <span className="aspfpSpan">Choose Profile Picture</span>
                   {/* Display the selected profile picture */}
              {formData.profileImageUrl && (
                <div className="asProfilePic">
                  <img src={formData.profileImageUrl || defaultprofilepic} alt="Selected Profile" 
                  className="asprofile-image" />
                </div>
                    )}


              {/* <label htmlFor="profilePicUpload">
                  <div className="asProfilePic">
                    <img 
                    src={formData.profile_image || defaultprofilepic} //{profileImage || defaultprofilepic} 
                    alt="Profile" 
                    className="asprofile-image" />
                  </div>
              </label> */}

              <div className="preset-image-options">
                {presetProfilePics.map((imageUrl, index) => (
                  <div
                    key={index}
                    className={`preset-image-container ${formData.profileImageUrl === imageUrl ? 'selected' : ''}`}
                    onClick={() => handlePresetImageSelect(imageUrl)}
                  >
                    <img src={imageUrl} alt={`Preset Avatar ${index + 1}`} className="preset-image" />
                  </div>
                ))}
              </div> 

          </div>

          <div className="entryarea">
            <span>Username</span>
            <input type="text" name="username" value={formData.username} onChange={handleChange} required />
          </div>

          <div className="entryarea">
            <span>Password</span>
            <input type="text" name="password" value={formData.password} onChange={handleChange} required />
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

// import React, { useState, useEffect } from "react";
// import "./accountsettings.css"
// import defaultprofilepic from "../../assets/defaultPfP.png";
// import axios from 'axios';

// const AccountSettings = () => {
//   const [formData, setFormData] = useState({
//     first_name: "", 
//     last_name: "",
//     phone_number: "",
//     email: "",
//     classification: "", //courses: "", // might need to handle this differently if it's an array on the backend
//     //profile_image: null, // For file upload
//     description: "",
//     username: "", // might add this later
//     password: ""
//   });

//   const token = localStorage.getItem('authToken'); //where I'm storing the token that the user was assigned at sign up
//   const baseURL = 'http://localhost:10000/api';


//   useEffect(() => {
    
//     const storedData = localStorage.getItem('accountSettingsData');
//     if (storedData) {
//       setFormData(JSON.parse(storedData));
//     } else {
//       // If no data in local storage, fetch from the server
//       const fetchUserSettings = async () => { //grabbing the users previous account settings
//         if (!token) { //if the user does not have a token/user id
//           console.log("Token not found");
//           return;
//         }
//         else {
//           console.log("Token found:", token);
//         }

//         try {
//           const response = await axios.get(`${baseURL}/accountsettings`, { //
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });
//           console.log("Posted to database:", response.data);
//           setFormData((prevData) => ({
//             ...prevData,
//             first_name: response.data.first_name || "",
//             last_name: response.data.last_name || "",
//             phone_number: response.data.phone_number || "",
//             email: response.data.email || "",
//             classification: response.data.classification || "",
//             //courses: response.data.courses || "", // Adjust if backend sends courses as an array
//             description: response.data.description || "", // Assuming 'description' in backend is bio
//             //profile_image: response.data.profile_image || null, // Set existing profile image URL
//             username: response.data.username || "",
//             password: response.data.password || ""
//           }));

//         } catch (error) {
//           console.error("Error fetching account settings:", error);
//         }
//       };
//     fetchUserSettings();
//     }
//   }, [token, baseURL]);

//   // Save formData to local storage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('accountSettingsData', JSON.stringify(formData));
//   }, [formData]);


//   // Handle Input Changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     //console.log("formData after change:", formData); 
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!token) {
//       console.log("Token not found");
//       return;
//     }
//     else {
//       console.log("Token found:", token);
//     }

//     const formDataToSend = new FormData();
//     for (const key in formData) {
//       formDataToSend.append(key, formData[key]);
//     }
//     console.log("formData being sent:", formData);

//     try {
//       const response = await axios.put(`${baseURL}/accountsettings`, formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data',
//         },
//       }
//       );
//       console.log("Account settings updated successfully:", response.data);
//       // localStorage.removeItem('accountSettingsData');
//     } catch (error) {
//       console.error("Error updating account settings:", error);
//     }
//   };

//   // const handleImageChange = (event) => {
//   //   console.log("file to upload:", event.target.files[0]);
//   //   const file = event.target.files[0];
//   //   if (file) {
//   //     const reader = new FileReader();
//   //     reader.onloadend = () => {
//   //       setFormData({ ...formData, profile_image: reader.result }); // Store as binary data
//   //     };
//   //     reader.readAsArrayBuffer(file);
//   //     //reader.readAsBinaryString(file); // Or reader.readAsArrayBuffer(file)
//   //   } else {
//   //     setFormData({ ...formData, profile_image: null });
//   //   }
//   // };


//   return (
//     <article className="settingsContainer">
//       <h1 id="astitle">Account Settings</h1>

//       <form onSubmit={handleSubmit} className="settingsInfo">
//         <div className="mainInfo">
//           <div className="entryarea">
//             <span>First Name</span>
//             <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required />
//           </div>

//           <div className="entryarea">
//             <span>Last Name</span>
//             <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required />
//           </div>

//           <div className="entryarea">
//             <span>Phone Number</span>
//             <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} />
//           </div>

//           <div className="entryarea">
//             <span>Email</span>
//             <input type="text" name="email" value={formData.email} onChange={handleChange} required />
//           </div>

//           <div className="entryarea">
//             <span>Courses</span>
//             <input type="text" name="courses" value={formData.courses} onChange={handleChange} />
//           </div>

//           <div className="entryarea">
//             <span>Classification</span>
//             <input type="text" name="classification" value={formData.classification} onChange={handleChange} required />
//           </div>

//         </div>

//         <div className="otherInfo">
//           <div className="entryarea">
//             <span className="aspfpSpan">Edit Profile Picture</span>

//               <input 
//                 type="file"
//                 name="profile_image"
//                 accept= ".jpeg, .png, .jpg"  //"image/*" //accept=".jpeg, .png"
//                 //onChange={handleImageChange}
//                 className="asProfileUpload" 
//                 id="profilePicUpload"
//               />

//               <label htmlFor="profilePicUpload">
//                   <div className="asProfilePic">
//                     <img 
//                     src={/*formData.profile_image ||*/ defaultprofilepic} //{profileImage || defaultprofilepic} 
//                     alt="Profile" 
//                     className="asprofile-image" />
//                   </div>
//               </label>


//           </div>

//           <div className="entryarea">
//             <span>Bio</span>
//             <input type="text" name="description" placeholder="Tell us about you! What are your interests, activities, favorites?" value={formData.description} onChange={handleChange} required />
//           </div>

//           <div className="entryarea">
//             <span>Username</span>
//             <input type="text" name="username" value={formData.username} onChange={handleChange} required />
//           </div>

//           <div className="entryarea">
//             <span>Password</span>
//             <input type="text" name="password" value={formData.password} onChange={handleChange} required />
//           </div>
          
//         </div>

//         <div id="sEButton">
//           <button type="submit" id="saveEdits">
//             Save Edits
//           </button>
//         </div>
//       </form>
//     </article>
//   );
// };

// /* Add in autocomplete for courses and classification */

// export default AccountSettings;


//   // Load the saved profile picture from localStorage when the component mounts
//   // useEffect(() => {
//   //   const savedImage = localStorage.getItem('profilePic');
//   //   if (savedImage) {
//   //     setImage(savedImage); // If there's a saved image, set it to state
//   //   }
//   // }, []);

//   // const handleImageChange = (e) => {
//   //   const file = e.target.files[0];
//   //   if (file) {
//   //     setFormData((prevData) => ({
//   //       ...prevData,
//   //       profileImage: file
//   //     }));
//   //     // const imageUrl = URL.createObjectURL(file); // Create a temporary URL for the image
//   //     // localStorage.setItem('profilePic', imageUrl); // Store the image URL in localStorage
//   //   }
//   // };