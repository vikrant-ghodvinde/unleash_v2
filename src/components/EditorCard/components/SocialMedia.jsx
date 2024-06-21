import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/icons";
import { GetContext } from "@/libs/context/context";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/ui/shadcn/components/ui/popover";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/ui/shadcn/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/ui/shadcn/components/ui/tooltip";

const SocialMedia = () => {
  const { socialMedia, setSocialMedia } = GetContext();
  return (
    <Popover>
      <Tooltip>
        <TooltipTrigger>
          <PopoverTrigger asChild>
            <span
              role="button"
              className="w-10 h-10 inline-flex items-center justify-center text-white text-xs bg-zinc-800 hover:bg-zinc-900"
            >
              <FacebookIcon width={16} />
            </span>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent>Social Media</TooltipContent>
      </Tooltip>
      <PopoverContent>
        <div className="relative max-h-[450px] p-2 overflow-y-auto scrollbar-y">
          <div className="relative w-full">
            <ToggleGroup
              type="multiple"
              value={socialMedia}
              onValueChange={(value) => setSocialMedia(value)}
            >
              <ToggleGroupItem value="facebook">
                <FacebookIcon width={16} />
              </ToggleGroupItem>
              <ToggleGroupItem value="instagram">
                <InstagramIcon width={16} />
              </ToggleGroupItem>
              <ToggleGroupItem value="twitter">
                <TwitterIcon width={16} />
              </ToggleGroupItem>
              <ToggleGroupItem value="linkedin">
                <LinkedInIcon width={16} />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SocialMedia;
