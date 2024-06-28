import { GetContext } from "@/libs/context/context";
import { useSelector } from "react-redux";
import {
  contentSizeDesktop,
  contentSizeMobile,
  textAlignment,
} from "./helpers";
import { useMediaQuery } from "@mui/material";
import { CommentIcon, HeartIcon, ShareIcon, VerifiedIcon } from "@/icons";
import { postCountConfiguration } from "@/libs/helper";

const TemplateOne = () => {
  const {
    userImage,
    profileName,
    userName,
    socialMedia,
    postContent,
    postCounts,
    timeStamp,
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
  const { corners } = useSelector((state) => state.cardCorners);

  const getUserImage = useSelector((state) => state.auth.userImage);
  const getProfileName = useSelector((state) => state.auth.userName);

  const isDesktop = useMediaQuery("(min-width:640px)");

  return (
    <div
      className="relative w-full bg-white p-3 outline-none border-2 border-black/5"
      style={{
        borderRadius: corners === "rounded" ? "8px" : "0",
      }}
    >
      <div className="grid grid-cols-1 gap-y-3">
        <div className="relative w-full flex items-center justify-between gap-x-2">
          <div className="flex items-center gap-x-2">
            {userImage.visible && (
              <div className="relative w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gray-800 overflow-hidden">
                {getUserImage || userImage.image ? (
                  <img
                    src={userImage.image ? userImage.image : getUserImage}
                    alt=""
                    className="w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full text-white text-xl flex items-center justify-center">
                    {profileName.text.slice(0, 1)}
                  </div>
                )}
              </div>
            )}
            <div className="relative">
              <h6
                className="text-[10px] sm:text-xs flex items-center gap-x-1"
                style={{
                  fontFamily: secondaryFontFamily,
                  fontWeight: secondaryFontWeight,
                  color: secondaryColor,
                }}
              >
                {profileName.text ? profileName.text : getProfileName}
                {profileName.verified && (
                  <VerifiedIcon width={14} height={14} color="#1EA1F3" />
                )}
              </h6>
              {userName.visible && (
                <p
                  className="text-[8px] sm:text-[10px]"
                  style={{
                    fontFamily: secondaryFontFamily,
                    color: secondaryColor,
                  }}
                >
                  {userName.text ? userName.text : getProfileName.split(" ")[0]}
                </p>
              )}
            </div>
          </div>
          <div className="inline-flex items-center">
            {socialMedia?.map((item) => (
              <img
                key={item}
                src={`/images/social/${item}.png`}
                alt=""
                className="w-4 min-w-4 sm:w-5 sm:min-w-5 h-4 min-h-4 sm:h-5 sm:min-h-5 -ms-2.5"
              />
            ))}
          </div>
        </div>
        <pre
          className="relative w-full outline-none text-wrap"
          style={{
            fontSize: isDesktop
              ? contentSizeDesktop(contentSize)
              : contentSizeMobile(contentSize),
            textAlign: textAlignment(alignment),
            fontFamily: primaryFontFamily,
            fontWeight: primaryFontWeight,
            color: primaryColor,
          }}
        >
          {postContent}
        </pre>
        {timeStamp.visible && (
          <div className="relative w-full">
            <p
              className="text-[8px] sm:text-[9px] text-blue-600"
              style={{
                fontFamily: primaryFontFamily,
              }}
            >
              {timeStamp.text}
            </p>
          </div>
        )}
        {postCounts.visible && (
          <div className="relative w-full">
            <div className="flex items-center gap-x-3">
              <div
                className="text-[10px] sm:text-xs inline-flex items-center gap-x-0.5"
                style={{
                  fontFamily: primaryFontFamily,
                }}
              >
                <HeartIcon width={14} height={14} />
                <p>{postCountConfiguration(postCounts.likes)}</p>
              </div>
              <div
                className="text-[10px] sm:text-xs inline-flex items-center gap-x-0.5"
                style={{
                  fontFamily: primaryFontFamily,
                }}
              >
                <span>
                  <CommentIcon width={14} height={14} />
                </span>
                <p>{postCountConfiguration(postCounts.replies)}</p>
              </div>
              <div
                className="text-[10px] sm:text-xs inline-flex items-center gap-x-0.5"
                style={{
                  fontFamily: primaryFontFamily,
                }}
              >
                <ShareIcon width={14} height={14} />
                <p>{postCountConfiguration(postCounts.shares)}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateOne;
