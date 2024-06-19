import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1OuvNBFUvVC6g2w46gv4de41j3WoVslI",
  authDomain: "testauth-ff01c.firebaseapp.com",
  projectId: "testauth-ff01c",
  storageBucket: "testauth-ff01c.appspot.com",
  messagingSenderId: "201651660113",
  appId: "1:201651660113:web:4a173a71847f2fcf3b1f70",
  measurementId: "G-RPPTX9JPVG",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);

export { auth, googleAuthProvider };
