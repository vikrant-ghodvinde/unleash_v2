/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [userImage, setUserImage] = useState("");
  const [profileName, setProfileName] = useState("John Doe");
  const [userName, setUserName] = useState("john_027");
  const [socialMedia, setSocialMedia] = useState(["twitter"]);
  const [postContent, setPostContent] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laborum dolores praesentium? Reiciendis voluptatibus eaque soluta omnis saepe deleniti hic non deserunt provident. Voluptate nulla quisquam sunt magnam quas! Dolore!"
  );
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
