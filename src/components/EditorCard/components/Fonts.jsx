import ColorPicker from "@/components/ColorPicker/ColorPicker";
import { FontsIcon } from "@/icons";
import {
  setPrimaryColor,
  setSecondaryColor,
} from "@/libs/redux/reducers/colorsReducer";
import {
  setPrimaryFontFamily,
  setPrimaryFontWeight,
  setSecondaryFontFamily,
  setSecondaryFontWeight,
} from "@/libs/redux/reducers/fontStyleReducer";
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
import fontFamilies from "@/libs/json/fontFamily.json";

const Fonts = () => {
  const dispatch = useDispatch();
  const {
    primaryFontFamily,
    primaryFontWeight,
    secondaryFontFamily,
    secondaryFontWeight,
  } = useSelector((state) => state.fontStyle);

  const { primaryColor, secondaryColor } = useSelector((state) => state.colors);
  return (
    <Popover>
      <Tooltip>
        <TooltipTrigger>
          <PopoverTrigger asChild>
            <span
              role="button"
              className="w-10 h-10 inline-flex items-center justify-center text-white text-xs bg-zinc-800 hover:bg-zinc-900"
            >
              <FontsIcon width={16} />
            </span>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent>Text Settings</TooltipContent>
      </Tooltip>
      <PopoverContent>
        <div className="grid grid-cols-12">
          <div className="relative col-span-12 p-1">
            <div className="w-full h-10 flex items-center justify-between gap-1">
              <div className="w-10 h-10 inline-flex items-center justify-center">
                H
              </div>
              <div className="relative">
                <Select
                  value={primaryFontFamily}
                  onValueChange={(font) =>
                    dispatch(
                      setPrimaryFontFamily({
                        primaryFontFamily: font,
                      })
                    )
                  }
                >
                  <SelectTrigger className="text-xs w-32">
                    <SelectValue placeholder="Select Font" />
                  </SelectTrigger>
                  <SelectContent>
                    {fontFamilies?.map((font) => (
                      <SelectItem
                        key={font?.name}
                        value={font.font}
                        className="text-xs"
                      >
                        {font?.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="relative">
                <Select
                  value={primaryFontWeight}
                  onValueChange={(weight) =>
                    dispatch(
                      setPrimaryFontWeight({
                        primaryFontWeight: weight,
                      })
                    )
                  }
                >
                  <SelectTrigger className="text-xs w-28">
                    <SelectValue placeholder="Select Font Weight" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="300" className="text-xs">
                      Light
                    </SelectItem>
                    <SelectItem value="400" className="text-xs">
                      Regular
                    </SelectItem>
                    <SelectItem value="500" className="text-xs">
                      Medium
                    </SelectItem>
                    <SelectItem value="600" className="text-xs">
                      Semi Bold
                    </SelectItem>
                    <SelectItem value="700" className="text-xs">
                      Bold
                    </SelectItem>
                    <SelectItem value="800" className="text-xs">
                      Extra Bold
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-center">
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="w-10 h-10 rounded-md bg-slate-500"
                      style={{
                        background: primaryColor,
                      }}
                    ></button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <ColorPicker
                      color={primaryColor}
                      setColor={(color) =>
                        dispatch(
                          setPrimaryColor({
                            primaryColor: color,
                          })
                        )
                      }
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          <div className="relative col-span-12 p-1">
            <div className="w-full h-10 flex items-center justify-between gap-1">
              <div className="w-10 h-10 inline-flex items-center justify-center">
                q
              </div>
              <div className="relative">
                <Select
                  value={secondaryFontFamily}
                  onValueChange={(font) =>
                    dispatch(
                      setSecondaryFontFamily({
                        secondaryFontFamily: font,
                      })
                    )
                  }
                >
                  <SelectTrigger className="text-xs w-32">
                    <SelectValue placeholder="Select Font" />
                  </SelectTrigger>
                  <SelectContent>
                    {fontFamilies?.map((font) => (
                      <SelectItem
                        key={font?.name}
                        value={font.font}
                        className="text-xs"
                      >
                        {font?.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="relative">
                <Select
                  value={secondaryFontWeight}
                  onValueChange={(weight) =>
                    dispatch(
                      setSecondaryFontWeight({
                        secondaryFontWeight: weight,
                      })
                    )
                  }
                >
                  <SelectTrigger className="text-xs w-28">
                    <SelectValue placeholder="Select Font Weight" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="300" className="text-xs">
                      Light
                    </SelectItem>
                    <SelectItem value="400" className="text-xs">
                      Regular
                    </SelectItem>
                    <SelectItem value="500" className="text-xs">
                      Medium
                    </SelectItem>
                    <SelectItem value="600" className="text-xs">
                      Semi Bold
                    </SelectItem>
                    <SelectItem value="700" className="text-xs">
                      Bold
                    </SelectItem>
                    <SelectItem value="800" className="text-xs">
                      Extra Bold
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-center">
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="w-10 h-10 rounded-md bg-slate-500"
                      style={{
                        background: secondaryColor,
                      }}
                    ></button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <ColorPicker
                      color={secondaryColor}
                      setColor={(color) =>
                        dispatch(
                          setSecondaryColor({
                            secondaryColor: color,
                          })
                        )
                      }
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Fonts;
