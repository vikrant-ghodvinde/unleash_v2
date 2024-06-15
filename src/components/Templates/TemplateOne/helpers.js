export const contentSizeDesktop = (size) => {
  switch (size) {
    case "extra-small":
      return "10px";

    case "small":
      return "12px";

    case "medium":
      return "14px";

    case "large":
      return "16px";

    case "extra-large":
      return "18px";

    default:
      return "14px";
  }
};

export const contentSizeMobile = (size) => {
  switch (size) {
    case "extra-small":
      return "8px";

    case "small":
      return "10px";

    case "medium":
      return "12px";

    case "large":
      return "14px";

    case "extra-large":
      return "16px";

    default:
      return "14px";
  }
};

export const textAlignment = (align) => {
  switch (align) {
    case "left":
      return "left";

    case "center":
      return "center";

    case "right":
      return "right";

    case "justify":
      return "justify";

    default:
      return "left";
  }
};
