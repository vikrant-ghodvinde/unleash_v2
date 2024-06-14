import { GetContext } from "@/libs/context/context";
import { useSelector } from "react-redux";
import { contentSizeDesktop, contentSizeMobile } from "./helpers";
import { useMediaQuery } from "@mui/material";

const TemplateOne = () => {
  const { profileName, userName, postContent } = GetContext();
  const { contentSize } = useSelector((state) => state.fontSize);
  console.log(contentSize);
  console.log(contentSizeDesktop(contentSize));
  const isDesktop = useMediaQuery("(min-width:640px)");
  return (
    <div className="w-full bg-white rounded-md p-3">
      <div className="grid grid-cols-1 gap-y-3">
        <div className="relative w-full flex items-center justify-between gap-x-2">
          <div className="flex items-center gap-x-2">
            <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gray-800"></div>
            <div className="relative">
              <h6 className="text-xs font-bold leading-tight">{profileName}</h6>
              <p className="text-[10px]">{userName}</p>
            </div>
          </div>
          <div className="inline-flex items-center">
            <img
              src="/images/social/facebook.png"
              alt=""
              className="w-5 h-5 -ms-2.5"
            />
            <img
              src="/images/social/instagram.png"
              alt=""
              className="w-5 h-5 -ms-2.5"
            />
            <img
              src="/images/social/twitter.png"
              alt=""
              className="w-5 h-5 -ms-2.5"
            />
            <img
              src="/images/social/linkedin.png"
              alt=""
              className="w-5 h-5 -ms-2.5"
            />
          </div>
        </div>
        <div
          className="relative w-full"
          style={{
            fontSize: isDesktop
              ? contentSizeDesktop(contentSize)
              : contentSizeMobile(contentSize),
          }}
        >
          {postContent}
        </div>
        {/* <div className="relative w-full">
          <div className="flex items-center gap-x-3">
            <div className="text-sm inline-flex items-center">
              <HeartIcon width={14} height={14} />
              <p>13.5k</p>
            </div>
            <div className="text-sm inline-flex items-center">
              <span>
                <CommentIcon width={14} height={14} />
              </span>{" "}
              <p>1.5k</p>
            </div>
            <div className="text-sm inline-flex items-center">
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
