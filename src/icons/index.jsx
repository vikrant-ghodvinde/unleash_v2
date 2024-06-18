/* eslint-disable react/prop-types */
import {
  RiBubbleChartLine,
  RiChat3Line,
  RiFacebookFill,
  RiFontFamily,
  RiFontSize2,
  RiHeartLine,
  RiIdCardLine,
  RiImageAddLine,
  RiInstagramLine,
  RiLinkedinFill,
  RiRoundedCorner,
  RiSquareLine,
  RiText,
  RiTextSnippet,
  RiTimeZoneLine,
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
  return <RiHeartLine height={props.width} {...props} />;
};

export const CommentIcon = (props) => {
  return <RiChat3Line height={props.width} {...props} />;
};

export const ShareIcon = (props) => {
  return <FeatherIcon height={props.width} icon="send" {...props} />;
};

export const TextIcon = (props) => {
  return <RiText height={props.width} {...props} />;
};

export const FontSizeIcon = (props) => {
  return <RiFontSize2 height={props.width} {...props} />;
};

export const AlignLeftIcon = (props) => {
  return <AlignLeft height={props.width} {...props} />;
};

export const AlignCenterIcon = (props) => {
  return <AlignCenter height={props.width} {...props} />;
};

export const AlignRightIcon = (props) => {
  return <AlignRight height={props.width} {...props} />;
};

export const AlignJustifyIcon = (props) => {
  return <AlignJustify height={props.width} {...props} />;
};

export const FontsIcon = (props) => {
  return <RiFontFamily height={props.width} {...props} />;
};

export const BackgroundIcon = (props) => {
  return <FeatherIcon height={props.width} icon="image" {...props} />;
};

export const EmojiIcon = (props) => {
  return <FeatherIcon height={props.width} icon="smile" {...props} />;
};

export const ColorIcon = (props) => {
  return <ColorFilter height={props.width} {...props} />;
};

export const SwapIcon = (props) => {
  return <FeatherIcon height={props.width} icon="refresh-cw" {...props} />;
};

export const DownloadIcon = (props) => {
  return <FeatherIcon height={props.width} icon="download" {...props} />;
};

export const UploadIcon = (props) => {
  return <FeatherIcon height={props.width} icon="upload-cloud" {...props} />;
};

export const FacebookIcon = (props) => {
  return <RiFacebookFill height={props.width} {...props} />;
};

export const InstagramIcon = (props) => {
  return <RiInstagramLine height={props.width} {...props} />;
};

export const TwitterIcon = (props) => {
  return <RiTwitterXLine height={props.width} {...props} />;
};

export const LinkedInIcon = (props) => {
  return <RiLinkedinFill height={props.width} {...props} />;
};

export const VerifiedIcon = (props) => {
  return <RiVerifiedBadgeFill height={props.width} {...props} />;
};

export const RoundedCornerIcon = (props) => {
  return <RiRoundedCorner height={props.width} {...props} />;
};

export const SquareCornerIcon = (props) => {
  return <RiSquareLine height={props.width} {...props} />;
};

export const UserImageIcon = (props) => {
  return <RiImageAddLine height={props.width} {...props} />;
};

export const UserDetailsIcon = (props) => {
  return <RiIdCardLine height={props.width} {...props} />;
};

export const BubbleChartIcon = (props) => {
  return <RiBubbleChartLine height={props.width} {...props} />;
};

export const TextSnippetIcon = (props) => {
  return <RiTextSnippet height={props.width} {...props} />;
};

export const TimeZoneIcon = (props) => {
  return <RiTimeZoneLine height={props.width} {...props} />;
};
