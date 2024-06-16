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
