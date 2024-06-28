/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [userImage, setUserImage] = useState({
    visible: true,
    image: "",
  });
  const [profileName, setProfileName] = useState({
    verified: false,
    text: "",
  });
  const [userName, setUserName] = useState({
    visible: true,
    text: "",
  });
  const [socialMedia, setSocialMedia] = useState(["facebook"]);
  const [postContent, setPostContent] = useState(
    "The greatest glory in living lies not in never falling, but in rising every time we fall."
  );
  const [postCounts, setPostCounts] = useState({
    visible: false,
    likes: "0",
    replies: "0",
    shares: "0",
  });

  const [timeStamp, setTimeStamp] = useState({
    visible: false,
    text: "",
  });
  return (
    <AppContext.Provider
      value={{
        userImage,
        setUserImage,
        profileName,
        setProfileName,
        userName,
        setUserName,
        socialMedia,
        setSocialMedia,
        postContent,
        setPostContent,
        postCounts,
        setPostCounts,
        timeStamp,
        setTimeStamp,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const GetContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useContext must be used within a ContextProvider.");
  }
  return context;
};
