import {
  RiChat3Line,
  RiFacebookFill,
  RiFontFamily,
  RiFontSize2,
  RiHeartLine,
  RiInstagramLine,
  RiLinkedinFill,
  RiRoundedCorner,
  RiSquareLine,
  RiText,
  RiTwitterXLine,
  RiVerifiedBadgeFill,
} from "@remixicon/react";
import FeatherIcon from "feather-icons-react";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  ColorFilter,
} from "iconoir-react";

export const HeartIcon = (props) => {
  return <RiHeartLine {...props} />;
};

export const CommentIcon = (props) => {
  return <RiChat3Line {...props} />;
};

export const ShareIcon = (props) => {
  return <FeatherIcon icon="send" {...props} />;
};

export const TextIcon = (props) => {
  return <RiText {...props} />;
};

export const FontSizeIcon = (props) => {
  return <RiFontSize2 {...props} />;
};

export const AlignLeftIcon = (props) => {
  return <AlignLeft {...props} />;
};

export const AlignCenterIcon = (props) => {
  return <AlignCenter {...props} />;
};

export const AlignRightIcon = (props) => {
  return <AlignRight {...props} />;
};

export const AlignJustifyIcon = (props) => {
  return <AlignJustify {...props} />;
};

export const FontsIcon = (props) => {
  return <RiFontFamily {...props} />;
};

export const BackgroundIcon = (props) => {
  return <FeatherIcon icon="image" {...props} />;
};

export const EmojiIcon = (props) => {
  return <FeatherIcon icon="smile" {...props} />;
};

export const ColorIcon = (props) => {
  return <ColorFilter {...props} />;
};

export const SwapIcon = (props) => {
  return <FeatherIcon icon="refresh-cw" {...props} />;
};

export const DownloadIcon = (props) => {
  return <FeatherIcon icon="download" {...props} />;
};

export const UploadIcon = (props) => {
  return <FeatherIcon icon="upload-cloud" {...props} />;
};

export const FacebookIcon = (props) => {
  return <RiFacebookFill {...props} />;
};

export const InstagramIcon = (props) => {
  return <RiInstagramLine {...props} />;
};

export const TwitterIcon = (props) => {
  return <RiTwitterXLine {...props} />;
};

export const LinkedInIcon = (props) => {
  return <RiLinkedinFill {...props} />;
};

export const VerifiedIcon = (props) => {
  return <RiVerifiedBadgeFill {...props} />;
};

export const RoundedCornerIcon = (props) => {
  return <RiRoundedCorner {...props} />;
};

export const SquareCornerIcon = (props) => {
  return <RiSquareLine {...props} />;
};
