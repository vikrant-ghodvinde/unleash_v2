/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { useSelector } from "react-redux";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  // USER VALUES
  const getUserName = useSelector((state) => state.auth.userName);
  const getUserImage = useSelector((state) => state.auth.userImage);

  const [userImage, setUserImage] = useState({
    visible: true,
    image: getUserImage ? getUserImage : "",
  });
  const [profileName, setProfileName] = useState({
    verified: false,
    text: getUserName ? getUserName : "John Doe",
  });
  const [userName, setUserName] = useState({
    visible: true,
    text: getUserName ? getUserName.split(" ")[0] : "john_027",
  });
  const [socialMedia, setSocialMedia] = useState(["facebook"]);
  const [postContent, setPostContent] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laborum dolores praesentium? Reiciendis voluptatibus eaque soluta omnis saepe deleniti hic non deserunt provident. Voluptate nulla quisquam sunt magnam quas! Dolore!"
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
