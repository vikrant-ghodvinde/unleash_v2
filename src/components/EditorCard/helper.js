export const backgroundConfiguration = (type, primary, secondary, swapped) => {
  switch (type) {
    case "solidColor":
      return primary;

    case "linearGradient":
      if (swapped) {
        return `linear-gradient(to right, ${secondary}, ${primary})`;
      } else {
        return `linear-gradient(to right, ${primary}, ${secondary})`;
      }

    case "radialGradient":
      if (swapped) {
        return `radial-gradient(${secondary}, ${primary})`;
      } else {
        return `radial-gradient(${primary}, ${secondary})`;
      }

    default:
      return primary;
  }
};

export const aspectRatioConfiguration = (aspectRatio) => {
  switch (aspectRatio) {
    case "linedIn(4:5)":
      return "4/5";

    case "linedIn(1:1)":
      return "1/1";

    case "instagram(4:5)":
      return "4/5";

    case "instagram(1:1)":
      return "1/1";

    case "instagram(9:16)":
      return "9/16";

    case "tik-too(9:16)":
      return "9/16";

    default:
      return "1/1";
  }
};
