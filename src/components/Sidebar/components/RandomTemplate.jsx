import { ShuffleIcon } from "@/icons";
import { GetContext } from "@/libs/context/context";
import {
  setBackgroundImageOpacity,
  setBackgroundType,
  setImageBackground,
  setPrimaryBackground,
  setSecondaryBackground,
} from "@/libs/redux/reducers/backgroundsReducer";
import { setCorners } from "@/libs/redux/reducers/cardCornersReducer";
import {
  setPrimaryColor,
  setSecondaryColor,
} from "@/libs/redux/reducers/colorsReducer";
import { setFontSize } from "@/libs/redux/reducers/fontSizeReducer";
import {
  setPrimaryFontFamily,
  setPrimaryFontWeight,
  setSecondaryFontFamily,
  setSecondaryFontWeight,
} from "@/libs/redux/reducers/fontStyleReducer";
import { setAlignment } from "@/libs/redux/reducers/textAlignReducer";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/ui/shadcn/components/ui/tooltip";
import { useDispatch } from "react-redux";
import randomTemplates from "@/libs/json/randomTemplates.json";
import { useState } from "react";

const RandomTemplate = () => {
  const { setSocialMedia, setPostContent, setPostCounts } = GetContext();
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleRandomTemplates = () => {
    console.log("random");
    const template = randomTemplates[currentIndex];

    console.log(currentIndex);

    setSocialMedia(template.socialMedia);
    setPostContent(template.postContent);
    setPostCounts({
      visible: template.postCounts.visible,
      likes: template.postCounts.likes,
      replies: template.postCounts.replies,
      shares: template.postCounts.shares,
    });
    dispatch(
      setPrimaryBackground({ primaryBackground: template.primaryBackground })
    );
    dispatch(
      setSecondaryBackground({
        secondaryBackground: template.secondaryBackground,
      })
    );
    dispatch(setImageBackground({ imageBackground: template.imageBackground }));
    dispatch(
      setBackgroundImageOpacity({
        backgroundImageOpacity: template.backgroundImageOpacity,
      })
    );
    dispatch(setBackgroundType({ backgroundType: template.backgroundType }));
    dispatch(setCorners({ corners: template.cardCorners }));
    dispatch(setPrimaryColor({ primaryColor: template.primaryColor }));
    dispatch(setSecondaryColor({ secondaryColor: template.secondaryColor }));
    dispatch(
      setFontSize({
        headingSize: template.fontSize.headingSize,
        contentSize: template.fontSize.contentSize,
      })
    );
    dispatch(
      setPrimaryFontFamily({ primaryFontFamily: template.primaryFontFamily })
    );
    dispatch(
      setPrimaryFontWeight({ primaryFontWeight: template.primaryFontWeight })
    );
    dispatch(
      setSecondaryFontFamily({
        secondaryFontFamily: template.secondaryFontFamily,
      })
    );
    dispatch(
      setSecondaryFontWeight({
        secondaryFontWeight: template.secondaryFontWeight,
      })
    );
    dispatch(setAlignment({ alignment: template.alignment }));

    setCurrentIndex((currentIndex + 1) % randomTemplates.length);
  };
  return (
    <Tooltip>
      <TooltipTrigger>
        <span
          role="button"
          className="w-10 h-10 inline-flex items-center justify-center text-white text-xs"
          onClick={handleRandomTemplates}
        >
          <ShuffleIcon width={14} strokeWidth={2} />
        </span>
      </TooltipTrigger>
      <TooltipContent>Generate Template</TooltipContent>
    </Tooltip>
  );
};

export default RandomTemplate;
