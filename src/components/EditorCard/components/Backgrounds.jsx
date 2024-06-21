import { BackgroundIcon } from "@/icons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/ui/shadcn/components/ui/sheet";
import backgroundJson from "@/libs/json/backgrounds.json";
import { useDispatch, useSelector } from "react-redux";
import {
  setBackgroundImageOpacity,
  setImageBackground,
} from "@/libs/redux/reducers/backgroundsReducer";
import { backgroundConfiguration } from "../helper";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/ui/shadcn/components/ui/popover";
import { Slider } from "@/ui/shadcn/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/ui/shadcn/components/ui/tooltip";

const Backgrounds = () => {
  const dispatch = useDispatch();
  const {
    primaryBackground,
    secondaryBackground,
    swapGradient,
    backgroundType,
    backgroundImageOpacity,
  } = useSelector((state) => state.backgrounds);

  const handleBackgroundOpacity = (value) => {
    dispatch(
      setBackgroundImageOpacity({
        backgroundImageOpacity: value,
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
              <BackgroundIcon width={16} />
            </span>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent>Background Image</TooltipContent>
      </Tooltip>
      <PopoverContent>
        <div className="grid grid-cols-12">
          <div className="relative col-span-12 p-1">
            <div className="w-full h-10 flex items-center justify-between gap-1">
              <div className="relative w-40 px-2">
                <Slider
                  max={1}
                  step={0.1}
                  value={backgroundImageOpacity}
                  onValueChange={(value) => handleBackgroundOpacity(value)}
                />
              </div>
              <div className="relative">
                <Sheet>
                  <SheetTrigger asChild>
                    <button
                      type="button"
                      className="w-10 h-10 rounded-md inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900"
                    >
                      <BackgroundIcon width={16} />
                    </button>
                  </SheetTrigger>
                  <SheetContent className="overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle>Choose background</SheetTitle>
                      <SheetDescription>
                        Give your post a better look and make it more
                        attractive.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="relative mt-8 grid grid-cols-12 gap-5">
                      {backgroundJson?.map((item) => (
                        <div
                          key={item.name}
                          className="col-span-12 sm:col-span-6"
                        >
                          <div
                            role="button"
                            className="w-full min-h-[150px]"
                            style={{
                              background: backgroundConfiguration(
                                backgroundType,
                                primaryBackground,
                                secondaryBackground,
                                swapGradient
                              ),
                            }}
                            onClick={() => {
                              dispatch(
                                setImageBackground({
                                  imageBackground: item.url,
                                })
                              );
                            }}
                          >
                            <img
                              src={item.url}
                              alt=""
                              className="w-full h-full opacity-50"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Backgrounds;
