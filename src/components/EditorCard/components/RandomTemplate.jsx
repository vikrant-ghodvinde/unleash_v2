import { ShuffleIcon } from "@/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/ui/shadcn/components/ui/tooltip";

const RandomTemplate = () => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <span
          role="button"
          className="w-10 h-10 inline-flex items-center justify-center text-white text-xs bg-zinc-800 hover:bg-zinc-900"
        >
          <ShuffleIcon width={16} strokeWidth={2} />
        </span>
      </TooltipTrigger>
      <TooltipContent>Random Templates</TooltipContent>
    </Tooltip>
  );
};

export default RandomTemplate;
