import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
} from "@/icons";
import { setAlignment } from "@/libs/redux/reducers/textAlignReducer";
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

const Alignment = () => {
  const dispatch = useDispatch();
  const { alignment } = useSelector((state) => state.textAlignment);
  const handleAlignChange = (align) => {
    dispatch(setAlignment({ alignment: align }));
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
              <AlignLeftIcon width={16} />
            </span>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent>Text Align</TooltipContent>
      </Tooltip>
      <PopoverContent>
        <div className="relative w-full flex items-center gap-x-1 p-1">
          <Tooltip>
            <TooltipTrigger>
              <span
                role="button"
                className={`text-[10px] w-10 h-10 rounded-md inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900 ${
                  alignment === "left" ? "bg-zinc-900" : "bg-transparent"
                }`}
                onClick={() => handleAlignChange("left")}
              >
                <AlignLeftIcon width={14} />
              </span>
            </TooltipTrigger>
            <TooltipContent>Left</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <span
                role="button"
                className={`text-[10px] w-10 h-10 rounded-md inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900 ${
                  alignment === "center" ? "bg-zinc-900" : "bg-transparent"
                }`}
                onClick={() => handleAlignChange("center")}
              >
                <AlignCenterIcon width={14} />
              </span>
            </TooltipTrigger>
            <TooltipContent>Center</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <span
                role="button"
                className={`text-[10px] w-10 h-10 rounded-md inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900 ${
                  alignment === "right" ? "bg-zinc-900" : "bg-transparent"
                }`}
                onClick={() => handleAlignChange("right")}
              >
                <AlignRightIcon width={14} />
              </span>
            </TooltipTrigger>
            <TooltipContent>Right</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <span
                role="button"
                className={`text-[10px] w-10 h-10 rounded-md inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900 ${
                  alignment === "justify" ? "bg-zinc-900" : "bg-transparent"
                }`}
                onClick={() => handleAlignChange("justify")}
              >
                <AlignJustifyIcon width={14} />
              </span>
            </TooltipTrigger>
            <TooltipContent>Justify</TooltipContent>
          </Tooltip>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Alignment;
