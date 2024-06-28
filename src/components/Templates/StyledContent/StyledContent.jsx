const StyledContent = ({ sentence, color, fontWeight, fontFamily }) => {
  const parseSentence = (sentence) => {
    const parts = sentence.split(/(<\/?[cb]>)/);
    let sentenceParts = [];
    let cTagOpened = false;

    parts.forEach((part, index) => {
      if (part === "<c>") {
        cTagOpened = true;
      } else if (part === "</c>") {
        cTagOpened = false;
      } else if (part.trim() !== "") {
        if (cTagOpened) {
          sentenceParts.push(
            <span
              key={index}
              style={{
                color: color,
                fontWeight: fontWeight,
                fontFamily: fontFamily,
              }}
            >
              {part}
            </span>
          );
        } else {
          sentenceParts.push(part);
        }
      }
    });

    return sentenceParts;
  };
  return parseSentence(sentence);
};

export default StyledContent;
