export const postCountConfiguration = (counts) => {
  if (counts >= 1e6) {
    return (counts / 1e6).toFixed(1) + "M";
  } else if (counts >= 1e3) {
    return (counts / 1e3).toFixed(1) + "k";
  } else {
    return counts.toString();
  }
};

export const getFormattedDateTime = () => {
  const now = new Date();
  const day = now.toLocaleString("default", { day: "2-digit" });
  const month = now.toLocaleString("default", { month: "long" });
  const year = now.toLocaleString("default", { year: "numeric" });
  const time = now.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return `${month}, ${day} ${year} ${time}`;
};
