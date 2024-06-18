import { TimeZoneIcon } from "@/icons";
import { GetContext } from "@/libs/context/context";
import { getFormattedDateTime } from "@/libs/helper";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/ui/shadcn/components/ui/popover";
import { Switch } from "@/ui/shadcn/components/ui/switch";

const TimeStamp = () => {
  const { timeStamp, setTimeStamp } = GetContext();

  const handleTimeStamp = () => {
    setTimeStamp({
      ...timeStamp,
      visible: !timeStamp.visible,
      text: getFormattedDateTime(),
    });
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          title="Post Content"
          className={`text-[10px] w-10 h-10 rounded-md inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900`}
        >
          <TimeZoneIcon width={16} />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="relative max-h-[450px] p-2 overflow-y-auto scrollbar-y">
          <div className="w-full flex items-center gap-x-1 mb-1">
            <span className="text-xs mb-0.5">Time Stamp</span>
            <Switch
              value={timeStamp.visible}
              checked={timeStamp.visible}
              onCheckedChange={handleTimeStamp}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default TimeStamp;
