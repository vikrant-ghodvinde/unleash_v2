import ColorPicker from "@/components/ColorPicker/ColorPicker";
import { ColorIcon, SwapIcon } from "@/icons";
import {
  setBackgroundType,
  setPrimaryBackground,
  setSecondaryBackground,
  setSwapGradient,
} from "@/libs/redux/reducers/backgroundsReducer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/ui/shadcn/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/shadcn/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/ui/shadcn/components/ui/tooltip";
import { useDispatch, useSelector } from "react-redux";

const Colors = () => {
  const dispatch = useDispatch();
  const { primaryBackground, secondaryBackground, backgroundType } =
    useSelector((state) => state.backgrounds);

  const handleBackgroundType = (type) => {
    dispatch(
      setBackgroundType({
        backgroundType: type,
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
              <ColorIcon width={16} />
            </span>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent>Background Color</TooltipContent>
      </Tooltip>
      <PopoverContent>
        <div className="grid grid-cols-12">
          <div className="relative col-span-12 p-1">
            <div className="w-full h-10 flex items-center justify-between gap-1">
              <div className="relative">
                <Select
                  value={backgroundType}
                  onValueChange={(type) => handleBackgroundType(type)}
                >
                  <SelectTrigger className="text-xs">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solidColor" className="text-xs">
                      Solid Color
                    </SelectItem>
                    <SelectItem value="linearGradient" className="text-xs">
                      Linear Gradient
                    </SelectItem>
                    <SelectItem value="radialGradient" className="text-xs">
                      Radial Gradient
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-center">
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="w-10 h-10 rounded-md"
                      style={{
                        background: primaryBackground,
                      }}
                    ></button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <ColorPicker
                      color={primaryBackground}
                      setColor={(color) =>
                        dispatch(
                          setPrimaryBackground({
                            primaryBackground: color,
                          })
                        )
                      }
                    />
                  </PopoverContent>
                </Popover>
              </div>
              {backgroundType !== "solidColor" && (
                <div className="flex items-center justify-center">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className="w-10 h-10 rounded-md"
                        style={{
                          background: secondaryBackground,
                        }}
                      ></button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <ColorPicker
                        color={secondaryBackground}
                        setColor={(color) =>
                          dispatch(
                            setSecondaryBackground({
                              secondaryBackground: color,
                            })
                          )
                        }
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              )}
              {backgroundType !== "solidColor" && (
                <div className="flex items-center justify-center">
                  <button
                    type="button"
                    className="w-10 h-10 rounded-md inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900"
                    onClick={() => dispatch(setSwapGradient())}
                  >
                    <SwapIcon width={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Colors;
