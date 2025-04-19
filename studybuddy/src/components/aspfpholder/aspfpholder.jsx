import React, {useState} from "react";
import "./aspfpholder.css";


const handleImageChange = (e) => {
    const [image, setImage] = useState(null);  // state to hold the image

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        setImage(URL.createObjectURL(file)); // creates a temporary URL for the image
        }
    };

}

export default profileHolder;