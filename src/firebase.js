// Import the functions you need from the SDKs you need & 
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyAstGEJ4HI38r-wgM6NesPvIrnFmZrLzU0",
  authDomain: "cv-online-34842.firebaseapp.com",
  projectId: "cv-online-34842",
  storageBucket: "cv-online-34842.appspot.com",
  messagingSenderId: "521322441522",
  appId: "1:521322441522:web:d16818f6f6a740b33c852b"
};

//export { initializeApp, firebaseConfig };
export default initializeApp(firebaseConfig) //firebase(firebaseConfig)