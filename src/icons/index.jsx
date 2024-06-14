import FeatherIcon from "feather-icons-react";
import { AlignCenter, AlignJustify, AlignLeft, AlignRight, ColorFilter, Text, TextSize } from "iconoir-react";

export const HeartIcon = (props) => {
  return <FeatherIcon icon="heart" {...props} />;
};

export const CommentIcon = (props) => {
  return <FeatherIcon icon="message-circle" {...props} />;
};

export const ShareIcon = (props) => {
  return <FeatherIcon icon="send" {...props} />;
};

export const FontSizeIcon = (props) => {
  return <TextSize {...props} />;
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
  return <Text {...props} />;
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
