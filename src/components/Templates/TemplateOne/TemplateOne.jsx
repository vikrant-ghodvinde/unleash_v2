import { GetContext } from "@/libs/context/context";
import { useSelector } from "react-redux";
import {
  contentSizeDesktop,
  contentSizeMobile,
  textAlignment,
} from "./helpers";
import { useMediaQuery } from "@mui/material";

const TemplateOne = () => {
  const {
    userImage,
    setUserImage,
    profileName,
    userName,
    postContent,
    setPostContent,
  } = GetContext();
  const { contentSize } = useSelector((state) => state.fontSize);
  const { alignment } = useSelector((state) => state.textAlignment);
  const {
    primaryFontFamily,
    primaryFontWeight,
    secondaryFontFamily,
    secondaryFontWeight,
  } = useSelector((state) => state.fontStyle);
  const { primaryColor, secondaryColor } = useSelector((state) => state.colors);

  const isDesktop = useMediaQuery("(min-width:640px)");

  const handleUserImage = (e) => {
    const image = e.target.files[0];
    console.log(image);
    if (image) {
      const imageUrl = URL.createObjectURL(image);
      setUserImage(imageUrl);
      console.log(imageUrl);
    } else {
      console.error("No file selected");
    }
  };

  return (
    <div className="w-full bg-white rounded-md p-3 outline-none">
      <div className="grid grid-cols-1 gap-y-3">
        <div className="relative w-full flex items-center justify-between gap-x-2">
          <div className="flex items-center gap-x-2">
            <div
              className="relative w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gray-800 overflow-hidden"
              title="Click to upload image"
            >
              {userImage && (
                <img src={userImage} alt="" className="w-full h-full" />
              )}
              <input
                type="file"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 cursor-pointer"
                onChange={handleUserImage}
              />
            </div>
            <div
              className="relative outline-none"
              contentEditable
              suppressContentEditableWarning
            >
              <h6
                className="text-xs leading-tight"
                style={{
                  fontFamily: secondaryFontFamily,
                  fontWeight: secondaryFontWeight,
                  color: secondaryColor,
                }}
              >
                {profileName}
              </h6>
              <p
                className="text-[10px]"
                style={{
                  fontFamily: secondaryFontFamily,
                  color: secondaryColor,
                }}
              >
                {userName}
              </p>
            </div>
          </div>
          <div className="inline-flex items-center">
            <img
              src="/images/social/facebook.png"
              alt=""
              className="w-4 sm:w-5 h-4 sm:h-5 -ms-2.5"
            />
            <img
              src="/images/social/instagram.png"
              alt=""
              className="w-4 sm:w-5 h-4 sm:h-5 -ms-2.5"
            />
            <img
              src="/images/social/twitter.png"
              alt=""
              className="w-4 sm:w-5 h-4 sm:h-5 -ms-2.5"
            />
            <img
              src="/images/social/linkedin.png"
              alt=""
              className="w-4 sm:w-5 h-4 sm:h-5 -ms-2.5"
            />
          </div>
        </div>
        <div
          className="relative w-full outline-none"
          contentEditable
          suppressContentEditableWarning
          style={{
            fontSize: isDesktop
              ? contentSizeDesktop(contentSize)
              : contentSizeMobile(contentSize),
            textAlign: textAlignment(alignment),
            fontFamily: primaryFontFamily,
            fontWeight: primaryFontWeight,
            color: primaryColor,
          }}
          onInput={(e) => setPostContent(e.target.value)}
        >
          {postContent}
        </div>
        {/* <div className="relative w-full">
          <div className="flex items-center gap-x-3">
            <div className="text-sm inline-flex items-center gap-x-1">
              <HeartIcon width={14} height={14} />
              <p>13.5k</p>
            </div>
            <div className="text-sm inline-flex items-center gap-x-1">
              <span>
                <CommentIcon width={14} height={14} />
              </span>{" "}
              <p>1.5k</p>
            </div>
            <div className="text-sm inline-flex items-center gap-x-1">
              <ShareIcon width={14} height={14} />
              <p>1.1k</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TemplateOne;
