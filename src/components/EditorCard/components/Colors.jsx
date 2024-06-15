import ColorPicker from "@/components/ColorPicker/ColorPicker";
import { ColorIcon } from "@/icons";
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
import { useState } from "react";

const Colors = () => {
  const [textColor, setTextColor] = useState("#4B5563");
  const [colorType, setColorType] = useState("");
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="w-10 h-10 inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900"
        >
          <ColorIcon width={16} />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="grid grid-cols-12 w-64">
          <div className="relative col-span-12 p-1">
            <div className="w-full h-10 flex items-center justify-between">
              <div className="flex-1">
                <Select onValueChange={setColorType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solidColor">Solid Color</SelectItem>
                    <SelectItem value="linearGradient">
                      Linear Gradient
                    </SelectItem>
                    <SelectItem value="radialGradient">
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
                        background: textColor,
                      }}
                    ></button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <ColorPicker color={textColor} setColor={setTextColor} />
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

export default Colors;
