import ColorPicker from "@/components/ColorPicker/ColorPicker";
import { FontsIcon } from "@/icons";
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

const Fonts = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="w-10 h-10 inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900"
        >
          <FontsIcon width={16} />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="grid grid-cols-12">
          <div className="relative col-span-12 p-1">
            <div className="w-full h-10 flex items-center justify-between gap-1">
              <div className="w-10 h-10 inline-flex items-center justify-center">
                H
              </div>
              <div className="relative">
                <Select
                // value={backgroundType}
                // onValueChange={(type) => handleBackgroundType(type)}
                >
                  <SelectTrigger className="text-xs w-32">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solidColor" className="text-xs">
                      Solid Color
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="relative">
                <Select
                // value={backgroundType}
                // onValueChange={(type) => handleBackgroundType(type)}
                >
                  <SelectTrigger className="text-xs w-32">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light" className="text-xs">
                      Light
                    </SelectItem>
                    <SelectItem value="regular" className="text-xs">
                      Regular
                    </SelectItem>
                    <SelectItem value="medium" className="text-xs">
                      Medium
                    </SelectItem>
                    <SelectItem value="semi-bold" className="text-xs">
                      Semi Bold
                    </SelectItem>
                    <SelectItem value="bold" className="text-xs">
                      Bold
                    </SelectItem>
                    <SelectItem value="extra-bold" className="text-xs">
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
                      // style={{
                      //   background: primaryBackground,
                      // }}
                    ></button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <ColorPicker
                    // color={primaryBackground}
                    // setColor={(color) =>
                    //   dispatch(
                    //     setPrimaryBackground({
                    //       primaryBackground: color,
                    //     })
                    //   )
                    // }
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
                // value={backgroundType}
                // onValueChange={(type) => handleBackgroundType(type)}
                >
                  <SelectTrigger className="text-xs w-32">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solidColor" className="text-xs">
                      Solid Color
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="relative">
                <Select
                // value={backgroundType}
                // onValueChange={(type) => handleBackgroundType(type)}
                >
                  <SelectTrigger className="text-xs w-32">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light" className="text-xs">
                      Light
                    </SelectItem>
                    <SelectItem value="regular" className="text-xs">
                      Regular
                    </SelectItem>
                    <SelectItem value="medium" className="text-xs">
                      Medium
                    </SelectItem>
                    <SelectItem value="semi-bold" className="text-xs">
                      Semi Bold
                    </SelectItem>
                    <SelectItem value="bold" className="text-xs">
                      Bold
                    </SelectItem>
                    <SelectItem value="extra-bold" className="text-xs">
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
                      // style={{
                      //   background: primaryBackground,
                      // }}
                    ></button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <ColorPicker
                    // color={primaryBackground}
                    // setColor={(color) =>
                    //   dispatch(
                    //     setPrimaryBackground({
                    //       primaryBackground: color,
                    //     })
                    //   )
                    // }
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
