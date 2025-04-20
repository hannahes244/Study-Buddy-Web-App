import ImageKit from "imagekit";
import dotenv from "dotenv";
dotenv.config();

// ImageKit object for storing website images
const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL,
});

export default imagekit;