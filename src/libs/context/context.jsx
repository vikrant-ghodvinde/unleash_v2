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
    text: "John Doe",
  });
  const [userName, setUserName] = useState({
    visible: true,
    text: "john_027",
  });
  const [socialMedia, setSocialMedia] = useState(["facebook"]);
  const [postContent, setPostContent] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laborum dolores praesentium? Reiciendis voluptatibus eaque soluta omnis saepe deleniti hic non deserunt provident. Voluptate nulla quisquam sunt magnam quas! Dolore!"
  );
  const [postCounts, setPostCounts] = useState({
    visible: true,
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
