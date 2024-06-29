const StyledContent = ({ sentence, color, fontWeight }) => {
  const parseSentence = (sentence) => {
    const parts = sentence.split(/(<\/?[bB]>)/);
    let sentenceParts = [];
    let cTagOpened = false;

    parts.forEach((part, index) => {
      if (part === "<b>" || part === "<B>") {
        cTagOpened = true;
      } else if (part === "</b>" || part === "</B>") {
        cTagOpened = false;
      } else if (part.trim() !== "") {
        if (cTagOpened) {
          sentenceParts.push(
            <span
              key={index}
              style={{
                color: color,
                fontWeight: fontWeight,
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
