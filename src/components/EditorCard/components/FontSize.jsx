import { FontSizeIcon } from "@/icons";
import { setFontSize } from "@/libs/redux/reducers/fontSizeReducer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/ui/shadcn/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/ui/shadcn/components/ui/tooltip";
import { useDispatch, useSelector } from "react-redux";

const FontSize = () => {
  const dispatch = useDispatch();
  const { contentSize } = useSelector((state) => state.fontSize);

  const handleFontChange = (size) => {
    dispatch(
      setFontSize({
        contentSize: size,
      })
    );
  };
  return (
    <Popover>
      <Tooltip>
        <TooltipTrigger>
          <PopoverTrigger asChild>
            <span
              role="button"
              className="w-10 h-10 inline-flex items-center justify-center text-white text-xs bg-zinc-800 hover:bg-zinc-900"
            >
              <FontSizeIcon width={16} />
            </span>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent>Font Size</TooltipContent>
      </Tooltip>
      <PopoverContent>
        <button
          type="button"
          title="Extra Small"
          className={`text-[10px] w-10 h-10 inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900 ${
            contentSize === "extra-small" ? "bg-zinc-900" : "bg-transparent"
          }`}
          onClick={() => handleFontChange("extra-small")}
        >
          <FontSizeIcon width={10} />
        </button>
        <button
          type="button"
          title="Small"
          className={`text-[10px] w-10 h-10 inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900 ${
            contentSize === "small" ? "bg-zinc-900" : "bg-transparent"
          }`}
          onClick={() => handleFontChange("small")}
        >
          <FontSizeIcon width={12} />
        </button>
        <button
          type="button"
          title="Medium"
          className={`text-[10px] w-10 h-10 inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900 ${
            contentSize === "medium" ? "bg-zinc-900" : "bg-transparent"
          }`}
          onClick={() => handleFontChange("medium")}
        >
          <FontSizeIcon width={14} />
        </button>
        <button
          type="button"
          title="Bold"
          className={`text-[10px] w-10 h-10 inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900 ${
            contentSize === "large" ? "bg-zinc-900" : "bg-transparent"
          }`}
          onClick={() => handleFontChange("large")}
        >
          <FontSizeIcon width={16} />
        </button>
        <button
          type="button"
          title="Extra Bold"
          className={`text-[10px] w-10 h-10 inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900 ${
            contentSize === "extra-large" ? "bg-zinc-900" : "bg-transparent"
          }`}
          onClick={() => handleFontChange("extra-large")}
        >
          <FontSizeIcon width={18} />
        </button>
      </PopoverContent>
    </Popover>
  );
};

export default FontSize;
