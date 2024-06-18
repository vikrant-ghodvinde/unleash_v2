import { RoundedCornerIcon, SquareCornerIcon } from "@/icons";
import { setCorners } from "@/libs/redux/reducers/cardCornersReducer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/ui/shadcn/components/ui/popover";
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
      <PopoverTrigger asChild>
        <button
          type="button"
          className="w-10 h-10 inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900"
        >
          <RoundedCornerIcon width={16} />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="w-full flex items-center p-1">
          <button
            type="button"
            title="Rounded"
            className={`text-[10px] w-10 h-10 rounded-md inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900 ${
              corners === "rounded" ? "bg-zinc-900" : "bg-transparent"
            }`}
            onClick={() => handleCornerChange("rounded")}
          >
            <RoundedCornerIcon width={14} />
          </button>
          <button
            type="button"
            title="Squared"
            className={`text-[10px] w-10 h-10 rounded-md inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900 ${
              corners === "squared" ? "bg-zinc-900" : "bg-transparent"
            }`}
            onClick={() => handleCornerChange("squared")}
          >
            <SquareCornerIcon width={14} />
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CardCorners;
