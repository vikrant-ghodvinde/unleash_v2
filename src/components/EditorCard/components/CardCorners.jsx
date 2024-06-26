import { RoundedCornerIcon, SquareCornerIcon } from "@/icons";
import { setCorners } from "@/libs/redux/reducers/cardCornersReducer";
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

const CardCorners = () => {
  const dispatch = useDispatch();
  const { corners } = useSelector((state) => state.cardCorners);
  const handleCornerChange = (type) => {
    console.log(type);
    dispatch(
      setCorners({
        corners: type,
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
              <RoundedCornerIcon width={16} />
            </span>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent>Post Corners</TooltipContent>
      </Tooltip>
      <PopoverContent>
        <div className="relative w-full flex items-center gap-x-1 p-1">
          <Tooltip>
            <TooltipTrigger>
              <span
                role="button"
                className={`text-[10px] w-10 h-10 rounded-md inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900 ${
                  corners === "rounded" ? "bg-zinc-900" : "bg-transparent"
                }`}
                onClick={() => handleCornerChange("rounded")}
              >
                <RoundedCornerIcon width={14} />
              </span>
            </TooltipTrigger>
            <TooltipContent>Rounded</TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger>
              <span
                role="button"
                className={`text-[10px] w-10 h-10 rounded-md inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900 ${
                  corners === "squared" ? "bg-zinc-900" : "bg-transparent"
                }`}
                onClick={() => handleCornerChange("squared")}
              >
                <SquareCornerIcon width={14} />
              </span>
            </TooltipTrigger>
            <TooltipContent>Squared</TooltipContent>
          </Tooltip>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CardCorners;
