import { TextIcon } from "@/icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/ui/shadcn/components/ui/popover";
import UserImage from "./content/UserImage";
import UserDetails from "./content/UserDetails";
import SocialMedia from "./content/SocialMedia";
import PostContent from "./content/PostContent";
import PostCount from "./content/PostCount";
import TimeStamp from "./content/TimeStamp";

const Content = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="w-10 h-10 inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900"
        >
          <TextIcon width={16} />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="relative w-full flex items-center gap-x-1 p-1">
          <UserImage />
          <UserDetails />
          <SocialMedia />
          <PostContent />
          <PostCount />
          <TimeStamp />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Content;
