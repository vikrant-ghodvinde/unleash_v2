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

const SocialMedia = () => {
  const { socialMedia, setSocialMedia } = GetContext();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          title="Social Media"
          className={`text-[10px] w-10 h-10 rounded-md inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900`}
        >
          <FacebookIcon width={16} />
        </button>
      </PopoverTrigger>
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
