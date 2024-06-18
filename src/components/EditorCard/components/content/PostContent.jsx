import { TextSnippetIcon } from "@/icons";
import { GetContext } from "@/libs/context/context";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/ui/shadcn/components/ui/popover";

const PostContent = () => {
  const { postContent, setPostContent } = GetContext();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          title="Post Content"
          className={`text-[10px] w-10 h-10 rounded-md inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900`}
        >
          <TextSnippetIcon width={16} />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="relative w-80 max-h-[450px] p-2 overflow-y-auto scrollbar-y">
          <div className="relative w-full">
            <div className="w-full flex items-center gap-x-1 mb-1.5">
              <span className="text-xs mb-0.5">Post Content</span>
            </div>
            <div className="relative w-full">
              <textarea
                type="text"
                className="w-full h-28 p-2 text-xs text-white border border-zinc-700 bg-transparent outline-none rounded-md resize-none scrollbar-y"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PostContent;
