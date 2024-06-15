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
import { useDispatch, useSelector } from "react-redux";

const Alignment = () => {
  const dispatch = useDispatch();
  const { alignment } = useSelector((state) => state.textAlignment);
  const handleAlignChange = (align) => {
    dispatch(setAlignment({ alignment: align }));
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="w-10 h-10 inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900"
        >
          <AlignLeftIcon width={16} />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <button
          type="button"
          title="Left"
          className={`text-[10px] w-10 h-10 inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900 ${
            alignment === "left" ? "bg-zinc-900" : "bg-transparent"
          }`}
          onClick={() => handleAlignChange("left")}
        >
          <AlignLeftIcon width={14} />
        </button>
        <button
          type="button"
          title="Center"
          className={`text-[10px] w-10 h-10 inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900 ${
            alignment === "center" ? "bg-zinc-900" : "bg-transparent"
          }`}
          onClick={() => handleAlignChange("center")}
        >
          <AlignCenterIcon width={14} />
        </button>
        <button
          type="button"
          title="Right"
          className={`text-[10px] w-10 h-10 inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900 ${
            alignment === "right" ? "bg-zinc-900" : "bg-transparent"
          }`}
          onClick={() => handleAlignChange("right")}
        >
          <AlignRightIcon width={14} />
        </button>
        <button
          type="button"
          title="Justify"
          className={`text-[10px] w-10 h-10 inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900 ${
            alignment === "justify" ? "bg-zinc-900" : "bg-transparent"
          }`}
          onClick={() => handleAlignChange("justify")}
        >
          <AlignJustifyIcon width={14} />
        </button>
      </PopoverContent>
    </Popover>
  );
};

export default Alignment;
